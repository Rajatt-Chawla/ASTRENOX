import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/intelligent-automations/Hero'
import WhatWeBuild from '@/components/sections/intelligent-automations/WhatWeBuild'
import HowWeBuild from '@/components/sections/intelligent-automations/HowWeBuild'
import WhatYouGet from '@/components/sections/intelligent-automations/WhatYouGet'
import EngagementModel from '@/components/sections/intelligent-automations/EngagementModel'
import CTA from '@/components/sections/CTA'

export default function IntelligentAutomations() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navigation />
      <Hero />
      <WhatWeBuild />
      <HowWeBuild />
      <WhatYouGet />
      <EngagementModel />
      <CTA />
      <Footer />
    </main>
  )
}
