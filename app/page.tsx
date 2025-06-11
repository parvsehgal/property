import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import StatsSection from "@/components/stats-section"
import TrustSection from "@/components/trust-section"
import DubaiRealEstateSection from "@/components/dubai-real-estate-section"
import WhyBaytukumSection from "@/components/why-baytukum-section"
import HowItWorksSection from "@/components/how-it-works-section"
import FeaturedProjectsSection from "@/components/featured-projects-section"
import InvestorsResourcesSection from "@/components/investors-resources-section"
import TestimonialsSection from "@/components/testimonials-section"
import MeetVisionarySection from "@/components/meet-visionary-section"
import MediaCoverageSection from "@/components/media-coverage-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 mr-4">
            <Image
              src="/logo.svg"
              alt="Baytukum Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-accent font-semibold text-xl">
              Baytukum
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1 justify-center">
            <Link href="/" className="text-foreground border-b-2 border-accent">
              Home
            </Link>
            <Link
              href="/#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Properties
            </Link>
            <Link
              href="/#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About Us
            </Link>
            <Link
              href="/#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="/#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              More
            </Link>
          </nav>

          <div className="flex items-center gap-4 ml-auto">
            <Link
              href="/#"
              className="text-muted-foreground text-sm font-medium hidden md:block hover:text-foreground"
            >
              Download App
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0"></div>

          <div className="container relative z-10 py-20 md:py-32 lg:py-40 flex flex-col lg:flex-row items-center">
            {/* Left: Text */}
            <div className="lg:w-1/2 max-w-2xl space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Invest in Dubai
                <br />
                Real Estate with
                <br />
                Baytukum
              </h1>

              <p className="text-xl md:text-2xl text-accent font-medium">
                Your Path to Passive Income and
                <br />
                Capital Appreciation
              </p>

              <div className="pt-4">
                <p className="text-white text-sm md:text-base">
                  Invest from AED 5,000 | Golden Visa Opportunities | Expert
                  <br />
                  Management | Tax-Free Returns | Diverse Portfolio
                </p>
              </div>
            </div>

            {/* Right: Main property image */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <Image
                src="/property.jpg"
                alt="Featured Dubai property"
                width={1000}
                height={800}
                className="object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </section>

        <StatsSection />
        <TrustSection />
        <DubaiRealEstateSection />
        <WhyBaytukumSection />
        <HowItWorksSection />
        <FeaturedProjectsSection />
        <InvestorsResourcesSection />
        <TestimonialsSection />
        <MeetVisionarySection />
        <MediaCoverageSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
