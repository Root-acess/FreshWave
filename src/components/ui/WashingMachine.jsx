import React from 'react'
import useTimer from '../../hooks/useTimer'

export default function WashingMachine() {
  const timer = useTimer(23, 14)

  return (
    <div style={{ position: 'relative', width: '420px', height: '480px' }}>
      {/* Ambient glow behind machine */}
      <div
        className="animate-glow-pulse"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '460px',
          height: '460px',
          background:
            'radial-gradient(circle, rgba(15,191,207,0.13) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <svg
        viewBox="0 0 420 480"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          filter: 'drop-shadow(0 24px 64px rgba(26,107,196,0.2))',
        }}
      >
        <defs>
          <radialGradient id="bodyGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#f8fbff" />
            <stop offset="60%" stopColor="#ddeaf8" />
            <stop offset="100%" stopColor="#b8cfe8" />
          </radialGradient>
          <radialGradient id="drumGrad" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#cce8ff" />
            <stop offset="40%" stopColor="#80c8f0" />
            <stop offset="100%" stopColor="#1a6bc4" />
          </radialGradient>
          <radialGradient id="glassGrad" cx="30%" cy="25%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="50%" stopColor="rgba(120,190,240,0.15)" />
            <stop offset="100%" stopColor="rgba(26,107,196,0.25)" />
          </radialGradient>
          <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8f2fb" />
            <stop offset="100%" stopColor="#cddcee" />
          </linearGradient>
          <clipPath id="drumClip">
            <circle cx="210" cy="270" r="118" />
          </clipPath>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* ── Machine Body ── */}
        <rect x="30" y="90" width="360" height="370" rx="24"
          fill="url(#bodyGrad)" stroke="#b0cce4" strokeWidth="1.5" />
        {/* Body top shine */}
        <rect x="30" y="90" width="360" height="80" rx="24"
          fill="rgba(255,255,255,0.38)" />
        {/* Pulsing power border */}
        <rect x="30" y="90" width="360" height="370" rx="24"
          fill="none" stroke="rgba(15,191,207,0.4)" strokeWidth="2"
          className="pulse-ring" />
        {/* Body side reflection */}
        <ellipse cx="138" cy="180" rx="24" ry="58"
          fill="rgba(255,255,255,0.12)" transform="rotate(-10 138 180)" />

        {/* ── Control Panel ── */}
        <rect x="30" y="90" width="360" height="110" rx="24"
          fill="url(#panelGrad)" stroke="#b0cce4" strokeWidth="1" />
        <rect x="30" y="160" width="360" height="40" fill="url(#panelGrad)" />

        {/* Digital Display */}
        <rect x="158" y="104" width="104" height="44" rx="8"
          fill="#0a1a30" stroke="#1a6bc4" strokeWidth="1.5" />
        <rect x="159" y="105" width="102" height="22" rx="6"
          fill="rgba(26,107,196,0.14)" />
        <text x="210" y="131" textAnchor="middle"
          fill="#0fbfcf" fontSize="17"
          fontFamily="'Courier New', monospace"
          fontWeight="700" filter="url(#glow)">
          {timer}
        </text>
        {/* Scan line */}
        <rect x="159" y="105" width="102" height="3" rx="1"
          fill="rgba(15,191,207,0.3)" className="scan-line" />

        {/* Cycle Icons */}
        {['⟳','🌡','💧','☁','🌬'].map((icon, i) => (
          <text key={i} x={60 + i * 20} y="122" textAnchor="middle"
            fontSize="9" fill="#5a7490" fontFamily="DM Sans, sans-serif">
            {icon}
          </text>
        ))}
        {/* Active underline — cycles across icons */}
        <rect x="52" y="127" width="16" height="2" rx="1" fill="#0fbfcf">
          <animate attributeName="x" values="52;72;92;112;132;52"
            dur="5s" repeatCount="indefinite" calcMode="discrete" />
        </rect>

        {/* Indicator Lights */}
        <circle cx="300" cy="118" r="5" fill="#0fbfcf" className="light-1" />
        <circle cx="318" cy="118" r="5" fill="#22c55e" className="light-2" />
        <circle cx="336" cy="118" r="5" fill="#f59e0b" className="light-3" />

        {/* Start Button */}
        <circle cx="357" cy="140" r="15" fill="#1e3a5f"
          stroke="#0fbfcf" strokeWidth="1.5" />
        <text x="357" y="145" textAnchor="middle"
          fill="#0fbfcf" fontSize="9"
          fontFamily="DM Sans, sans-serif" fontWeight="600">▶</text>
        {/* Glow ring around start */}
        <circle cx="357" cy="140" r="18" fill="none"
          stroke="rgba(15,191,207,0.5)" strokeWidth="1.5">
          <animate attributeName="r" values="15;22;15" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Temperature Knob */}
        <circle cx="65" cy="145" r="18" fill="#ddeaf8" stroke="#b0cce4" strokeWidth="1.5" />
        <circle cx="65" cy="145" r="10" fill="rgba(255,255,255,0.7)" />
        <line x1="65" y1="132" x2="65" y2="139"
          stroke="#1a6bc4" strokeWidth="2" strokeLinecap="round"
          className="knob-1" />

        {/* Speed Knob */}
        <circle cx="110" cy="145" r="14" fill="#ddeaf8" stroke="#b0cce4" strokeWidth="1.5" />
        <circle cx="110" cy="145" r="7" fill="rgba(255,255,255,0.7)" />
        <line x1="110" y1="135" x2="110" y2="141"
          stroke="#0fbfcf" strokeWidth="2" strokeLinecap="round"
          className="knob-2" />

        {/* Detergent Drawer */}
        <rect x="48" y="170" width="52" height="14" rx="4"
          fill="rgba(255,255,255,0.6)" stroke="#b0cce4" strokeWidth="1" />
        <rect x="49" y="171" width="24" height="12" rx="3"
          fill="rgba(200,230,255,0.5)" />
        <rect x="74" y="171" width="24" height="12" rx="3"
          fill="rgba(200,230,255,0.3)" />

        {/* Water Inlet */}
        <rect x="325" y="74" width="20" height="20" rx="4"
          fill="#96bcdb" stroke="#7aa4c8" strokeWidth="1" />
        <circle cx="335" cy="84" r="5" fill="#6a90b8" />

        {/* ── Drum Area ── */}
        {/* Drum shadow */}
        <ellipse cx="210" cy="286" rx="122" ry="14"
          fill="rgba(26,107,196,0.1)" filter="url(#softBlur)" />
        {/* Outer ring */}
        <circle cx="210" cy="270" r="125"
          fill="rgba(180,210,240,0.5)" stroke="#8ab8d8" strokeWidth="3" />
        <circle cx="210" cy="270" r="122"
          fill="#c8ddf0" stroke="#96bcdb" strokeWidth="2" />

        {/* ── Water & Drum Content (clipped) ── */}
        <g clipPath="url(#drumClip)">
          {/* Base water fill */}
          <circle cx="210" cy="270" r="118" fill="url(#drumGrad)" />

          {/* Inner blue glow */}
          <circle cx="210" cy="255" r="65"
            fill="rgba(150,220,255,0.12)" className="inner-glow" />

          {/* Water blob 1 */}
          <ellipse cx="210" cy="300" rx="90" ry="55"
            fill="rgba(60,160,220,0.42)" className="drum-water-1">
            <animate attributeName="rx" values="90;70;90" dur="3s" repeatCount="indefinite" />
            <animate attributeName="ry" values="55;75;55" dur="3s" repeatCount="indefinite" />
          </ellipse>

          {/* Water blob 2 */}
          <ellipse cx="210" cy="240" rx="80" ry="50"
            fill="rgba(30,130,210,0.38)" className="drum-water-2">
            <animate attributeName="rx" values="80;60;80" dur="2.5s" repeatCount="indefinite" />
          </ellipse>

          {/* Water blob 3 — aqua highlight */}
          <ellipse cx="185" cy="260" rx="55" ry="35"
            fill="rgba(15,191,207,0.28)" className="drum-water-3" />

          {/* ── Clothes ── */}
          <g className="cloth-1">
            <rect x="175" y="248" width="50" height="22" rx="10"
              fill="rgba(30,60,140,0.65)" transform="rotate(15 200 259)">
              <animate attributeName="rx" values="10;16;10" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="height" values="22;16;22" dur="2.5s" repeatCount="indefinite" />
            </rect>
          </g>
          <g className="cloth-2">
            <rect x="200" y="258" width="40" height="18" rx="8"
              fill="rgba(180,40,40,0.58)" transform="rotate(-20 220 267)">
              <animate attributeName="ry" values="8;13;8" dur="2s" repeatCount="indefinite" />
            </rect>
          </g>
          <g className="cloth-3">
            <rect x="195" y="280" width="45" height="16" rx="7"
              fill="rgba(240,180,20,0.52)" transform="rotate(30 217 288)">
              <animate attributeName="rx" values="7;11;7" dur="1.8s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* ── Bubbles ── */}
          <circle cx="185" cy="320" r="6"
            fill="rgba(255,255,255,0.62)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"
            className="bubble-1">
            <animate attributeName="cy" values="320;152;320" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.7;0" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="r" values="6;4;6" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="210" cy="330" r="4"
            fill="rgba(255,255,255,0.55)" className="bubble-2">
            <animate attributeName="cy" values="330;158;330" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="235" cy="310" r="7"
            fill="rgba(255,255,255,0.45)" stroke="rgba(200,240,255,0.5)" strokeWidth="1"
            className="bubble-3">
            <animate attributeName="cy" values="310;148;310" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.65;0" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="222" cy="295" r="3"
            fill="rgba(255,255,255,0.75)" className="bubble-4">
            <animate attributeName="cy" values="295;160;295" dur="3.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur="3.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="196" cy="285" r="5"
            fill="rgba(255,255,255,0.58)" className="bubble-5">
            <animate attributeName="cy" values="285;155;285" dur="2.9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.75;0" dur="2.9s" repeatCount="indefinite" />
          </circle>

          {/* ── Droplets on glass ── */}
          <circle cx="270" cy="200" r="3.5"
            fill="rgba(255,255,255,0.6)" className="droplet-1">
            <animate attributeName="cy" values="200;235;200" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="255" cy="340" r="2.5"
            fill="rgba(255,255,255,0.5)" className="droplet-2">
            <animate attributeName="cy" values="340;310;340" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="165" cy="210" r="3"
            fill="rgba(255,255,255,0.55)" className="droplet-3">
            <animate attributeName="cy" values="210;248;210" dur="3.5s" repeatCount="indefinite" />
          </circle>

          {/* ── Steam / Freshness ── */}
          <ellipse cx="210" cy="175" rx="30" ry="8"
            fill="rgba(200,240,255,0.2)" className="steam-1">
            <animate attributeName="rx" values="30;52;30" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="193" cy="167" rx="15" ry="6"
            fill="rgba(200,240,255,0.15)" className="steam-2">
            <animate attributeName="cy" values="167;150;167" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0;0.15" dur="2.5s" repeatCount="indefinite" />
          </ellipse>
        </g>

        {/* ── Glass Overlay ── */}
        <circle cx="210" cy="270" r="118"
          fill="url(#glassGrad)" stroke="#a0c4e0" strokeWidth="2.5" />
        {/* Glass highlight blobs */}
        <ellipse cx="174" cy="224" rx="32" ry="20"
          fill="rgba(255,255,255,0.35)" transform="rotate(-30 174 224)" />
        <ellipse cx="184" cy="232" rx="14" ry="8"
          fill="rgba(255,255,255,0.52)" transform="rotate(-30 184 232)" />
        {/* Edge sparkle */}
        <circle cx="210" cy="270" r="118"
          fill="none" stroke="rgba(255,255,255,0.5)"
          strokeWidth="3" strokeDasharray="60 300" strokeDashoffset="10" />
        {/* Drum holes ring */}
        <circle cx="210" cy="270" r="108"
          fill="none" stroke="rgba(26,107,196,0.22)"
          strokeWidth="1.5" strokeDasharray="4 12" />

        {/* ── Door hardware ── */}
        {/* Hinge */}
        <rect x="79" y="263" width="10" height="16" rx="3" fill="#96bcdb" />
        {/* Handle */}
        <rect x="316" y="262" width="24" height="16" rx="8"
          fill="#c8ddf0" stroke="#96bcdb" strokeWidth="1.5" />
        <rect x="318" y="264" width="20" height="12" rx="6"
          fill="rgba(255,255,255,0.4)" />

        {/* ── Base ── */}
        <rect x="30" y="430" width="360" height="30" rx="0"
          fill="rgba(148,188,218,0.4)" />
        <rect x="30" y="455" width="360" height="5"
          fill="rgba(176,204,228,0.5)" />
        {/* Feet */}
        <rect x="70" y="455" width="40" height="12" rx="4" fill="#8ab8d8" />
        <rect x="310" y="455" width="40" height="12" rx="4" fill="#8ab8d8" />
      </svg>
    </div>
  )
}
