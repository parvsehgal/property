"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, TrendingUp, IndianRupee, ArrowRight } from "lucide-react"

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

export const properties: Property[] = [
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
    promotedBy: "LASAR REAL ESTATE VENTURE PRIVATE LIMITED"
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
    promotedBy: "Lasar Real Estate Private Limited"
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
    promotedBy: "Lasar Real Estate Private Limited"
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
    promotedBy: "Lasar Real Estate Private Limited"
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
    promotedBy: "Lasar Real Estate Private Limited"
  }
]

export function FeaturedProperties() {
  const [likedProperties, setLikedProperties] = useState<number[]>([])

  const featuredProperties = properties.slice(0, 3)

  const toggleLike = (propertyId: number) => {
    setLikedProperties((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]
    )
  }

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-foreground mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent">
              Properties
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our selection of premium properties with high-yield investment opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge 
                    className={`${
                      property.type === 'commercial' 
                        ? 'bg-card text-teal-600 border-2 border-teal-600' 
                        : 'bg-teal-600 text-white'
                    }`}
                  >
                    {property.type === 'commercial' ? 'Commercial' : 'Residential'}
                  </Badge>
                  <Badge className="bg-card/90 text-teal-600 font-bold">{property.projectedReturns}</Badge>
                </div>

                <button
                  onClick={() => toggleLike(property.id)}
                  className="absolute top-4 right-4 p-2 bg-card/90 backdrop-blur-sm rounded-full hover:bg-card transition-colors"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      likedProperties.includes(property.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"
                    }`}
                  />
                </button>

                <div className="absolute bottom-4 left-4">
                  <span className="bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full font-bold text-lg">
                    {property.minInvestment}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-teal-600 transition-colors">
                    {property.name}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-teal-600 mr-2" />
                    <div>
                      <p className="text-xs text-muted-foreground">Projected Returns</p>
                      <p className="font-semibold text-teal-600">{property.projectedReturns}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 text-muted-foreground mr-2" />
                    <div>
                      <p className="text-xs text-muted-foreground">Min. Investment</p>
                      <p className="font-semibold text-foreground">{property.minInvestment}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Rate</p>
                  <p className="font-medium text-foreground">{property.rate}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Plot Sizes Available</p>
                  <div className="flex flex-wrap gap-1">
                    {property.plotSizes.slice(0, 2).map((size, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {size}
                      </Badge>
                    ))}
                    {property.plotSizes.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{property.plotSizes.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Link href={`/properties/${property.id}`}>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white group">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/properties">
            <Button size="lg" variant="outline" className="border-teal-500 text-teal-600 hover:bg-muted hover:text-teal-700">
              View All Properties
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
