"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, TrendingUp, IndianRupee, ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface Property {
  id: number
  name: string
  location: string
  projectedReturns: string
  minInvestment: string
  propertyType: string
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
    propertyType: "Residential Plot",
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
    propertyType: "Residential Plot",
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
    propertyType: "Residential Plot",
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
    propertyType: "Residential Plot",
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
    propertyType: "Residential Plot",
    type: "commercial",
    image: "/property.jpg",
    rate: "₹2,700 per sq.ft",
    plotSizes: ["20×50 (1,000 sq.ft)", "30×50 (1,500 sq.ft)", "42×50 (2,100 sq.ft)"],
    amenities: ["Garden", "Temple", "CCTV Covered Campus", "Kids Play Area"],
    nearbyPlaces: ["IIT Indore - 15min", "Chokhi Dhani - 7min"],
    promotedBy: "Lasar Real Estate Private Limited"
  }
]

export default function PropertiesPage() {
  const [filter, setFilter] = useState<"all" | "residential" | "commercial">("all")
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 9

  const filteredProperties = properties.filter(property => 
    filter === "all" || property.type === filter
  )

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage)
  const startIndex = (currentPage - 1) * propertiesPerPage
  const currentProperties = filteredProperties.slice(startIndex, startIndex + propertiesPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Discover Premium Properties
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our curated collection of residential and commercial properties with guaranteed returns
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <Button
                variant={filter === "all" ? "default" : "ghost"}
                onClick={() => {
                  setFilter("all")
                  setCurrentPage(1)
                }}
                className={filter === "all" ? "bg-teal-600 text-white hover:bg-teal-700 mr-2" : ""}
              >
                All Properties
              </Button>
              <Button
                variant={filter === "residential" ? "default" : "ghost"}
                onClick={() => {
                  setFilter("residential")
                  setCurrentPage(1)
                }}
                className={filter === "residential" ? "bg-teal-600 hover:bg-teal-700 mr-2 text-white" : ""}
              >
                Residential
              </Button>
              <Button
                variant={filter === "commercial" ? "default" : "ghost"}
                onClick={() => {
                  setFilter("commercial")
                  setCurrentPage(1)
                }}
                className={filter === "commercial" ? "bg-teal-600 hover:bg-teal-700 text-white" : ""}
              >
                Commercial
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
            {currentProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover"
                  />
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      property.type === 'commercial' 
                        ? 'bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50' 
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    {property.type === 'commercial' ? 'Commercial' : 'Residential'}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{property.name}</h3>
                  
                  <div className="flex items-center text-slate-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-emerald-600 mr-2" />
                      <div>
                        <p className="text-xs text-slate-500">Projected Returns</p>
                        <p className="font-semibold text-emerald-600">{property.projectedReturns}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 text-slate-600 mr-2" />
                      <div>
                        <p className="text-xs text-slate-500">Min. Investment</p>
                        <p className="font-semibold text-slate-900">{property.minInvestment}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-slate-500 mb-1">Property Type</p>
                    <p className="font-medium text-slate-900">{property.propertyType}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-slate-500 mb-1">Rate</p>
                    <p className="font-medium text-slate-900">{property.rate}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-slate-500 mb-1">Plot Sizes Available</p>
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
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 ${
                      currentPage === page 
                        ? "bg-teal-600 text-white" 
                        : ""
                    }`}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
