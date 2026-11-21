import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { profile, projects, meta } from './content.js'

function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'

  // Nav that works on any page: on home, scroll; elsewhere, route home then scroll.
  const goToSection = (sectionId) => (e) => {
    e.preventDefault()
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: sectionId } })
    }
  }

  return (
    <header className="site-header">
      <div className="container container-wide">
        <Link to="/" className="brand">
          <span className="brand-mark">●</span> {profile.name}
        </Link>
        <nav className="site-nav">
          <Link to="/" className={isHome ? 'active' : ''}>Home</Link>
          <a href="#projects" onClick={goToSection('projects')}>Projects</a>
          <a href="#journey" onClick={goToSection('journey')}>Journey</a>
        </nav>
      </div>
    </header>
  )
}

// When the home page mounts with a scrollTo in router state, scroll to that section.
function ScrollHandler() {
  const location = useLocation()
  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) {
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }, [location])
  return null
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container container-wide">
        {meta.copyright} · {meta.builtWith}
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="page">
      <Header />
      <ScrollHandler />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {projects.map((p) => (
            <Route
              key={p.slug}
              path={`/projects/${p.slug}`}
              element={<ProjectPage project={p} />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
