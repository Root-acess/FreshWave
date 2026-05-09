import React from 'react'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#1e3a5f',
        padding: '3rem 4rem',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.82rem',
      }}
    >
      <p>
        <strong style={{ color: 'rgba(255,255,255,0.7)' }}>FreshWave</strong>
        {' '}· Premium Laundry Service · Bengaluru, India
      </p>
      <p style={{ marginTop: '0.5rem' }}>
        © {new Date().getFullYear()} FreshWave. All rights reserved. Crafted with care.
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        {['Privacy Policy', 'Terms of Service', 'Contact Us', 'Careers'].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              fontSize: '0.8rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#0fbfcf')}
            onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.35)')}
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  )
}
