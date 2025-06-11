"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  TrendingUp,
  IndianRupee,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface Property {
  id: number;
  name: string;
  location: string;
  projectedReturns: string;
  minInvestment: string;
  propertyType: string;
  type: "residential" | "commercial";
  image: string;
  rate: string;
  plotSizes: string[];
  amenities: string[];
  nearbyPlaces: string[];
  promotedBy: string;
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Azure Greens",
    location: "Mumbai, Maharashtra",
    projectedReturns: "12.5% p.a.",
    minInvestment: "₹50,000",
    propertyType: "Plotted Development",
    type: "residential",
    image: "/property.jpg",
    rate: "₹5,500/sq.ft",
    plotSizes: ["30x40", "40x60", "50x80"],
    amenities: ["Clubhouse", "Swimming Pool", "Gym"],
    nearbyPlaces: ["Metro Station", "School", "Hospital"],
    promotedBy: "RealMark Developers",
  },
  {
    id: 2,
    name: "Orion Corporate Hub",
    location: "Bangalore, Karnataka",
    projectedReturns: "9.8% p.a.",
    minInvestment: "₹1,00,000",
    propertyType: "Commercial Tower",
    type: "commercial",
    image: "/property.jpg",
    rate: "₹12,000/sq.ft",
    plotSizes: ["Custom"],
    amenities: ["Parking", "24/7 Security", "Power Backup"],
    nearbyPlaces: ["IT Park", "Airport", "Mall"],
    promotedBy: "NextGen Properties",
  },
  {
    id: 3,
    name: "Sunset Villas",
    location: "Pune, Maharashtra",
    projectedReturns: "11.2% p.a.",
    minInvestment: "₹75,000",
    propertyType: "Villa Community",
    type: "residential",
    image: "/property.jpg",
    rate: "₹7,800/sq.ft",
    plotSizes: ["60x40", "80x60"],
    amenities: ["Private Garden", "Jogging Track", "Play Area"],
    nearbyPlaces: ["School", "Market", "Highway"],
    promotedBy: "Elegant Estates",
  },
  {
    id: 4,
    name: "Skyline Plaza",
    location: "Hyderabad, Telangana",
    projectedReturns: "10.4% p.a.",
    minInvestment: "₹85,000",
    propertyType: "Commercial Retail",
    type: "commercial",
    image: "/property.jpg",
    rate: "₹10,500/sq.ft",
    plotSizes: ["2000 sq.ft", "3000 sq.ft"],
    amenities: ["Lift", "CCTV", "Fire Safety"],
    nearbyPlaces: ["Tech Park", "Expressway", "Hotel"],
    promotedBy: "MetroRise Group",
  },
  {
    id: 5,
    name: "Green Valley",
    location: "Chennai, Tamil Nadu",
    projectedReturns: "13% p.a.",
    minInvestment: "₹60,000",
    propertyType: "Plotted Development",
    type: "residential",
    image: "/property.jpg",
    rate: "₹4,200/sq.ft",
    plotSizes: ["30x50", "40x60"],
    amenities: ["Park", "Community Hall", "Cycle Track"],
    nearbyPlaces: ["College", "Airport", "Temple"],
    promotedBy: "NatureNest Realty",
  },
  {
    id: 6,
    name: "Cyber Heights",
    location: "Gurugram, Haryana",
    projectedReturns: "9.5% p.a.",
    minInvestment: "₹1,50,000",
    propertyType: "Office Space",
    type: "commercial",
    image: "/property.jpg",
    rate: "₹15,000/sq.ft",
    plotSizes: ["Flexible Units"],
    amenities: ["Conference Room", "Lounge", "Wi-Fi"],
    nearbyPlaces: ["Metro", "Business Hub", "Hotel"],
    promotedBy: "Skyline Ventures",
  },
];

export default function PropertiesPage() {
  const [filter, setFilter] = useState<"all" | "residential" | "commercial">(
    "all"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  const filteredProperties = properties.filter(
    (property) => filter === "all" || property.type === filter
  );

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    startIndex,
    startIndex + propertiesPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-foreground font-sans">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl mt-10">
          <div className="mb-12">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Discover Premium{" "}
              <span className="bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent">
                Properties
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground mt-3 max-w-7xl mx-auto">
              Curated listings with high potential returns, trusted promoters,
              and modern amenities.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="bg-[#1b1b1b] p-1 rounded-xl shadow-inner backdrop-blur-md flex gap-2">
              {(["all", "residential", "commercial"] as const).map((type) => (
                <Button
                  key={type}
                  onClick={() => {
                    setFilter(type);
                    setCurrentPage(1);
                  }}
                  variant="ghost"
                  className={`px-4 py-2 text-sm rounded-lg transition-all ${
                    filter === type
                      ? "bg-gradient-to-b from-emerald-800 to-emerald-950  text-white shadow"
                      : "text-muted-foreground hover:text-white hover:bg-gradient-to-b from-emerald-800 to-emerald-950"
                  }`}
                >
                  {type[0].toUpperCase() + type.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProperties.map((property) => (
              <Card
                key={property.id}
                className="bg-[#1a1a1a]/60 backdrop-blur-md border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.015] hover:shadow-2xl transition-transform duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover"
                  />
                  <Badge
                    className={`absolute top-4 right-4 ${
                      property.type === "commercial"
                        ? "bg-emerald-800 text-white"
                        : "bg-emerald-800 text-white"
                    }`}
                  >
                    {property.type}
                  </Badge>
                </div>

                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    {property.name}
                  </h3>

                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-teal-500" />
                      <div>
                        <p className="text-muted-foreground">Returns</p>
                        <p className="font-medium text-teal-400">
                          {property.projectedReturns}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Min. Invest</p>
                        <p className="font-medium text-white">
                          {property.minInvestment}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm">
                    <p className="text-muted-foreground">Rate</p>
                    <p className="text-white font-medium">{property.rate}</p>
                  </div>

                  <div className="text-sm">
                    <p className="text-muted-foreground mb-1">Plot Sizes</p>
                    <div className="flex flex-wrap gap-1">
                      {property.plotSizes.slice(0, 2).map((size, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-border text-muted-foreground"
                        >
                          {size}
                        </Badge>
                      ))}
                      {property.plotSizes.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-border text-muted-foreground"
                        >
                          +{property.plotSizes.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Link href={`/properties/${property.id}`}>
                    <Button className="w-full mt-2 bg-gradient-to-b from-emerald-800 to-emerald-950 text-white rounded-lg">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-2 items-center">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="border-border text-foreground hover:bg-muted gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Prev
              </Button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-md ${
                        currentPage === page
                          ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white"
                          : "border-border text-muted-foreground hover:bg-muted"
                      }`}
                      variant="outline"
                    >
                      {page}
                    </Button>
                  )
                )}
              </div>

              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border-border text-foreground hover:bg-muted gap-2"
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
  );
}
