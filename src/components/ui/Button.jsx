import React, { useState } from 'react'

export default function Button({ children, variant = 'primary', onClick, style = {}, ...props }) {
  const [hovered, setHovered] = useState(false)

  const base = {
    border: 'none',
    padding: '0.8rem 2rem',
    borderRadius: '50px',
    fontSize: '0.92rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontFamily: '"DM Sans", sans-serif',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const styles = {
    primary: { ...base,
      background: hovered ? 'linear-gradient(135deg,#1455a0,#0e3d7a)' : 'linear-gradient(135deg,#1a6bc4,#1455a0)',
      color: '#fff',
      boxShadow: hovered ? '0 8px 32px rgba(26,107,196,0.4)' : '0 4px 20px rgba(26,107,196,0.28)',
      transform: hovered ? 'translateY(-2px) scale(1.02)' : 'none',
    },
    secondary: { ...base,
      background: hovered ? '#1a6bc4' : 'transparent',
      color: hovered ? '#fff' : '#1a6bc4',
      border: '1.5px solid #1a6bc4',
    },
    aqua: { ...base,
      background: hovered ? '#fff' : '#0fbfcf',
      color: '#1e3a5f',
      boxShadow: hovered ? '0 16px 40px rgba(15,191,207,0.3)' : '0 8px 30px rgba(15,191,207,0.35)',
      transform: hovered ? 'translateY(-3px) scale(1.04)' : 'none',
    },
  }

  return (
    <button style={{ ...styles[variant], ...style }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onClick={onClick} {...props}
    >{children}</button>
  )
}
