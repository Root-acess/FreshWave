import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import { SERVICES } from '../../utils/constants'

const FLOAT_DELAYS = ['', 'float-delay-1', 'float-delay-2', 'float-delay-3', 'float-delay-4']

export default function Services() {
  return (
    <section id="services" style={{ padding: '5rem 1.5rem', background: '#ffffff' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <SectionHeader
          tag="What We Offer"
          title="Complete laundry solutions"
          subtitle="From daily wear to delicate fabrics — we offer tailored care for every garment type."
        />
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '1.25rem',
          marginTop: '3rem',
        }}>
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} floatClass={FLOAT_DELAYS[i]} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({ service, floatClass }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      className="reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'linear-gradient(135deg,rgba(26,107,196,0.04),rgba(15,191,207,0.05))' : '#f4f6f9',
        borderRadius: '20px',
        padding: '1.75rem 1.25rem',
        textAlign: 'center',
        transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        border: hovered ? '1px solid rgba(26,107,196,0.2)' : '1px solid transparent',
        boxShadow: hovered ? '0 20px 50px rgba(26,107,196,0.1)' : 'none',
        transform: hovered ? 'translateY(-6px) rotate(0.4deg)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      <div className={`animate-float-icon ${floatClass}`} style={{
        width: 58, height: 58, borderRadius: 16,
        background: 'linear-gradient(135deg,#e0f4ff,#d0f0fc)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 1rem', fontSize: '1.65rem',
      }}>{service.icon}</div>
      <h3 style={{ fontWeight: 600, fontSize: '0.92rem', color: '#1e3a5f', marginBottom: '0.4rem' }}>{service.title}</h3>
      <p style={{ fontSize: '0.8rem', color: '#5a7490', lineHeight: 1.55 }}>{service.description}</p>
    </div>
  )
}
