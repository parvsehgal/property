"use client"

import { useState } from "react"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  MapPin, 
  TrendingUp, 
  IndianRupee, 
  ArrowLeft, 
  Calendar,
  Users,
  Building,
  Car,
  Wifi,
  Shield,
  Phone,
  Mail,
  CheckCircle
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { properties } from "../page"

export default function PropertyDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const propertyId = parseInt(params.id as string)
  
  const property = properties.find(p => p.id === propertyId)
  
  if (!property) {
    return (
      <div className="min-h-screen bg-[#111111]">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Property Not Found</h1>
            <Button onClick={() => router.back()} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white">
              Go Back
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const [selectedImage, setSelectedImage] = useState(0)
  const propertyImages = [property.image, property.image, property.image] // Using same image for demo

  return (
    <div className="min-h-screen bg-[#111111]">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => router.back()}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Properties
          </Button>

          {/* Property Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{property.name}</h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">{property.location}</span>
                </div>
                <div className="flex gap-3">
                  <Badge 
                    className={`${
                      property.type === 'commercial' 
                        ? 'bg-card text-teal-600 border-2 border-teal-600' 
                        : 'bg-teal-600 text-white'
                    }`}
                  >
                    {property.type === 'commercial' ? 'Commercial' : 'Residential'}
                  </Badge>
                  <Badge variant="outline" className="text-teal-600 border-teal-200">
                    {property.propertyType}
                  </Badge>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  {property.projectedReturns}
                </div>
                <div className="text-muted-foreground">Projected Annual Returns</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <Card className="overflow-hidden bg-card border-border">
                <div className="relative h-96">
                  <Image
                    src={propertyImages[selectedImage]}
                    alt={property.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {propertyImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 ${
                          selectedImage === index ? 'border-teal-500' : 'border-transparent'
                        }`}
                      >
                        <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Property Details Tabs */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="amenities">Amenities</TabsTrigger>
                      <TabsTrigger value="location">Location</TabsTrigger>
                      <TabsTrigger value="investment">Investment</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="mt-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-4">Property Overview</h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {property.name} is a premium {property.propertyType.toLowerCase()} located in the heart of {property.location}. 
                            This property offers excellent investment potential with projected returns of {property.projectedReturns} annually.
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Property Type</h4>
                            <p className="text-muted-foreground">{property.propertyType}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Rate</h4>
                            <p className="text-muted-foreground">{property.rate}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Promoted By</h4>
                            <p className="text-muted-foreground">{property.promotedBy}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Investment Type</h4>
                            <p className="text-muted-foreground">Fractional Ownership</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Available Plot Sizes</h4>
                          <div className="flex flex-wrap gap-2">
                            {property.plotSizes.map((size, index) => (
                              <Badge key={index} variant="outline" className="text-teal-600 border-teal-200">
                                {size}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="amenities" className="mt-6">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Amenities & Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {property.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-teal-600" />
                              <span className="text-foreground">{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="location" className="mt-6">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Location Highlights</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Nearby Places</h4>
                            <div className="space-y-2">
                              {property.nearbyPlaces.map((place, index) => (
                                <div key={index} className="flex items-center gap-3">
                                  <MapPin className="h-4 w-4 text-teal-600" />
                                  <span className="text-foreground">{place}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-muted rounded-lg p-4 mt-6">
                            <p className="text-muted-foreground text-center">
                              Interactive map and detailed location information coming soon
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="investment" className="mt-6">
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-foreground">Investment Details</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="border-teal-200 bg-card">
                            <CardContent className="p-4">
                              <div className="text-center">
                                <TrendingUp className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-teal-600 mb-1">
                                  {property.projectedReturns}
                                </div>
                                <div className="text-muted-foreground">Projected Annual Returns</div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-teal-200 bg-card">
                            <CardContent className="p-4">
                              <div className="text-center">
                                <IndianRupee className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-teal-600 mb-1">
                                  {property.minInvestment}
                                </div>
                                <div className="text-muted-foreground">Minimum Investment</div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <div className="bg-teal-900/20 rounded-lg p-6">
                          <h4 className="font-semibold text-foreground mb-3">Why Invest in {property.name}?</h4>
                          <ul className="space-y-2 text-foreground">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                              <span>Prime location with excellent connectivity</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                              <span>High rental yield potential</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                              <span>Fractional ownership with low entry barrier</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                              <span>Professional property management</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Investment Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-teal-200 shadow-xl bg-card">
                <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                  <CardTitle className="text-center">Investment Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">
                      {property.minInvestment}
                    </div>
                    <div className="text-muted-foreground">Minimum Investment</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property Type</span>
                      <span className="font-semibold text-foreground">{property.propertyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Returns</span>
                      <span className="font-semibold text-teal-600">{property.projectedReturns}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rate</span>
                      <span className="font-semibold text-foreground">{property.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Investment Type</span>
                      <span className="font-semibold text-foreground">Fractional</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-lg py-3">
                      Invest Now
                    </Button>
                    <Button variant="outline" className="w-full border-teal-500 text-teal-600 hover:bg-teal-50">
                      Download Brochure
                    </Button>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-3">Need Help?</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">+91 98765 43210</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">info@proplist.com</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
