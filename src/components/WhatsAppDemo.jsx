import { useState, useEffect, useRef } from 'react'
import './WhatsAppDemo.css'

const messages = [
  { from: 'client', text: 'Opa, tem air max?' },
  { from: 'bot', text: 'E aí mano! Temos sim 🔥 Deixa eu buscar aqui pra você...' },
  { from: 'bot', type: 'product', name: 'Nike Air Max 90 - Branco/Preto', price: 'R$ 349,90', sizes: '38, 39, 40, 41, 42, 43', link: 'oliveiradrops.com.br/air-max-90' },
  { from: 'client', text: 'Quero esse! Tamanho 41' },
  { from: 'bot', text: 'Show mano! 🛒 Me passa seu nome e e-mail que já gero o link de pagamento pra você' },
  { from: 'client', text: 'Gustavo, gustavo@email.com' },
  { from: 'bot', text: 'Pronto Gustavo! Aqui está seu link de checkout seguro 👇' },
  { from: 'bot', type: 'link', text: '🔗 Finalizar compra — R$ 349,90' },
]

export default function WhatsAppDemo() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [typing, setTyping] = useState(false)
  const [started, setStarted] = useState(false)
  const chatRef = useRef(null)
  const sectionRef = useRef(null)

  // Start animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [started])

  // Animate messages appearing
  useEffect(() => {
    if (!started || visibleCount >= messages.length) return

    setTyping(true)
    const delay = messages[visibleCount]?.from === 'bot' ? 1800 : 1200

    const timer = setTimeout(() => {
      setTyping(false)
      setVisibleCount((prev) => prev + 1)
    }, delay)

    return () => clearTimeout(timer)
  }, [started, visibleCount])

  // Auto-scroll chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [visibleCount, typing])

  const currentTime = () => {
    const d = new Date()
    return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
  }

  return (
    <section className="section whatsapp-demo" id="demo" ref={sectionRef}>
      <div className="container whatsapp-demo__layout">
        <div className="whatsapp-demo__text fade-in">
          <div className="section-tag">💬 Demonstração</div>
          <h2 className="section-title">Veja a IA vendendo em tempo real.</h2>
          <p className="section-subtitle">
            Essa é uma simulação de como o seu agente atende um cliente no WhatsApp.
            Ele busca os produtos, manda foto, preço e gera o link de pagamento —
            tudo sozinho, em segundos.
          </p>
          <ul className="whatsapp-demo__features">
            <li>✅ Responde em menos de 5 segundos</li>
            <li>✅ Funciona 24 horas, 7 dias por semana</li>
            <li>✅ Busca produtos com foto e link</li>
            <li>✅ Gera checkout automaticamente</li>
          </ul>
        </div>

        <div className="phone-mockup fade-in">
          {/* Phone frame */}
          <div className="phone-frame">
            {/* Status bar */}
            <div className="phone-status-bar">
              <span>{currentTime()}</span>
              <div className="phone-notch"></div>
              <div className="phone-status-icons">
                <span>📶</span>
                <span>🔋</span>
              </div>
            </div>

            {/* WhatsApp header */}
            <div className="wa-header">
              <div className="wa-header__back">←</div>
              <div className="wa-header__avatar">🤖</div>
              <div className="wa-header__info">
                <div className="wa-header__name">Zapfly AI</div>
                <div className="wa-header__status">online</div>
              </div>
            </div>

            {/* Chat area */}
            <div className="wa-chat" ref={chatRef}>
              <div className="wa-chat__date">
                <span>Hoje</span>
              </div>

              {messages.slice(0, visibleCount).map((msg, i) => (
                <div
                  key={i}
                  className={`wa-bubble ${msg.from === 'client' ? 'wa-bubble--sent' : 'wa-bubble--received'} wa-bubble--animate`}
                >
                  {msg.type === 'product' ? (
                    <div className="wa-product-card">
                      <div className="wa-product-card__img">👟</div>
                      <div className="wa-product-card__info">
                        <strong>{msg.name}</strong>
                        <span className="wa-product-card__sizes">Tamanhos: {msg.sizes}</span>
                        <span className="wa-product-card__price">{msg.price}</span>
                        <span className="wa-product-card__link">🔗 {msg.link}</span>
                      </div>
                    </div>
                  ) : msg.type === 'link' ? (
                    <div className="wa-link-preview">
                      <div className="wa-link-preview__icon">🛒</div>
                      <span>{msg.text}</span>
                    </div>
                  ) : (
                    <span>{msg.text}</span>
                  )}
                  <span className="wa-bubble__time">
                    {currentTime()} {msg.from === 'client' && '✓✓'}
                  </span>
                </div>
              ))}

              {typing && visibleCount < messages.length && (
                <div className="wa-bubble wa-bubble--received wa-typing">
                  <div className="wa-typing__dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input bar */}
            <div className="wa-input-bar">
              <div className="wa-input-bar__field">Digite uma mensagem...</div>
              <div className="wa-input-bar__mic">🎤</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
