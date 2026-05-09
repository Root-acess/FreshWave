import React from 'react'
import WashingMachine from '../ui/WashingMachine'
import Button from '../ui/Button'

const STATS = [
  { num: '50K+', label: 'Happy Customers' },
  { num: '4.9★', label: 'Average Rating' },
  { num: '24h', label: 'Turnaround' },
]

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 2rem 3rem',
        background: 'linear-gradient(135deg,#eaf6fd 0%,#f0f9ff 40%,#e8f4ff 70%,#f5fbff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="hero-inner" style={{
        width: '100%',
        maxWidth: '1140px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '2.5rem',
        flexWrap: 'wrap',
      }}>
        {/* Left — copy */}
        <div className="animate-fade-rise hero-copy" style={{ flex: 1, minWidth: '280px', maxWidth: '580px', zIndex: 2 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(15,191,207,0.12)', color: '#0a8fa0',
            border: '1px solid rgba(15,191,207,0.3)',
            padding: '0.4rem 1rem', borderRadius: '50px',
            fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.05em', textTransform: 'uppercase',
            marginBottom: '1.3rem',
          }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#0fbfcf', display:'inline-block', animation:'lightBlink 2s ease-in-out infinite' }} />
            Premium Laundry Service
          </div>

          <h1 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            fontWeight: 300, lineHeight: 1.1,
            color: '#1e3a5f', marginBottom: '1.2rem', letterSpacing: '-1px',
          }}>
            Your clothes deserve
            <br />
            <strong style={{ fontWeight: 600, color: '#1a6bc4' }}>the finest care</strong>
          </h1>

          <p style={{ fontSize: '1rem', color: '#5a7490', lineHeight: 1.7, maxWidth: '460px', marginBottom: '2rem' }}>
            Professional wash, dry &amp; fold delivered to your door. Schedule a pickup in seconds — we handle the rest with white-glove precision.
          </p>

          <div className="hero-btns" style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
            <Button variant="primary">Schedule Pickup</Button>
            <Button variant="secondary">View Pricing</Button>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{
            display: 'flex', gap: '2rem', marginTop: '2.5rem',
            paddingTop: '2rem', borderTop: '1px solid rgba(26,107,196,0.12)',
            flexWrap: 'wrap',
          }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.9rem', fontWeight: 600, color: '#1e3a5f' }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', color: '#5a7490', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — animated washing machine */}
        <div className="hero-machine" style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2, width: '100%' }}>
          <WashingMachine />
        </div>
      </div>

      <style>{`
        .hero-machine { max-width: 340px; margin: 0 auto; }
        @media (min-width: 860px) {
          .hero-inner { flex-wrap: nowrap; }
          .hero-copy { min-width: 320px; }
          .hero-machine { width: auto !important; }
        }
        @media (max-width: 480px) {
          .hero-btns button { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
