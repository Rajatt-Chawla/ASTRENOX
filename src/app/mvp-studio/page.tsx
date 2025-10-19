import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/mvp-studio/Hero'
import ThePromise from '@/components/sections/mvp-studio/ThePromise'
import WhatWeBuild from '@/components/sections/mvp-studio/WhatWeBuild'
import HowWeBuild from '@/components/sections/mvp-studio/HowWeBuild'
import Pricing from '@/components/sections/mvp-studio/Pricing'
import WhyUs from '@/components/sections/mvp-studio/WhyUs'
import CTA from '@/components/sections/CTA'

export default function MVPStudio() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navigation />
      <Hero />
      <ThePromise />
      <WhatWeBuild />
      <HowWeBuild />
      <Pricing />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  )
}
