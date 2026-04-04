import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import LogoStrip from '@/components/sections/LogoStrip'
import ProblemSection from '@/components/sections/ProblemSection'
import FeaturesGrid from '@/components/sections/FeaturesGrid'
import ResearchHubSection from '@/components/sections/ResearchHubSection'
import BoardSection from '@/components/sections/BoardSection'
import WorkflowSection from '@/components/sections/WorkflowSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PricingSection from '@/components/sections/PricingSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <ProblemSection />
      <FeaturesGrid />
      <ResearchHubSection />
      <BoardSection />
      <WorkflowSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
