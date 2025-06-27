"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Building,
  Home,
} from "lucide-react";

interface Property {
  id: number;
  name: string;
  location: string;
  projectedReturns: string;
  minInvestment: string;
  type: "residential" | "commercial";
  image: string;
  rate: string;
  plotSizes: string[];
  amenities: string[];
  nearbyPlaces: string[];
  promotedBy: string;
}

interface PropertiesPageProps {
  onViewDetails?: (propertyId: number) => void;
}

export default function PropertiesPage({
  onViewDetails = (id) => console.log(`View details for property ${id}`)
}: PropertiesPageProps) {

  // All properties data
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
      plotSizes: [
        "20×40 (800 sq.ft)",
        "20×35 (700 sq.ft)",
        "15×50 (750 sq.ft)",
      ],
      amenities: [
        "Garden",
        "Cement Road",
        "24/7 Security",
        "Underground Electric",
      ],
      nearbyPlaces: [
        "New Prestige College - 2min",
        "Aurobindo Hospital - 8min",
        "Airport - 25min",
        "Rajwada - 40min",
      ],
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
      plotSizes: [
        "30×50 (1,500 sq.ft)",
        "20×50 (1,000 sq.ft)",
        "20×40 (800 sq.ft)",
      ],
      amenities: [
        "Club House",
        "Swimming Pool",
        "Temple",
        "Garden",
        "Secured Campus",
      ],
      nearbyPlaces: [
        "Aurobindo Hospital - 15min",
        "New Prestige College - 5min",
        "Airport - 35min",
        "Rajwada - 25min",
      ],
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
      plotSizes: [
        "30×40 (1,200 sq.ft)",
        "20×50 (1,000 sq.ft)",
        "25×50 (1,250 sq.ft)",
      ],
      amenities: [
        "Garden",
        "Cricket Stadium",
        "Basketball Court",
        "Security",
        "Vehicle Charging Point",
      ],
      nearbyPlaces: [
        "New Prestige College - 2min",
        "Aurobindo Hospital - 8min",
        "Airport - 25min",
        "Rajwada - 35min",
      ],
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
      plotSizes: [
        "20×50 (1,000 sq.ft)",
        "30×50 (1,500 sq.ft)",
        "60×50 (3,000 sq.ft)",
      ],
      amenities: ["Proposed Club House", "3 Side Open Plots"],
      nearbyPlaces: [
        "Aurobindo Hospital - 7min",
        "Super Corridor - 7min",
        "Proposed Ahilya Path - 2min",
      ],
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
      plotSizes: [
        "20×50 (1,000 sq.ft)",
        "30×50 (1,500 sq.ft)",
        "42×50 (2,100 sq.ft)",
      ],
      amenities: ["Garden", "Temple", "CCTV Covered Campus", "Kids Play Area"],
      nearbyPlaces: ["IIT Indore - 15min", "Chokhi Dhani - 7min"],
      promotedBy: "Lasar Real Estate Private Limited",
    },
    {
      id: 6,
      name: "Green Valley Residency",
      location: "AB Road",
      projectedReturns: "8.25%",
      minInvestment: "₹28.5 Lakhs",
      type: "residential",
      image: "/property.jpg",
      rate: "₹3,200 per sq.ft",
      plotSizes: [
        "25×40 (1,000 sq.ft)",
        "30×40 (1,200 sq.ft)",
        "25×50 (1,250 sq.ft)",
      ],
      amenities: ["Garden", "Kids Play Area", "24/7 Security", "Power Backup"],
      nearbyPlaces: ["Brilliant Convention Centre - 5min", "Treasure Island Mall - 10min"],
      promotedBy: "Green Valley Developers",
    }
  ];

  // Group properties by type for display
  const residentialProperties = properties.filter(p => p.type === "residential");
  const commercialProperties = properties.filter(p => p.type === "commercial");

  const renderPropertyCards = (propertyList: Property[]) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
      {propertyList.map((property, index) => (
        <div
          key={property.id}
          className="bg-white/8 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-white/15 hover:border-white/25 group w-full max-w-[520px] mx-auto"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          {/* Property Image */}
          <div className="relative h-52 overflow-hidden">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Property Type & Returns Badge */}
            <div className="absolute top-3 left-3 right-3 flex justify-between">
              <span className="bg-white/20 text-white px-2.5 py-1 rounded-md text-xs font-medium backdrop-blur-md border border-white/10 capitalize">
                {property.type}
              </span>
              <span className="bg-accent/90 text-background px-2.5 py-1 rounded-md text-xs font-medium">
                {property.projectedReturns}
              </span>
            </div>
          </div>

          {/* Property Details */}
          <div className="p-6 space-y-4">
            {/* Title and Location */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                {property.name}
              </h3>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white/50 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  {property.location}
                </span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-white/5 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Min Investment</span>
                <span className="text-white font-semibold">
                  {property.minInvestment}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Rate</span>
                <span className="text-white font-semibold">
                  {property.rate}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Plot Sizes</span>
                <span className="text-white font-semibold">
                  {property.plotSizes.length} options
                </span>
              </div>
            </div>

            {/* Amenities and Places Preview */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-white/60 text-sm mb-1">Amenities</div>
                <div className="text-white font-medium">{property.amenities.length} features</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-white/60 text-sm mb-1">Nearby</div>
                <div className="text-white font-medium">{property.nearbyPlaces.length} places</div>
              </div>
            </div>

            {/* View Details Button */}
            <Button
              onClick={() => onViewDetails(property.id)}
              className="w-full bg-white/10 text-white hover:bg-accent hover:text-background font-medium transition-all duration-300 border border-white/10 hover:border-accent rounded-lg py-3"
            >
              View Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background ">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Properties
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Discover premium real estate investment opportunities with guaranteed returns
            </p>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="container max-w-7xl mx-auto px-4 py-16">
        {/* Residential Properties Section */}
        {residentialProperties.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Home className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-white">Residential Properties</h2>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            {renderPropertyCards(residentialProperties)}
          </div>
        )}

        {/* Commercial Properties Section */}
        {commercialProperties.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Building className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-white">Commercial Properties</h2>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            {renderPropertyCards(commercialProperties)}
          </div>
        )}
      </div>
    </div>
  );
}
