import './Clients.css'

const clients = [
  { name: 'Oliveira Drops', logo: '/oliveira-drops-logo.png' },
  { name: 'Vittinho Imports', logo: '/vittinho-imports-logo.png' },
  { name: 'Oliveira Store', logo: '/oliveira-store-logo.png' },
  { name: 'Royal7', logo: '/royal7-logo.png' },
  { name: 'Perife Style', logo: '/perife-style-logo.png' },
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
          {duplicated.map((client, i) => (
            <div className="clients__item" key={i}>
              <div className="clients__avatar">
                <img src={client.logo} alt={`Logo ${client.name}`} className="clients__logo" />
              </div>
              <span className="clients__name">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
