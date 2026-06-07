import './CTA.css'

export default function CTA() {
  return (
    <section className="section cta" id="contact">
      <div className="container">
        <div className="cta__card fade-in">
          <div className="cta__glow"></div>
          <h2 className="cta__title">
            Pronto para parar de <span className="hero__highlight">perder vendas</span>?
          </h2>
          <p className="cta__text">
            Cada minuto sem responder um cliente no WhatsApp é uma venda indo pro seu concorrente.
            Fale com a gente agora e veja como a IA pode transformar seu atendimento.
          </p>
          <a
            href="https://wa.me/5511970117565?text=Oi%2C+vim+pelo+site+da+Zapfly+AI+e+quero+saber+mais!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary cta__btn"
          >
            💬 Começar agora pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
