import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Integrations from './components/Integrations'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Integrations />
      <Reviews />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App