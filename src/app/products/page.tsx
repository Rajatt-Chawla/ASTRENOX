import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/products/Hero'
import ANXIntelligence from '@/components/sections/products/ANXIntelligence'
import EngineV from '@/components/sections/products/EngineV'
import CTA from '@/components/sections/CTA'

export default function Products() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navigation />
      <Hero />
      <ANXIntelligence />
      <EngineV />
      <CTA />
      <Footer />
    </main>
  )
}
