import React from 'react'
import Button from '../ui/Button'

export default function CTA() {
  return (
    <section style={{
      padding: '5rem 1.5rem',
      background: 'linear-gradient(135deg,#1e3a5f 0%,#1a4a7a 50%,#0a3060 100%)',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{ position:'absolute', top:'-60px', left:'-60px', width:'300px', height:'300px', borderRadius:'50%', background:'rgba(15,191,207,0.07)', filter:'blur(60px)', pointerEvents:'none' }} />
      <div aria-hidden="true" style={{ position:'absolute', bottom:'-60px', right:'-60px', width:'400px', height:'400px', borderRadius:'50%', background:'rgba(26,107,196,0.08)', filter:'blur(80px)', pointerEvents:'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#0fbfcf', marginBottom: '1rem' }}>✦ Start Today</p>
        <h2 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          fontWeight: 300, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.5px',
        }}>Ready for fresher clothes?</h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2.2rem' }}>
          Join over 50,000 happy customers who've made laundry the easiest part of their week.
        </p>
        <Button variant="aqua" style={{ fontSize: '0.97rem', fontWeight: 600 }}>
          Schedule Your First Pickup →
        </Button>
      </div>
    </section>
  )
}
