import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-eyebrow">404</div>
        <h1>Page not found.</h1>
        <p className="tagline" style={{ marginTop: 24 }}>
          <Link to="/">← Back to home</Link>
        </p>
      </div>
    </section>
  )
}
