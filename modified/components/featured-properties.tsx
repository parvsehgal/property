"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react"

export function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [likedProperties, setLikedProperties] = useState<number[]>([])

  const filters = [
    { id: "all", label: "All Properties" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "luxury", label: "Luxury" },
  ]

  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$4.2M",
      type: "luxury",
      category: "Residential",
      roi: "12% Annual",
      image: "/placeholder.svg?height=400&width=600",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      featured: true,
    },
    {
      id: 2,
      title: "Downtown Office Complex",
      location: "Manhattan, NY",
      price: "$7.8M",
      type: "commercial",
      category: "Commercial",
      roi: "9.5% Annual",
      image: "/placeholder.svg?height=400&width=600",
      beds: null,
      baths: null,
      sqft: "12,000",
      featured: false,
    },
    {
      id: 3,
      title: "Waterfront Penthouse",
      location: "Miami Beach, FL",
      price: "$3.5M",
      type: "luxury",
      category: "Residential",
      roi: "14% Annual",
      image: "/placeholder.svg?height=400&width=600",
      beds: 3,
      baths: 3,
      sqft: "2,800",
      featured: true,
    },
    {
      id: 4,
      title: "Tech Hub Office Space",
      location: "San Francisco, CA",
      price: "$12.5M",
      type: "commercial",
      category: "Commercial",
      roi: "11% Annual",
      image: "/placeholder.svg?height=400&width=600",
      beds: null,
      baths: null,
      sqft: "25,000",
      featured: false,
    },
    {
      id: 5,
      title: "Garden View Apartment",
      location: "Central Park, NY",
      price: "$2.1M",
      type: "residential",
      category: "Residential",
      roi: "8% Annual",
      image: "/placeholder.svg?height=400&width=600",
      beds: 2,
      baths: 2,
      sqft: "1,400",
      featured: false,
    },
    {
      id: 6,
      title: "Luxury Resort Villa",
      location: "Malibu, CA",
      price: "$6.8M",
      type: "luxury",
      category: "Residential",
      roi: "16% Annual",
      image: "/placeholder.svg?height=400&width=600",
      beds: 6,
      baths: 5,
      sqft: "5,500",
      featured: true,
    },
  ]

  const filteredProperties =
    activeFilter === "all" ? properties : properties.filter((property) => property.type === activeFilter)

  const toggleLike = (propertyId: number) => {
    setLikedProperties((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId],
    )
  }

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Properties
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our selection of premium properties with high-yield investment opportunities
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && <Badge className="bg-emerald-500 text-white">Featured</Badge>}
                  <Badge className="bg-white/90 text-emerald-600 font-bold">{property.roi}</Badge>
                </div>

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(property.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      likedProperties.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                  />
                </button>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full font-bold text-lg">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <Badge variant="outline" className="text-emerald-600 border-emerald-200">
                    {property.category}
                  </Badge>
                </div>

                {/* Property Details */}
                {property.beds && (
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.sqft} sq ft</span>
                    </div>
                  </div>
                )}

                {!property.beds && (
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.sqft} sq ft</span>
                  </div>
                )}

                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white group">
                  View Details
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50">
            View All Properties
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
