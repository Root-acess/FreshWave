import React, { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import { FAQS } from '../../utils/constants'

export default function FAQ() {
  const [openId, setOpenId] = useState(null)
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" style={{ padding: '5rem 1.5rem', background: '#ffffff' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <SectionHeader tag="FAQ" title="Frequently asked questions" center />
        <div style={{ marginTop: '3rem' }}>
          {FAQS.map((item) => (
            <FAQItem key={item.id} item={item} isOpen={openId === item.id} onToggle={() => toggle(item.id)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ item, isOpen, onToggle }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(26,107,196,0.1)', overflow: 'hidden' }}>
      <button onClick={onToggle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: '"DM Sans", sans-serif', fontWeight: 500,
          fontSize: 'clamp(0.88rem, 2.5vw, 0.98rem)',
          color: hovered || isOpen ? '#1a6bc4' : '#1e3a5f',
          textAlign: 'left', transition: 'color 0.2s', gap: '1rem',
        }}
        aria-expanded={isOpen}
      >
        <span style={{ flex: 1 }}>{item.question}</span>
        <span style={{
          fontSize: '1.1rem', color: '#0fbfcf', flexShrink: 0,
          display: 'inline-block',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.35s ease',
        }}>⌄</span>
      </button>
      <div style={{ maxHeight: isOpen ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
        <p style={{ fontSize: '0.88rem', color: '#5a7490', lineHeight: 1.7, paddingBottom: '1.2rem' }}>{item.answer}</p>
      </div>
    </div>
  )
}
