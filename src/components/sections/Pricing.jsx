import React, { useRef } from 'react'
import SectionHeader from '../ui/SectionHeader'
import { PLANS } from '../../utils/constants'

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ padding: '6rem 4rem', background: '#ffffff' }}
    >
      <SectionHeader
        tag="Pricing"
        title="Simple, transparent plans"
        subtitle="No hidden fees. Choose the plan that fits your life."
        center
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          marginTop: '3.5rem',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {PLANS.map((plan) => (
          <PriceCard key={plan.id} plan={plan} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #pricing { padding: 4rem 1.5rem !important; }
          #pricing .pricing-grid { grid-template-columns: 1fr !important; max-width: 400px; margin: 0 auto; }
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
    setTimeout(() => {
      if (cardRef.current) cardRef.current.style.transition = ''
    }, 500)
  }

  return (
    <div
      ref={cardRef}
      className="reveal"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: plan.featured
          ? 'linear-gradient(135deg,#1e3a5f,#1a4a7a)'
          : '#f4f6f9',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        border: plan.featured
          ? '1.5px solid #0fbfcf'
          : '1.5px solid transparent',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.15s ease',
        willChange: 'transform',
      }}
    >
      {plan.badge && (
        <div
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: '#0fbfcf',
            color: '#1e3a5f',
            fontSize: '0.7rem',
            fontWeight: 700,
            padding: '0.25rem 0.75rem',
            borderRadius: '50px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {plan.badge}
        </div>
      )}

      <p
        style={{
          fontSize: '0.78rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#0fbfcf',
          marginBottom: '0.6rem',
        }}
      >
        {plan.name}
      </p>
      <p
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '3rem',
          fontWeight: 600,
          color: plan.featured ? '#ffffff' : '#1e3a5f',
          marginBottom: '0.2rem',
          lineHeight: 1,
        }}
      >
        {plan.price}
      </p>
      <p
        style={{
          fontSize: '0.82rem',
          color: plan.featured ? 'rgba(255,255,255,0.55)' : '#5a7490',
          marginBottom: '1.5rem',
        }}
      >
        {plan.period}
      </p>

      <ul style={{ listStyle: 'none', marginBottom: '1.8rem' }}>
        {plan.features.map((feat) => (
          <li
            key={feat}
            style={{
              fontSize: '0.88rem',
              color: plan.featured ? 'rgba(255,255,255,0.8)' : '#5a7490',
              padding: '0.45rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              borderBottom: plan.featured
                ? '1px solid rgba(255,255,255,0.1)'
                : '1px solid rgba(0,0,0,0.05)',
            }}
          >
            <span style={{ color: '#0fbfcf', fontWeight: 700, fontSize: '0.9rem' }}>
              ✓
            </span>
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
    ? {
        background: hovered ? '#ffffff' : '#0fbfcf',
        border: hovered ? '1.5px solid #ffffff' : '1.5px solid #0fbfcf',
        color: '#1e3a5f',
      }
    : {
        background: hovered ? '#1a6bc4' : 'transparent',
        border: '1.5px solid #1a6bc4',
        color: hovered ? '#ffffff' : '#1a6bc4',
      }

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%',
        padding: '0.8rem',
        borderRadius: '50px',
        fontSize: '0.9rem',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.25s',
        fontFamily: '"DM Sans", sans-serif',
        ...style,
      }}
    >
      {plan.cta}
    </button>
  )
}
