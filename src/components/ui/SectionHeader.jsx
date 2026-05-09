import React from 'react'

export default function SectionHeader({ tag, title, subtitle, center = false }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left' }}>
      {tag && (
        <p style={{
          fontSize: '0.72rem', fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.1em',
          color: '#0fbfcf', marginBottom: '0.65rem',
        }}>{tag}</p>
      )}
      <h2 style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
        fontWeight: 400, color: '#1e3a5f',
        lineHeight: 1.2, marginBottom: '0.85rem', letterSpacing: '-0.5px',
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          color: '#5a7490', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
          lineHeight: 1.65,
          maxWidth: center ? '520px' : '500px',
          margin: center ? '0 auto' : '0',
        }}>{subtitle}</p>
      )}
    </div>
  )
}
