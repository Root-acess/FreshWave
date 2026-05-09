/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        blue: {
          DEFAULT: '#1a6bc4',
          dark: '#1455a0',
          slate: '#1e3a5f',
        },
        aqua: {
          DEFAULT: '#0fbfcf',
          light: '#e0f9fb',
        },
        silver: '#f4f6f9',
        muted: '#5a7490',
      },
      animation: {
        'float-icon': 'floatIcon 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-reviews': 'slideReviews 28s linear infinite',
        'fade-rise': 'fadeRiseIn 0.7s ease both',
        'blink': 'blink 1.4s ease-in-out infinite',
      },
      keyframes: {
        floatIcon: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.7', transform: 'translate(-50%,-50%) scale(1)' },
          '50%': { opacity: '1', transform: 'translate(-50%,-50%) scale(1.08)' },
        },
        slideReviews: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-336px * 5))' },
        },
        fadeRiseIn: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
}
