import React, { useState, useEffect } from 'react'
import { NAV_LINKS } from '../../utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.1rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled
          ? 'rgba(255,255,255,0.96)'
          : 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(26,107,196,0.08)',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.7rem',
          fontWeight: 600,
          color: '#1e3a5f',
          textDecoration: 'none',
          letterSpacing: '-0.5px',
        }}
      >
        Fresh<span style={{ color: '#0fbfcf' }}>Wave</span>
      </a>

      {/* Desktop links */}
      <ul
        style={{
          display: 'flex',
          gap: '2.2rem',
          listStyle: 'none',
        }}
        className="nav-links-desktop"
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color: '#5a7490',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#1a6bc4')}
              onMouseLeave={(e) => (e.target.style.color = '#5a7490')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        style={{
          background: '#1a6bc4',
          color: '#fff',
          border: 'none',
          padding: '0.6rem 1.5rem',
          borderRadius: '50px',
          fontSize: '0.88rem',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.25s',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#1e3a5f'
          e.target.style.transform = 'scale(1.04)'
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#1a6bc4'
          e.target.style.transform = 'scale(1)'
        }}
      >
        Book a Pickup
      </button>

      {/* Mobile hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          color: '#1e3a5f',
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(18px)',
            padding: '1.5rem 2rem',
            borderBottom: '1px solid rgba(26,107,196,0.1)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                color: '#5a7490',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                borderBottom: '1px solid rgba(26,107,196,0.06)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
          nav { padding: 1rem 1.5rem !important; }
        }
      `}</style>
    </nav>
  )
}
