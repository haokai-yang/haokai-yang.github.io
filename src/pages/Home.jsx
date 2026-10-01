import { Link } from 'react-router-dom'
import { profile, skills, journey, projects } from '../content.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="fade-in fade-in-delay-1">
            {profile.name}, <em>student researcher</em>
          </h1>
          <p className="tagline fade-in fade-in-delay-2">{profile.tagline}</p>
          <p className="intro fade-in fade-in-delay-3">{profile.intro}</p>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-label">Projects</div>
          <h2 className="section-title">Some questions I'm working on.</h2>
          <div className="project-cards">
            {projects.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="project-card">
                <div className="project-card-eyebrow">{p.status}</div>
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <div className="project-card-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
                <div className="project-card-cta">Read more</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container">
          <div className="section-label">Topics studied</div>
          <h2 className="section-title">What I've been learning.</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skill-group">
                <h3>{group}</h3>
                <div className="skill-tags">
                  {items.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="journey">
        <div className="container">
          <div className="section-label">Learning journey</div>
          <h2 className="section-title">A timeline of the path here.</h2>
          <div className="journey">
            {journey.map((j, i) => (
              <div key={i} className="journey-item">
                <div className="journey-period">{j.period}</div>
                <div className="journey-content">
                  <h3>{j.title}</h3>
                  <p>{j.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
