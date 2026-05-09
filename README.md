<<<<<<< HEAD
# FreshWave — Premium Laundry Service Website

A modern, high-conversion laundry service website built with **React + Vite + Tailwind CSS**.

---

## 📁 Folder Structure

```
freshwave/
├── index.html                        # Vite entry HTML
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
│
└── src/
    ├── main.jsx                      # ReactDOM entry point
    ├── App.jsx                       # Root component — assembles all sections
    │
    ├── assets/
    │   └── styles/
    │       └── globals.css           # Tailwind directives + all custom keyframes
    │
    ├── components/
    │   ├── index.js                  # Barrel exports for all components
    │   │
    │   ├── layout/
    │   │   ├── Navbar.jsx            # Fixed nav with scroll effect + mobile menu
    │   │   └── Footer.jsx            # Site footer with links
    │   │
    │   ├── sections/
    │   │   ├── Hero.jsx              # Hero split layout + WashingMachine
    │   │   ├── Services.jsx          # 5-card service grid with hover animations
    │   │   ├── HowItWorks.jsx        # 4-step process with connector line
    │   │   ├── Pricing.jsx           # 3 pricing cards with 3D tilt on hover
    │   │   ├── Reviews.jsx           # Infinite-scroll testimonial ticker
    │   │   ├── FAQ.jsx               # Animated accordion FAQ
    │   │   └── CTA.jsx               # Final call-to-action section
    │   │
    │   └── ui/
    │       ├── WashingMachine.jsx    # ★ Animated SVG washing machine (centrepiece)
    │       ├── BackgroundBubbles.jsx # Floating ambient bubble particles
    │       ├── SectionHeader.jsx     # Reusable tag + title + subtitle block
    │       └── Button.jsx            # Multi-variant button (primary/secondary/aqua)
    │
    ├── hooks/
    │   ├── useScrollReveal.js        # IntersectionObserver → .reveal.visible
    │   └── useTimer.js               # Countdown timer for washing machine display
    │
    └── utils/
        └── constants.js              # All site content: services, plans, reviews, FAQs
```

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary blue | `#1a6bc4` |
| Aqua accent | `#0fbfcf` |
| Slate dark | `#1e3a5f` |
| Muted text | `#5a7490` |
| Silver bg | `#f4f6f9` |
| Display font | Cormorant Garamond |
| Body font | DM Sans |

---

## 🔧 Key Features

- **Animated washing machine SVG** — water swirl, tumbling clothes, bubbles, steam, live countdown timer, blinking lights, rotating knobs
- **Scroll reveal** — all cards/steps fade-rise in via `IntersectionObserver`
- **3D pricing tilt** — mousemove perspective transform on pricing cards
- **Infinite review ticker** — CSS animation, seamlessly looping
- **FAQ accordion** — smooth max-height transition
- **Responsive** — mobile-first breakpoints at 768px / 900px
- **Zero external UI libraries** — pure React + CSS

---

## 📦 Adding a New Section

1. Create `src/components/sections/YourSection.jsx`
2. Export it from `src/components/index.js`
3. Import and place it in `src/App.jsx`
4. Add any new content to `src/utils/constants.js`

---

## 🌐 Deployment

```bash
npm run build        # Outputs to /dist
```

Deploy the `/dist` folder to **Vercel**, **Netlify**, or any static host.
=======
# FreshWave
>>>>>>> 8e64e00326ebf92bf27ae32af1c3d7d50873923c
