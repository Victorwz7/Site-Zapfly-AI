import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">⚡</span>
          <span className="navbar__logo-text">Zapfly <span className="navbar__logo-ai">AI</span></span>
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><button onClick={() => scrollTo('features')}>Funcionalidades</button></li>
          <li><button onClick={() => scrollTo('demo')}>Demo</button></li>
          <li><button onClick={() => scrollTo('clients')}>Clientes</button></li>
          <li>
            <a
              href="https://wa.me/5511970117565?text=Oi%2C+vim+pelo+site+da+Zapfly+AI+e+quero+saber+mais!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary navbar__cta"
            >
              Fale Conosco
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
