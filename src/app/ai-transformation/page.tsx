import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/ai-transformation/Hero'
import Strategy from '@/components/sections/ai-transformation/Strategy'
import Execution from '@/components/sections/ai-transformation/Execution'
import WhyUs from '@/components/sections/ai-transformation/WhyUs'
import WhatWeDo from '@/components/sections/ai-transformation/WhatWeDo'
import CTA from '@/components/sections/CTA'

export default function AITransformation() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navigation />
      <Hero />
      <Strategy />
      <Execution />
      <WhyUs />
      <WhatWeDo />
      <CTA />
      <Footer />
    </main>
  )
}
