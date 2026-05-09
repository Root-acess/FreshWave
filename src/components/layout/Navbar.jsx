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

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '0.9rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.90)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(26,107,196,0.1)' : '1px solid transparent',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          boxShadow: scrolled ? '0 2px 20px rgba(26,107,196,0.07)' : 'none',
        }}
      >
        <a href="#" style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.65rem', fontWeight: 600,
          color: '#1e3a5f', textDecoration: 'none',
          letterSpacing: '-0.5px', flexShrink: 0,
        }}>
          Fresh<span style={{ color: '#0fbfcf' }}>Wave</span>
        </a>

        <ul className="nav-desktop-links" style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link"
                style={{ color: '#5a7490', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s', whiteSpace: 'nowrap' }}
                onMouseEnter={(e) => (e.target.style.color = '#1a6bc4')}
                onMouseLeave={(e) => (e.target.style.color = '#5a7490')}
              >{link.label}</a>
            </li>
          ))}
        </ul>

        <button className="nav-desktop-cta"
          style={{ background: '#1a6bc4', color: '#fff', border: 'none', padding: '0.6rem 1.4rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.25s', whiteSpace: 'nowrap', flexShrink: 0 }}
          onMouseEnter={(e) => { e.target.style.background='#1e3a5f'; e.target.style.transform='scale(1.04)' }}
          onMouseLeave={(e) => { e.target.style.background='#1a6bc4'; e.target.style.transform='scale(1)' }}
        >Book a Pickup</button>

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px', width: 28, alignItems: 'flex-end' }}
        >
          <span style={{ display:'block', height:2, background:'#1e3a5f', borderRadius:2, transition:'all 0.3s', width:'100%', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ display:'block', height:2, background:'#1e3a5f', borderRadius:2, transition:'all 0.3s', width:'70%', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display:'block', height:2, background:'#1e3a5f', borderRadius:2, transition:'all 0.3s', width: menuOpen ? '100%' : '50%', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* Overlay */}
      <div onClick={() => setMenuOpen(false)} style={{
        position:'fixed', inset:0, zIndex:99,
        background:'rgba(10,24,50,0.5)', backdropFilter:'blur(4px)',
        opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'all' : 'none',
        transition:'opacity 0.3s ease',
      }} />

      {/* Drawer */}
      <div style={{
        position:'fixed', top:0, right:0, bottom:0, zIndex:101,
        width:'72vw', maxWidth:'300px', background:'#ffffff',
        padding:'5rem 1.75rem 2rem',
        display:'flex', flexDirection:'column',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition:'transform 0.35s cubic-bezier(0.34,1.1,0.64,1)',
        boxShadow:'-8px 0 40px rgba(26,107,196,0.15)',
      }}>
        <div style={{ fontFamily:'"Cormorant Garamond", serif', fontSize:'1.4rem', fontWeight:600, color:'#1e3a5f', marginBottom:'1.5rem', paddingBottom:'1rem', borderBottom:'1px solid rgba(26,107,196,0.1)' }}>
          Fresh<span style={{ color:'#0fbfcf' }}>Wave</span>
        </div>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick} style={{
            display:'flex', alignItems:'center', padding:'0.9rem 0',
            color:'#1e3a5f', textDecoration:'none', fontSize:'1rem', fontWeight:500,
            borderBottom:'1px solid rgba(26,107,196,0.07)', transition:'color 0.2s',
          }}>
            {link.label}
            <span style={{ marginLeft:'auto', color:'#0fbfcf', fontSize:'0.75rem' }}>→</span>
          </a>
        ))}
        <button onClick={handleLinkClick} style={{
          marginTop:'1.8rem', background:'linear-gradient(135deg,#1a6bc4,#0fbfcf)',
          color:'#fff', border:'none', padding:'1rem', borderRadius:'14px',
          fontSize:'0.95rem', fontWeight:600, cursor:'pointer',
        }}>Book a Pickup →</button>
      </div>

      <style>{`
        .nav-hamburger { display: none !important; }
        @media (max-width: 860px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
