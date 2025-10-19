import Hero from '@/components/sections/Hero'
import OurApproach from '@/components/sections/OurApproach'
import TechnologyEcosystem from '@/components/sections/TechnologyEcosystem'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Navigation />
      <Hero />
      <OurApproach />
      <TechnologyEcosystem />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
