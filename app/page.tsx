import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { LaPurronaSection } from "@/components/la-purrona-section"
import { ProductsSection } from "@/components/products-section"
import { BrandsSection } from "@/components/brands-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LaPurronaSection />
      <ProductsSection />
      <BrandsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
