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

// Duplicate reviews for seamless infinite scroll
const ALL_REVIEWS = [...REVIEWS, ...REVIEWS]

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        padding: '6rem 4rem',
        background: 'linear-gradient(135deg,#eaf6fd 0%,#f0f4ff 100%)',
        overflow: 'hidden',
      }}
    >
      <SectionHeader
        tag="Testimonials"
        title="What our customers say"
        subtitle="Join over 50,000 happy customers across India."
      />

      {/* Scrolling review track */}
      <div
        style={{
          overflow: 'hidden',
          marginTop: '3.5rem',
          maskImage:
            'linear-gradient(90deg,transparent,black 8%,black 92%,transparent)',
          WebkitMaskImage:
            'linear-gradient(90deg,transparent,black 8%,black 92%,transparent)',
        }}
      >
        <div
          className="animate-slide-reviews"
          style={{
            display: 'flex',
            gap: '1.5rem',
            width: 'max-content',
          }}
        >
          {ALL_REVIEWS.map((review, idx) => (
            <ReviewCard
              key={`${review.id}-${idx}`}
              review={review}
              colorIdx={review.id - 1}
            />
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          marginTop: '3.5rem',
          flexWrap: 'wrap',
        }}
      >
        {TRUST_BADGES.map((badge) => (
          <TrustBadge key={badge.id} badge={badge} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #reviews { padding: 4rem 1rem !important; }
        }
      `}</style>
    </section>
  )
}

function ReviewCard({ review, colorIdx }) {
  return (
    <div
      style={{
        flex: '0 0 320px',
        background: '#ffffff',
        borderRadius: '20px',
        padding: '1.8rem',
        boxShadow: '0 4px 20px rgba(26,107,196,0.07)',
        border: '1px solid rgba(26,107,196,0.08)',
      }}
    >
      <div
        style={{
          color: '#f59e0b',
          fontSize: '1rem',
          letterSpacing: '2px',
          marginBottom: '0.8rem',
        }}
      >
        ★★★★★
      </div>
      <p
        style={{
          fontSize: '0.9rem',
          color: '#5a7490',
          lineHeight: 1.65,
          marginBottom: '1.2rem',
          fontStyle: 'italic',
        }}
      >
        "{review.text}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            background: AVATAR_COLORS[colorIdx % AVATAR_COLORS.length],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.85rem',
            flexShrink: 0,
          }}
        >
          {review.initials}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#1e3a5f' }}>
            {review.name}
          </div>
          <div style={{ fontSize: '0.77rem', color: '#5a7490' }}>
            {review.location}
          </div>
        </div>
      </div>
    </div>
  )
}

function TrustBadge({ badge }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: hovered ? 1 : 0.5,
        filter: hovered ? 'none' : 'grayscale(1)',
        transition: 'all 0.3s',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: '2rem' }}>{badge.icon}</div>
      <div
        style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: '#5a7490',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {badge.label}
      </div>
    </div>
  )
}
