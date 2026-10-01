import { Link } from 'react-router-dom'
import { useEffect } from 'react'

// Resolve a URL relative to the site's base path (works for '/', './', or '/repo/').
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

// ------------------------------------------------------------
// Block renderer — each section can hold an array of blocks.
// Falls back to the legacy body/list/body2 fields if no blocks.
// ------------------------------------------------------------
function Block({ block }) {
  switch (block.type) {
    case 'subhead':
      return <h3 className="ps-subhead">{block.text}</h3>

    case 'body':
      return <p>{block.text}</p>

    case 'muted':
      return <p className="ps-muted">{block.text}</p>

    case 'list':
      return (
        <div className="project-list">
          {block.items.map((item, j) => (
            <div key={j} className="project-list-item">
              <div className="label">{item.label}</div>
              <div className="text">{item.text}</div>
            </div>
          ))}
        </div>
      )

    case 'plain-list':
      return (
        <ul className="ps-plain-list">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      )

    case 'code':
      return (
        <pre className="ps-code"><code>{block.content}</code></pre>
      )

    case 'equation':
      return <div className="ps-equation" dangerouslySetInnerHTML={{ __html: block.html }} />

    case 'table':
      return (
        <div className="ps-table-wrap">
          <table className="ps-table">
            <thead>
              <tr>
                {block.headers.map((h, j) => (
                  <th key={j} dangerouslySetInnerHTML={{ __html: h }} />
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => {
                    const isFirst = j === 0
                    const highlight = block.highlightCol === j && cell.highlight
                    const content = typeof cell === 'object' ? cell.text : cell
                    return (
                      <td
                        key={j}
                        className={`${!isFirst ? 'ps-num' : ''} ${highlight ? 'ps-best' : ''}`}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'pill-cycle':
      return (
        <div className="ps-pill-cycle">
          {block.pills.map((p, j) => (
            <span key={j}>
              <span className={`ps-pill ps-pill-${p.color || 'default'}`}>{p.text}</span>
              {j < block.pills.length - 1 && (
                <span className="ps-pill-arrow">{block.arrows?.[j] || '→'}</span>
              )}
              {j === block.pills.length - 1 && block.loopBack && (
                <span className="ps-pill-arrow">↻</span>
              )}
            </span>
          ))}
        </div>
      )

    case 'figure': {
      const src = asset(block.src)
      const poster = block.poster ? asset(block.poster) : undefined
      const isVideo = /\.(mp4|webm|mov)$/i.test(block.src)
      const wrapStyle = block.maxWidth ? { maxWidth: block.maxWidth, marginLeft: 'auto', marginRight: 'auto' } : {}
      return (
        <figure className="ps-figure" style={wrapStyle}>
          {isVideo ? (
            <video
              src={src}
              poster={poster}
              autoPlay
              loop
              muted
              playsInline
              controls={block.controls}
            />
          ) : (
            <img src={src} alt={block.alt || block.caption || ''} />
          )}
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )
    }

    case 'figures': {
      // Side-by-side grid of figures (2 columns; stacks on mobile)
      return (
        <div className="ps-figure-grid">
          {block.items.map((item, j) => {
            const src = asset(item.src)
            const poster = item.poster ? asset(item.poster) : undefined
            const isVideo = /\.(mp4|webm|mov)$/i.test(item.src)
            return (
              <figure key={j} className="ps-figure">
                {isVideo ? (
                  <video
                    src={src}
                    poster={poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={item.controls}
                  />
                ) : (
                  <img src={src} alt={item.alt || item.caption || ''} />
                )}
                {item.caption && <figcaption>{item.caption}</figcaption>}
              </figure>
            )
          })}
        </div>
      )
    }

    case 'code-grid':
      // Two side-by-side code blocks with their own subheads.
      return (
        <div className="ps-code-grid">
          {block.items.map((item, j) => (
            <div key={j}>
              {item.subhead && <h3 className="ps-subhead">{item.subhead}</h3>}
              <pre className="ps-code"><code>{item.content}</code></pre>
            </div>
          ))}
        </div>
      )

    case 'callout':
      return <div className="callout">{block.text}</div>

    case 'spacer':
      return <div style={{ height: block.height || 12 }} />

    default:
      return null
  }
}

export default function ProjectPage({ project }) {
  useEffect(() => { window.scrollTo(0, 0) }, [project.slug])

  const paperHref = project.paperUrl ? asset(project.paperUrl) : null
  const heroMedia = project.heroMedia

  return (
    <>
      {/* HEADER */}
      <section className="project-page-header">
        <div className="container">
          <Link to="/" className="back-link">← Back to home</Link>
          <h1 className="fade-in">{project.title}</h1>
          <p className="project-tagline fade-in fade-in-delay-1">{project.blurb}</p>

          <div className="project-card-tags fade-in fade-in-delay-2" style={{ marginTop: 24 }}>
            {project.tags.map((t) => (
              <span key={t} className="skill-tag">{t}</span>
            ))}
          </div>

          {paperHref && (
            <a
              className="paper-download fade-in fade-in-delay-3"
              href={paperHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="paper-icon">PDF</span>
              Read the paper
              {project.paperNote && <span className="paper-note">· {project.paperNote}</span>}
            </a>
          )}
        </div>
      </section>

      {/* HERO MEDIA (optional) — video/image that opens the piece */}
      {heroMedia && (
        <section className="ps-hero-media">
          <div className="container">
            <Block block={{ ...heroMedia, type: 'figure' }} />
          </div>
        </section>
      )}

      {/* SECTIONS */}
      {project.sections.map((s, i) => (
        <section key={i} className="project-section">
          <div className="container">
            <h2>{s.heading}</h2>

            {/* Rich blocks (preferred for complex projects) */}
            {s.blocks && s.blocks.map((block, j) => (
              <Block key={j} block={block} />
            ))}

            {/* Legacy fields (kept for backwards compatibility) */}
            {s.body && <p>{s.body}</p>}
            {s.list && (
              <div className="project-list">
                {s.list.map((item, j) => (
                  <div key={j} className="project-list-item">
                    <div className="label">{item.label}</div>
                    <div className="text">{item.text}</div>
                  </div>
                ))}
              </div>
            )}
            {s.body2 && <p style={{ marginTop: 24 }}>{s.body2}</p>}
            {s.timeline && (
              <div className="phase-list">
                {s.timeline.map((t, j) => (
                  <div key={j} className="phase-item">
                    <div className="phase-num">{t.phase}</div>
                    <div className="phase-weeks">{t.weeks}</div>
                    <div className="phase-title">{t.title}</div>
                    <div className="phase-note">{t.note}</div>
                  </div>
                ))}
              </div>
            )}
            {s.metrics && (
              <div className="metrics-grid">
                {s.metrics.map((m, j) => (
                  <div key={j} className="metric-card">
                    <div className="metric-value">{m.value}</div>
                    <div className="metric-label">{m.label}</div>
                    {m.sub && <div className="metric-sub">{m.sub}</div>}
                  </div>
                ))}
              </div>
            )}
            {s.callout && <div className="callout">{s.callout}</div>}
          </div>
        </section>
      ))}

      {/* Bottom paper CTA when a paper exists */}
      {paperHref && (
        <section className="project-section" style={{ borderBottom: 'none' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ marginBottom: 16 }}>Full paper</div>
            <a
              className="paper-download"
              href={paperHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="paper-icon">PDF</span>
              Download the full paper
            </a>
          </div>
        </section>
      )}
    </>
  )
}
