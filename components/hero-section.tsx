"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Home, Building, Warehouse } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [searchType, setSearchType] = useState("buy")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/villa.jpg"
          alt="Modern luxury home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Find Your Dream{" "}
                <span className="bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent">
                  Property
                </span>{" "}
                Today
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover premium properties with exclusive access to high-yield investment opportunities vetted by
                industry experts.
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-xl p-6 border border-border">
              <div className="flex gap-2 mb-6">
                {[
                  { id: "buy", label: "Buy", icon: Home },
                  { id: "rent", label: "Rent", icon: Building },
                  { id: "commercial", label: "Commercial", icon: Warehouse },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setSearchType(id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      searchType === id
                        ? "bg-teal-600 text-white shadow-md"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                ))}
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Enter location, city, or neighborhood"
                      className="pl-10 h-12 border-border focus:ring-teal-500"
                    />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="h-12 border-border focus:ring-teal-500 text-white bg-#111111">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent className="text-white bg=#111111 ">
                    <SelectItem value="house" className="text-white">House</SelectItem>
                    <SelectItem value="apartment" className="text-white">Apartment</SelectItem>
                    <SelectItem value="condo" className="text-white">Condo</SelectItem>
                    <SelectItem value="townhouse" className="text-white">Townhouse</SelectItem>
                    <SelectItem value="villa" className="text-white">Villa</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="h-12 bg-teal-600 hover:bg-teal-700 text-white">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/properties">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Explore Properties
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-teal-600 bg=#111111  text-white hover:bg-#111111 hover:text-teal-500">
                How It Works
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-card rounded-2xl shadow-2xl overflow-hidden duration-500">
              <div className="relative h-64">
                <Image
                  src="/property.jpg"
                  alt="Luxury property"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-card/90 backdrop-blur-sm text-teal-600 px-3 py-1 rounded-full text-sm font-bold">
                    2.5Cr
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Sia Villa Estate</h3>
                <p className="text-muted-foreground mb-4">Chittaranjan Park, New Delhi</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>4 Beds</span>
                  <span>3 Baths</span>
                  <span>3,200 sq ft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
