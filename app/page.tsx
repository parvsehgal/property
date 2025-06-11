"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProperties } from "@/components/featured-properties"
import { WhyChooseUs } from "@/components/why-choose-us"
import { PropertyStats } from "@/components/property-stats"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { ContactUs } from "@/components/ContactUs"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PropertyStats />
      <FeaturedProperties />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactUs />
      <Footer />
    </main>
  )
}
