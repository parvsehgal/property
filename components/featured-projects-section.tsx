"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function FeaturedProjectsSection() {
  const [activeTab, setActiveTab] = useState("funded")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const projects = [
    {
      id: 1,
      name: "Oxford 212",
      price: "AED 817,838.36",
      image: "/placeholder.svg?height=300&width=400",
      location: "Dubai",
      status: "funded",
      metrics: {
        projectedROI: "51.19%",
        averageAnnualReturns: "10.24%",
        rentalYield: "10.57%",
        annualAppreciation: "5.00%",
      },
    },
    {
      id: 2,
      name: "Fortunato",
      price: "AED 556,185.60",
      image: "/placeholder.svg?height=300&width=400",
      location: "Dubai",
      status: "funded",
      metrics: {
        projectedROI: "48.11%",
        averageAnnualReturns: "9.62%",
        rentalYield: "10.30%",
        annualAppreciation: "5.00%",
      },
    },
    {
      id: 3,
      name: "Centrium Tower 1",
      price: "AED 596,629.20",
      image: "/placeholder.svg?height=300&width=400",
      location: "Dubai",
      status: "funded",
      metrics: {
        projectedROI: "45.30%",
        averageAnnualReturns: "9.06%",
        rentalYield: "9.45%",
        annualAppreciation: "5.00%",
      },
    },
    {
      id: 4,
      name: "Marina Heights",
      price: "AED 720,450.80",
      image: "/placeholder.svg?height=300&width=400",
      location: "Dubai",
      status: "available",
      metrics: {
        projectedROI: "52.15%",
        averageAnnualReturns: "10.43%",
        rentalYield: "11.20%",
        annualAppreciation: "5.50%",
      },
    },
    {
      id: 5,
      name: "Downtown Vista",
      price: "AED 890,275.40",
      image: "/placeholder.svg?height=300&width=400",
      location: "Dubai",
      status: "available",
      metrics: {
        projectedROI: "47.80%",
        averageAnnualReturns: "9.56%",
        rentalYield: "10.80%",
        annualAppreciation: "5.20%",
      },
    },
    {
      id: 6,
      name: "Business Bay Elite",
      price: "AED 650,320.15",
      image: "/placeholder.svg?height=300&width=400",
      location: "Dubai",
      status: "available",
      metrics: {
        projectedROI: "49.25%",
        averageAnnualReturns: "9.85%",
        rentalYield: "10.95%",
        annualAppreciation: "5.30%",
      },
    },
  ]

  const filteredProjects = projects.filter((project) => project.status === activeTab)
  const totalSlides = Math.max(0, filteredProjects.length - 2)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % (totalSlides + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + totalSlides + 1) % (totalSlides + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleTabChange = (tab: string) => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveTab(tab)
    setCurrentSlide(0)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const visibleProjects = filteredProjects.slice(currentSlide, currentSlide + 3)

  return (
    <section className="py-16 bg-background border-t border-white/20 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-lg mb-2">Featured Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover Our Featured Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => handleTabChange("funded")}
              disabled={isAnimating}
              className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === "funded"
                  ? "bg-white text-background hover:bg-gray-100 transform scale-105"
                  : "bg-transparent border border-white/30 text-white hover:border-white/50 hover:scale-105"
              }`}
            >
              Funded
            </Button>
            <Button
              onClick={() => handleTabChange("available")}
              disabled={isAnimating}
              className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === "available"
                  ? "bg-white text-background hover:bg-gray-100 transform scale-105"
                  : "bg-transparent border border-white/30 text-white hover:border-white/50 hover:scale-105"
              }`}
            >
              Available
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          {totalSlides > 0 && (
            <>
              <Button
                onClick={prevSlide}
                disabled={isAnimating}
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background border-white/20 text-white hover:bg-accent hover:text-background hover:border-accent hover:scale-110 transition-all duration-300 disabled:opacity-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextSlide}
                disabled={isAnimating}
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background border-white/20 text-white hover:bg-accent hover:text-background hover:border-accent hover:scale-110 transition-all duration-300 disabled:opacity-50"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}

          {/* Project Cards Container */}
          <div className="px-16 overflow-hidden">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${
                isAnimating ? "transform translate-x-2 opacity-90" : "transform translate-x-0 opacity-100"
              }`}
            >
              {visibleProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200 ${
                    isAnimating ? "animate-pulse" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 px-2 py-1 rounded backdrop-blur-sm">
                      <div className="w-4 h-3 bg-red-600 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <span className="text-white text-xs font-medium">{project.location.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-accent transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-accent text-xl font-bold mb-6">{project.price}</p>

                    {/* Metrics */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                        <span className="text-gray-600 text-sm">Projected ROI (Gross)</span>
                        <span className="text-gray-900 font-semibold">{project.metrics.projectedROI}</span>
                      </div>
                      <div className="flex justify-between items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                        <span className="text-gray-600 text-sm">Average Annual Returns (Gross)</span>
                        <span className="text-gray-900 font-semibold">{project.metrics.averageAnnualReturns}</span>
                      </div>
                      <div className="flex justify-between items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                        <span className="text-gray-600 text-sm">Rental Yield (Gross)</span>
                        <span className="text-gray-900 font-semibold">{project.metrics.rentalYield}</span>
                      </div>
                      <div className="flex justify-between items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                        <span className="text-gray-600 text-sm">Annual Appreciation</span>
                        <span className="text-gray-900 font-semibold">{project.metrics.annualAppreciation}</span>
                      </div>
                    </div>

                    {/* Know More Button */}
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-900 hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 transform hover:scale-105"
                    >
                      Know More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Show message if no projects */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No {activeTab} projects available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
