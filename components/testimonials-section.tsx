"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Salama Bawazeer",
      role: "Student Investor",
      image: "/placeholder.svg?height=80&width=80",
      text: "I am a student and I can't purchase a property on my own, so I invested from my savings and now I own part of the property, the value of which increases over time and gives me a monthly rental income. I am excited to see the profit from the sale.",
      rating: 5,
    },
    {
      id: 2,
      name: "Bushra Bawazeer",
      role: "Professional Investor",
      image: "/placeholder.svg?height=80&width=80",
      text: "Trust in Baytukum and invest is the simplicity of the investment process, transparency in information and transactions, and their constant availability, 24 hours a day to answer any question, even if it is simple.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ahmed Al Mansouri",
      role: "Business Owner",
      image: "/placeholder.svg?height=80&width=80",
      text: "Baytukum has revolutionized my investment strategy. The platform's transparency and professional management have given me confidence in real estate investing. The returns have exceeded my expectations.",
      rating: 5,
    },
    {
      id: 4,
      name: "Fatima Al Zahra",
      role: "Working Professional",
      image: "/placeholder.svg?height=80&width=80",
      text: "As a working professional, I appreciate how Baytukum handles everything for me. From property selection to rental management, they've made real estate investment truly passive and profitable.",
      rating: 5,
    },
    {
      id: 5,
      name: "Omar Hassan",
      role: "First-time Investor",
      image: "/placeholder.svg?height=80&width=80",
      text: "The minimum investment amount made it possible for me to start my real estate journey. Now I have a diversified portfolio and steady rental income. Baytukum's expertise is unmatched.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial()
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [isAnimating])

  const currentTestimonialData = testimonials[currentTestimonial]

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-lg mb-2">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Hear from Our Satisfied Investors</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-200 relative overflow-hidden">
            {/* Background Quote */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-accent/10" />

            {/* Testimonial Content */}
            <div
              key={currentTestimonial}
              className={`transition-all duration-500 ease-in-out ${
                isAnimating ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
              }`}
            >
              {/* Profile Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image
                    src={currentTestimonialData.image || "/placeholder.svg"}
                    alt={currentTestimonialData.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-gray-900 text-xl mb-1">{currentTestimonialData.name}</h4>
                  <p className="text-gray-600 mb-3">{currentTestimonialData.role}</p>
                  <div className="flex items-center justify-center md:justify-start gap-1">
                    {[...Array(currentTestimonialData.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 text-lg leading-relaxed text-center md:text-left italic">
                "{currentTestimonialData.text}"
              </blockquote>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              disabled={isAnimating}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-background border-white/20 text-white hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 disabled:opacity-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Progress Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating && index !== currentTestimonial) {
                      setIsAnimating(true)
                      setCurrentTestimonial(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-accent w-8" : "bg-white/30 w-2 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              disabled={isAnimating}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-background border-white/20 text-white hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 disabled:opacity-50"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Testimonial Counter */}
          <div className="text-center mt-6">
            <p className="text-white/70 text-sm">
              {currentTestimonial + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
