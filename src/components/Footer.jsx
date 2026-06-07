import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo">
            <span className="navbar__logo-icon">⚡</span>
            <span className="navbar__logo-text">Zapfly <span className="navbar__logo-ai">AI</span></span>
          </span>
          <p className="footer__tagline">Inteligência Artificial para E-commerce.</p>
        </div>
        <div className="footer__links">
          <a
            href="https://wa.me/5511948391961"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a href="https://www.instagram.com/zapflyai/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <div className="footer__copy">
          © {new Date().getFullYear()} Zapfly AI. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
