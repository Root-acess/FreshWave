import React, { useRef } from 'react'
import SectionHeader from '../ui/SectionHeader'
import { PLANS } from '../../utils/constants'

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '5rem 1.5rem', background: '#ffffff' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <SectionHeader
          tag="Pricing"
          title="Simple, transparent plans"
          subtitle="No hidden fees. Choose the plan that fits your life."
          center
        />
        <div className="pricing-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
          marginTop: '3rem',
        }}>
          {PLANS.map((plan) => (
            <PriceCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 400px; margin-left: auto; margin-right: auto; }
        }
        @media (min-width: 721px) and (max-width: 900px) {
          .pricing-grid { gap: 1rem !important; }
        }
      `}</style>
    </section>
  )
}

function PriceCard({ plan }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`
    cardRef.current.style.boxShadow = '0 30px 60px rgba(26,107,196,0.14)'
  }

  const handleMouseLeave = () => {
    cardRef.current.style.transform = ''
    cardRef.current.style.boxShadow = ''
    cardRef.current.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease'
    setTimeout(() => { if (cardRef.current) cardRef.current.style.transition = '' }, 500)
  }

  return (
    <div ref={cardRef} className="reveal"
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{
        background: plan.featured ? 'linear-gradient(135deg,#1e3a5f,#1a4a7a)' : '#f4f6f9',
        borderRadius: '24px', padding: '2.25rem 1.75rem',
        border: plan.featured ? '1.5px solid #0fbfcf' : '1.5px solid transparent',
        position: 'relative', overflow: 'hidden',
        transition: 'transform 0.15s ease', willChange: 'transform',
      }}
    >
      {plan.badge && (
        <div style={{
          position: 'absolute', top: '1.1rem', right: '1.1rem',
          background: '#0fbfcf', color: '#1e3a5f',
          fontSize: '0.65rem', fontWeight: 700,
          padding: '0.2rem 0.65rem', borderRadius: '50px',
          textTransform: 'uppercase', letterSpacing: '0.05em',
        }}>{plan.badge}</div>
      )}

      <p style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0fbfcf', marginBottom: '0.5rem' }}>{plan.name}</p>
      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.8rem', fontWeight: 600, color: plan.featured ? '#ffffff' : '#1e3a5f', marginBottom: '0.15rem', lineHeight: 1 }}>{plan.price}</p>
      <p style={{ fontSize: '0.78rem', color: plan.featured ? 'rgba(255,255,255,0.55)' : '#5a7490', marginBottom: '1.4rem' }}>{plan.period}</p>

      <ul style={{ listStyle: 'none', marginBottom: '1.6rem' }}>
        {plan.features.map((feat) => (
          <li key={feat} style={{
            fontSize: '0.84rem',
            color: plan.featured ? 'rgba(255,255,255,0.8)' : '#5a7490',
            padding: '0.4rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem',
            borderBottom: plan.featured ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
          }}>
            <span style={{ color: '#0fbfcf', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>✓</span>
            {feat}
          </li>
        ))}
      </ul>

      <PriceButton plan={plan} />
    </div>
  )
}

function PriceButton({ plan }) {
  const [hovered, setHovered] = React.useState(false)
  const style = plan.featured
    ? { background: hovered ? '#ffffff' : '#0fbfcf', border: '1.5px solid #0fbfcf', color: '#1e3a5f' }
    : { background: hovered ? '#1a6bc4' : 'transparent', border: '1.5px solid #1a6bc4', color: hovered ? '#ffffff' : '#1a6bc4' }

  return (
    <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ width:'100%', padding:'0.8rem', borderRadius:'50px', fontSize:'0.88rem', fontWeight:500, cursor:'pointer', transition:'all 0.25s', fontFamily:'"DM Sans", sans-serif', ...style }}
    >{plan.cta}</button>
  )
}
