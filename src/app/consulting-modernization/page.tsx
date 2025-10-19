import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/digital-services/Hero'
import TheChallenge from '@/components/sections/digital-services/TheChallenge'
import OurSolution from '@/components/sections/digital-services/OurSolution'
import CoreCapabilities from '@/components/sections/digital-services/CoreCapabilities'
import TheAdvantage from '@/components/sections/digital-services/TheAdvantage'
import CTA from '@/components/sections/CTA'

export default function ConsultingModernization() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navigation />
      <Hero />
      <TheChallenge />
      <OurSolution />
      <CoreCapabilities />
      <TheAdvantage />
      <CTA />
      <Footer />
    </main>
  )
}
