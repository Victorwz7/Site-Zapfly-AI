import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: "A IA consegue vender ou só tira dúvidas?",
    answer: "A IA é treinada para vender! Ela entende intenções de compra, mostra fotos e links do seu catálogo, quebra objeções e leva o cliente até o fechamento da venda."
  },
  {
    question: "Preciso trocar o meu número de WhatsApp?",
    answer: "Não! A nossa IA se integra diretamente ao número de WhatsApp que você já usa na sua loja hoje. Sem dor de cabeça para seus clientes."
  },
  {
    question: "O que acontece se a IA não souber responder algo?",
    answer: "Nós configuramos um transbordo inteligente. Se a IA não souber a resposta ou o cliente pedir para falar com um humano, ela pausa automaticamente e chama sua equipe no chat na mesma hora."
  },
  {
    question: "A IA envia mensagens para recuperar carrinhos?",
    answer: "Sim! A IA puxa os dados de clientes que abandonaram o carrinho e envia mensagens super persuasivas (e até cupons) no WhatsApp para recuperar e converter essa venda."
  },
  {
    question: "A Zapfly AI funciona com a minha plataforma?",
    answer: "Nós nos integramos nativamente com as principais plataformas de e-commerce do mercado (Nuvemshop, Shopify, Yampi, Tray, Cartpanda, etc) para ler seu estoque e produtos em tempo real."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section faq" id="faq">
      <div className="container faq__container">
        <div className="faq__header fade-in">
          <div className="section-tag">Dúvidas Frequentes</div>
          <h2 className="section-title">Ainda com dúvidas?</h2>
          <p className="section-subtitle">
            Tudo o que você precisa saber sobre nossos agentes de IA.
          </p>
        </div>
        
        <div className="faq__list fade-in">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq__item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <button className="faq__question">
                {faq.question}
                <span className="faq__icon"></span>
              </button>
              <div className="faq__answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
