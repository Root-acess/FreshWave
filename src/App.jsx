import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import HowItWorks from './components/sections/HowItWorks'
import Pricing from './components/sections/Pricing'
import Reviews from './components/sections/Reviews'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'
import BackgroundBubbles from './components/ui/BackgroundBubbles'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="relative overflow-x-hidden">
      <BackgroundBubbles />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
