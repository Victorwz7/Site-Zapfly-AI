import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: '🔌',
    title: 'Conectamos ao seu WhatsApp',
    description: 'Integramos a IA diretamente no número da sua loja usando a API oficial da Meta. Sem risco de banimento.'
  },
  {
    number: '02',
    icon: '🧠',
    title: 'A IA aprende seu catálogo',
    description: 'Ela mapeia todos os seus produtos, fotos, preços, tamanhos e categorias. Fica pronta para vender em minutos.'
  },
  {
    number: '03',
    icon: '🚀',
    title: 'Começa a vender sozinha',
    description: 'De dia, de noite, feriado e fim de semana. A IA atende, recomenda produtos e gera links de pagamento no automático.'
  }
]

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="how">
      <div className="container">
        <div className="how-it-works__header fade-in">
          <div className="section-tag">⚙️ Como funciona</div>
          <h2 className="section-title">3 passos para automatizar seu WhatsApp.</h2>
          <p className="section-subtitle">
            Sem complicação. A gente cuida de toda a parte técnica enquanto você foca no seu negócio.
          </p>
        </div>
        <div className="how-it-works__steps">
          {steps.map((s, i) => (
            <div className="how-it-works__step fade-in" key={i} style={{ transitionDelay: `${i * 0.2}s` }}>
              <div className="how-it-works__number">{s.number}</div>
              <div className="how-it-works__icon">{s.icon}</div>
              <h3 className="how-it-works__title">{s.title}</h3>
              <p className="how-it-works__desc">{s.description}</p>
              {i < steps.length - 1 && <div className="how-it-works__connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
