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
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Property Not Found</h1>
            <Button onClick={() => router.back()}>Go Back</Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const [selectedImage, setSelectedImage] = useState(0)
  const propertyImages = [property.image, property.image, property.image] // Using same image for demo

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => router.back()}
            className="mb-6 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Properties
          </Button>

          {/* Property Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-2">{property.name}</h1>
                <div className="flex items-center text-slate-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">{property.location}</span>
                </div>
                <div className="flex gap-3">
                  <Badge 
                    className={`${
                      property.type === 'commercial' 
                        ? 'bg-white text-emerald-600 border-2 border-emerald-600' 
                        : 'bg-emerald-600 text-white'
                    }`}
                  >
                    {property.type === 'commercial' ? 'Commercial' : 'Residential'}
                  </Badge>
                  <Badge variant="outline" className="text-emerald-600 border-emerald-200">
                    {property.propertyType}
                  </Badge>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {property.projectedReturns}
                </div>
                <div className="text-slate-600">Projected Annual Returns</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <Card className="overflow-hidden">
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
                          selectedImage === index ? 'border-emerald-500' : 'border-transparent'
                        }`}
                      >
                        <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Property Details Tabs */}
              <Card>
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
                          <h3 className="text-xl font-bold text-slate-900 mb-4">Property Overview</h3>
                          <p className="text-slate-600 leading-relaxed mb-4">
                            {property.name} is a premium {property.propertyType.toLowerCase()} located in the heart of {property.location}. 
                            This property offers excellent investment potential with projected returns of {property.projectedReturns} annually.
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Property Type</h4>
                            <p className="text-slate-600">{property.propertyType}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Rate</h4>
                            <p className="text-slate-600">{property.rate}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Promoted By</h4>
                            <p className="text-slate-600">{property.promotedBy}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Investment Type</h4>
                            <p className="text-slate-600">Fractional Ownership</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3">Available Plot Sizes</h4>
                          <div className="flex flex-wrap gap-2">
                            {property.plotSizes.map((size, index) => (
                              <Badge key={index} variant="outline" className="text-emerald-600 border-emerald-200">
                                {size}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="amenities" className="mt-6">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Amenities & Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {property.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-emerald-600" />
                              <span className="text-slate-700">{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="location" className="mt-6">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Location Highlights</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Nearby Places</h4>
                            <div className="space-y-2">
                              {property.nearbyPlaces.map((place, index) => (
                                <div key={index} className="flex items-center gap-3">
                                  <MapPin className="h-4 w-4 text-emerald-600" />
                                  <span className="text-slate-700">{place}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-slate-100 rounded-lg p-4 mt-6">
                            <p className="text-slate-600 text-center">
                              Interactive map and detailed location information coming soon
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="investment" className="mt-6">
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-900">Investment Details</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="border-emerald-200">
                            <CardContent className="p-4">
                              <div className="text-center">
                                <TrendingUp className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-emerald-600 mb-1">
                                  {property.projectedReturns}
                                </div>
                                <div className="text-slate-600">Projected Annual Returns</div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-emerald-200">
                            <CardContent className="p-4">
                              <div className="text-center">
                                <IndianRupee className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-emerald-600 mb-1">
                                  {property.minInvestment}
                                </div>
                                <div className="text-slate-600">Minimum Investment</div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <div className="bg-emerald-50 rounded-lg p-6">
                          <h4 className="font-semibold text-slate-900 mb-3">Why Invest in {property.name}?</h4>
                          <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                              <span>Prime location with excellent connectivity</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                              <span>High rental yield potential</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                              <span>Fractional ownership with low entry barrier</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
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
              <Card className="sticky top-24 border-emerald-200 shadow-xl">
                <CardHeader className="bg-teal-600 text-white">
                  <CardTitle className="text-center">Investment Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      {property.minInvestment}
                    </div>
                    <div className="text-slate-600">Minimum Investment</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Property Type</span>
                      <span className="font-semibold">{property.propertyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Expected Returns</span>
                      <span className="font-semibold text-emerald-600">{property.projectedReturns}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Rate</span>
                      <span className="font-semibold">{property.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Investment Type</span>
                      <span className="font-semibold">Fractional</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg py-3">
                      Invest Now
                    </Button>
                    <Button variant="outline" className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-50">
                      Download Brochure
                    </Button>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Need Help?</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">+91 98765 43210</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
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
