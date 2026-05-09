import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import { REVIEWS, TRUST_BADGES } from '../../utils/constants'

const AVATAR_COLORS = [
  'linear-gradient(135deg,#1a6bc4,#0fbfcf)',
  'linear-gradient(135deg,#1e3a5f,#1a6bc4)',
  'linear-gradient(135deg,#0fbfcf,#22c55e)',
  'linear-gradient(135deg,#7c3aed,#1a6bc4)',
  'linear-gradient(135deg,#1a6bc4,#7c3aed)',
]

const ALL_REVIEWS = [...REVIEWS, ...REVIEWS]

export default function Reviews() {
  return (
    <section id="reviews" style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg,#eaf6fd 0%,#f0f4ff 100%)',
      overflow: 'hidden',
    }}>
      <div style={{ padding: '0 1.5rem' }}>
        <SectionHeader
          tag="Testimonials"
          title="What our customers say"
          subtitle="Join over 50,000 happy customers across India."
        />
      </div>

      {/* Scrolling review track */}
      <div style={{
        overflow: 'hidden', marginTop: '3rem',
        maskImage: 'linear-gradient(90deg,transparent,black 5%,black 95%,transparent)',
        WebkitMaskImage: 'linear-gradient(90deg,transparent,black 5%,black 95%,transparent)',
      }}>
        <div className="animate-slide-reviews" style={{ display: 'flex', gap: '1.25rem', width: 'max-content', padding: '0.5rem 0' }}>
          {ALL_REVIEWS.map((review, idx) => (
            <ReviewCard key={`${review.id}-${idx}`} review={review} colorIdx={review.id - 1} />
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div style={{ padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap', maxWidth: '700px', margin: '3rem auto 0' }}>
          {TRUST_BADGES.map((badge) => (
            <TrustBadge key={badge.id} badge={badge} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review, colorIdx }) {
  return (
    <div style={{
      flex: '0 0 280px',
      background: '#ffffff', borderRadius: '20px',
      padding: '1.5rem',
      boxShadow: '0 4px 20px rgba(26,107,196,0.07)',
      border: '1px solid rgba(26,107,196,0.08)',
    }}>
      <div style={{ color: '#f59e0b', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '0.75rem' }}>★★★★★</div>
      <p style={{ fontSize: '0.85rem', color: '#5a7490', lineHeight: 1.65, marginBottom: '1.1rem', fontStyle: 'italic' }}>"{review.text}"</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: AVATAR_COLORS[colorIdx % AVATAR_COLORS.length],
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0,
        }}>{review.initials}</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#1e3a5f' }}>{review.name}</div>
          <div style={{ fontSize: '0.73rem', color: '#5a7490' }}>{review.location}</div>
        </div>
      </div>
    </div>
  )
}

function TrustBadge({ badge }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'0.4rem', opacity: hovered ? 1 : 0.5, filter: hovered ? 'none' : 'grayscale(1)', transition:'all 0.3s', cursor:'default' }}
    >
      <div style={{ fontSize: '1.8rem' }}>{badge.icon}</div>
      <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#5a7490', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{badge.label}</div>
    </div>
  )
}
