import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import { STEPS } from '../../utils/constants'

export default function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        padding: '6rem 4rem',
        background: 'linear-gradient(180deg,#f0f8ff 0%,#ffffff 100%)',
      }}
    >
      <SectionHeader
        tag="Process"
        title="How FreshWave works"
        subtitle="Clean clothes in four effortless steps. We've designed every moment to be frictionless."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          marginTop: '3.5rem',
          position: 'relative',
        }}
      >
        {/* Connecting line */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 36,
            left: '12%',
            right: '12%',
            height: '2px',
            background: 'linear-gradient(90deg, #0fbfcf, #1a6bc4)',
            opacity: 0.25,
            zIndex: 0,
          }}
        />

        {STEPS.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #how { padding: 4rem 1.5rem !important; }
          #how .steps-grid { grid-template-columns: repeat(2,1fr) !important; gap: 2rem !important; }
          #how .connector-line { display: none; }
        }
      `}</style>
    </section>
  )
}

function StepCard({ step }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      className="reveal"
      style={{ textAlign: 'center', padding: '0 1rem', position: 'relative', zIndex: 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1a6bc4, #0fbfcf)',
          color: '#fff',
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.5rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.2rem',
          boxShadow: '0 8px 24px rgba(26,107,196,0.25)',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          transform: hovered ? 'scale(1.12)' : 'scale(1)',
        }}
      >
        {step.number}
      </div>
      <h4
        style={{
          fontWeight: 600,
          fontSize: '0.95rem',
          color: '#1e3a5f',
          marginBottom: '0.5rem',
        }}
      >
        {step.title}
      </h4>
      <p style={{ fontSize: '0.83rem', color: '#5a7490', lineHeight: 1.55 }}>
        {step.description}
      </p>
    </div>
  )
}
