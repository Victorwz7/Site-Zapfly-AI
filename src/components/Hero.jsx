import ParticlesBackground from './ParticlesBackground'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <ParticlesBackground />
      <div className="hero__gradient-orb hero__gradient-orb--1"></div>
      <div className="hero__gradient-orb hero__gradient-orb--2"></div>

      <div className="container hero__content">
        <div className="section-tag">⚡ Inteligência Artificial para E-commerce</div>
        <h1 className="hero__title">
          Seu e-commerce vendendo no <span className="hero__highlight">automático</span>, 24 horas por dia.
        </h1>
        <p className="hero__subtitle">
          Agentes de IA que atendem seus clientes no WhatsApp, mostram produtos com fotos e links,
          recuperam carrinhos abandonados e fazem todo o pós-venda — sem precisar de um humano.
        </p>
        <div className="hero__actions">
          <a
            href="https://wa.me/5511970117565?text=Oi%2C+vim+pelo+site+da+Zapfly+AI+e+quero+saber+mais!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Quero para minha loja →
          </a>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver demonstração
          </button>
        </div>
      </div>
    </section>
  )
}
