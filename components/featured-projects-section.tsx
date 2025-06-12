"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"

interface Property {
  id: number
  name: string
  location: string
  projectedReturns: string
  minInvestment: string
  type: "residential" | "commercial"
  image: string
  rate: string
  plotSizes: string[]
  amenities: string[]
  nearbyPlaces: string[]
  promotedBy: string
}

export default function FeaturedProjectsSection() {
  const [activeTab, setActiveTab] = useState("residential")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const properties: Property[] = [
    {
      id: 1,
      name: "Shaswat Corridor",
      location: "Ujjain Road",
      projectedReturns: "8.55%",
      minInvestment: "₹24.2 Lakhs",
      type: "residential",
      image: "/property.jpg",
      rate: "₹3,451 per sq.ft",
      plotSizes: ["20×40 (800 sq.ft)", "20×35 (700 sq.ft)", "15×50 (750 sq.ft)"],
      amenities: ["Garden", "Cement Road", "24/7 Security", "Underground Electric"],
      nearbyPlaces: ["New Prestige College - 2min", "Aurobindo Hospital - 8min", "Airport - 25min", "Rajwada - 40min"],
      promotedBy: "LASAR REAL ESTATE VENTURE PRIVATE LIMITED",
    },
    {
      id: 2,
      name: "Ruchi Town",
      location: "Ujjain Road",
      projectedReturns: "8.66%",
      minInvestment: "₹26.8 Lakhs",
      type: "residential",
      image: "/property.jpg",
      rate: "₹3,351 per sq.ft",
      plotSizes: ["30×50 (1,500 sq.ft)", "20×50 (1,000 sq.ft)", "20×40 (800 sq.ft)"],
      amenities: ["Club House", "Swimming Pool", "Temple", "Garden", "Secured Campus"],
      nearbyPlaces: ["Aurobindo Hospital - 15min", "New Prestige College - 5min", "Airport - 35min", "Rajwada - 25min"],
      promotedBy: "Lasar Real Estate Private Limited",
    },
    {
      id: 3,
      name: "Treasure Park",
      location: "Ujjain Road",
      projectedReturns: "9.12%",
      minInvestment: "₹43 Lakhs",
      type: "commercial",
      image: "/property.jpg",
      rate: "₹4,300 per sq.ft",
      plotSizes: ["30×40 (1,200 sq.ft)", "20×50 (1,000 sq.ft)", "25×50 (1,250 sq.ft)"],
      amenities: ["Garden", "Cricket Stadium", "Basketball Court", "Security", "Vehicle Charging Point"],
      nearbyPlaces: ["New Prestige College - 2min", "Aurobindo Hospital - 8min", "Airport - 25min", "Rajwada - 35min"],
      promotedBy: "Lasar Real Estate Private Limited",
    },
    {
      id: 4,
      name: "Treasure Palms",
      location: "Ujjain Road",
      projectedReturns: "8.89%",
      minInvestment: "₹36 Lakhs",
      type: "residential",
      image: "/property.jpg",
      rate: "₹3,600 per sq.ft",
      plotSizes: ["20×50 (1,000 sq.ft)", "30×50 (1,500 sq.ft)", "60×50 (3,000 sq.ft)"],
      amenities: ["Proposed Club House", "3 Side Open Plots"],
      nearbyPlaces: ["Aurobindo Hospital - 7min", "Super Corridor - 7min", "Proposed Ahilya Path - 2min"],
      promotedBy: "Lasar Real Estate Private Limited",
    },
    {
      id: 5,
      name: "Ricon City",
      location: "Khandwa Road",
      projectedReturns: "7.95%",
      minInvestment: "₹27 Lakhs",
      type: "commercial",
      image: "/property.jpg",
      rate: "₹2,700 per sq.ft",
      plotSizes: ["20×50 (1,000 sq.ft)", "30×50 (1,500 sq.ft)", "42×50 (2,100 sq.ft)"],
      amenities: ["Garden", "Temple", "CCTV Covered Campus", "Kids Play Area"],
      nearbyPlaces: ["IIT Indore - 15min", "Chokhi Dhani - 7min"],
      promotedBy: "Lasar Real Estate Private Limited",
    },
  ]

  const filteredProperties = properties.filter((property) => property.type === activeTab)
  const totalSlides = Math.max(0, filteredProperties.length - 2)

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

  const visibleProperties = filteredProperties.slice(currentSlide, currentSlide + 3)

  return (
    <section className="py-16 bg-background border-t border-white/20 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-lg mb-2">Featured Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover Our Featured Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>

          {/* Tab Buttons - Fixed styling */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => handleTabChange("residential")}
              disabled={isAnimating}
              className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === "residential"
                  ? "bg-accent text-background hover:bg-accent/90 transform scale-105"
                  : "bg-transparent border border-white/30 text-white hover:border-accent hover:text-accent hover:scale-105"
              }`}
            >
              Residential
            </Button>
            <Button
              onClick={() => handleTabChange("commercial")}
              disabled={isAnimating}
              className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === "commercial"
                  ? "bg-accent text-background hover:bg-accent/90 transform scale-105"
                  : "bg-transparent border border-white/30 text-white hover:border-accent hover:text-accent hover:scale-105"
              }`}
            >
              Commercial
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

          {/* Property Cards Container */}
          <div className="px-16 overflow-hidden">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${
                isAnimating ? "transform translate-x-2 opacity-90" : "transform translate-x-0 opacity-100"
              }`}
            >
              {visibleProperties.map((property, index) => (
                <div
                  key={property.id}
                  className={`bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200 ${
                    isAnimating ? "animate-pulse" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Property Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {/* Property Type Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                          property.type === "residential" ? "bg-green-600" : "bg-blue-600"
                        }`}
                      >
                        {property.type === "residential" ? "Residential" : "Commercial"}
                      </span>
                    </div>
                    {/* Returns Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-accent text-background px-2 py-1 rounded text-xs font-bold">
                        {property.projectedReturns}
                      </span>
                    </div>
                    {/* Investment Amount */}
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold backdrop-blur-sm">
                        {property.minInvestment}
                      </span>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-accent transition-colors duration-300">
                      {property.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 text-sm">{property.location}</span>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                        <span className="text-gray-600 text-sm">Projected Returns</span>
                        <span className="text-gray-900 font-semibold">{property.projectedReturns}</span>
                      </div>
                      <div className="flex justify-between items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                        <span className="text-gray-600 text-sm">Min. Investment</span>
                        <span className="text-gray-900 font-semibold">{property.minInvestment}</span>
                      </div>
                      <div className="flex justify-between items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                        <span className="text-gray-600 text-sm">Rate</span>
                        <span className="text-gray-900 font-semibold">{property.rate}</span>
                      </div>
                    </div>

                    {/* Plot Sizes */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Plot Sizes Available</h4>
                      <div className="flex flex-wrap gap-2">
                        {property.plotSizes.slice(0, 2).map((size, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {size}
                          </span>
                        ))}
                        {property.plotSizes.length > 2 && (
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            +{property.plotSizes.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* View Details Button - Fixed styling */}
                    <Button className="w-full bg-accent text-background hover:bg-accent/90 font-semibold transition-all duration-300 transform hover:scale-105">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Show message if no properties */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No {activeTab} properties available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
