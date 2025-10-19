import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/ai-engineering/Hero'
import WhatWeBelieve from '@/components/sections/ai-engineering/WhatWeBelieve'
import WhyYouNeedUs from '@/components/sections/ai-engineering/WhyYouNeedUs'
import WhatWeDo from '@/components/sections/ai-engineering/WhatWeDo'
import EngagementModel from '@/components/sections/ai-engineering/EngagementModel'
import CTA from '@/components/sections/CTA'

export default function AIEngineering() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navigation />
      <Hero />
      <WhatWeBelieve />
      <WhyYouNeedUs />
      <WhatWeDo />
      <EngagementModel />
      <CTA />
      <Footer />
    </main>
  )
}
