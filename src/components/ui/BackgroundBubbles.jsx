import React, { useMemo } from 'react'

export default function BackgroundBubbles({ count = 14 }) {
  const bubbles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 120 + 40,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 14 + 10,
      opacity: Math.random() * 0.35 + 0.08,
    }))
  }, [count])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="animate-hero-bubble"
          style={{
            position: 'absolute',
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: -b.size,
            borderRadius: '50%',
            background: 'rgba(15,191,207,0.06)',
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  )
}
