import { HeroSection } from "@/sections/HeroSection"
import { IntegrationsSection } from "@/sections/IntegrationsSection"
import { ServicesSection } from "@/sections/ServicesSection"
import { ProcessSection } from "@/sections/ProcessSection"
import { CaseStudiesSection } from "@/sections/CaseStudiesSection"
import { TestimonialsDesktop } from "@/sections/TestimonialsDesktop"
import { TestimonialsMobile } from "@/sections/TestimonialsMobile"
import { FAQSection } from "@/sections/FAQSection"
import { Header } from "@/sections/Header"
import { Footer } from "@/sections/Footer"
import { FloatingCTA } from "@/components/FloatingCTA"
import { MobileCTA } from "@/components/MobileCTA"

export default function Page() {
  return (
    <div className="min-w-full">
      <Header />
      <main role="main" className="box-border caret-transparent grow shrink-0">
        <HeroSection />
        <IntegrationsSection />
        <ServicesSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TestimonialsDesktop />
        <TestimonialsMobile />
        <FAQSection />
      </main>
      <Footer />
      <FloatingCTA />
      <MobileCTA />
    </div>
  )
}
