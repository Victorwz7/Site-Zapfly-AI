import { useState, useEffect, useRef } from 'react'
import './Stats.css'

const stats = [
  { value: 7, suffix: '+', label: 'Clientes ativos' },
  { value: 24, suffix: '/7', label: 'Atendimento' },
  { value: 5, prefix: '<', suffix: 's', label: 'Tempo de resposta' },
  { value: 80, suffix: '%', label: 'Automação do suporte' },
]

function AnimatedCounter({ value, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let current = 0
    const step = Math.max(1, Math.floor(value / 40))
    const interval = setInterval(() => {
      current += step
      if (current >= value) {
        setCount(value)
        clearInterval(interval)
      } else {
        setCount(current)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [started, value])

  return (
    <span ref={ref} className="stat__value">
      {prefix}{count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="section stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div className="stats__item fade-in" key={i}>
              <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
