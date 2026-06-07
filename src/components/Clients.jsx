import './Clients.css'

const clients = [
  'Oliveira Drops',
  'ParesiNK',
  'Vittinho Imports',
  'Corre do Rocha',
  'Oliveira Store',
  'Royal7',
  'Perife Style',
]

export default function Clients() {
  // Duplicate for infinite scroll effect
  const duplicated = [...clients, ...clients]

  return (
    <section className="section clients" id="clients">
      <div className="container">
        <div className="clients__header fade-in">
          <div className="section-tag">🤝 Confiança</div>
          <h2 className="section-title">Lojas que já confiam na Zapfly AI.</h2>
          <p className="section-subtitle">
            Esses e-commerces já estão vendendo no automático com a nossa inteligência artificial.
          </p>
        </div>
      </div>

      <div className="clients__marquee">
        <div className="clients__track">
          {duplicated.map((name, i) => (
            <div className="clients__item" key={i}>
              <span className="clients__name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
