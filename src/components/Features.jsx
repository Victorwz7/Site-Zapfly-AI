import './Features.css'

const features = [
  {
    icon: '🤖',
    title: 'Atendimento Inteligente',
    description: 'Sua IA responde dúvidas, busca produtos no catálogo com foto e link, e fecha vendas sozinha pelo WhatsApp. Funciona de madrugada, feriado e fim de semana.'
  },
  {
    icon: '📦',
    title: 'Pós-Venda Automático',
    description: 'Confirmação de pedido pago, cobrança de comprovante Pix, envio do código de rastreio e tradução de status de entrega. Tudo no automático.'
  },
  {
    icon: '🛒',
    title: 'Recuperação de Carrinho',
    description: 'Clientes que abandonaram o checkout recebem mensagem automática no WhatsApp com o link para finalizar a compra. Venda que ia pro lixo volta.'
  }
]

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="features__header fade-in">
          <div className="section-tag">🚀 Funcionalidades</div>
          <h2 className="section-title">Tudo que seu e-commerce precisa, num único agente.</h2>
          <p className="section-subtitle">
            Uma IA treinada exclusivamente para o seu catálogo, que conhece cada produto de cor e atende como o melhor vendedor da sua equipe.
          </p>
        </div>
        <div className="features__grid">
          {features.map((f, i) => (
            <div className="glass-card features__card fade-in" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="features__icon">{f.icon}</div>
              <h3 className="features__card-title">{f.title}</h3>
              <p className="features__card-desc">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
