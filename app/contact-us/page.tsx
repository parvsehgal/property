"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Building2,
  MessageSquare,
  Users,
  HeadphonesIcon,
  CheckCircle
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      description: "Call us directly",
      details: ["+91 98765 43210", "+91 87654 32109"]
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email",
      details: ["info@proplist.com", "sales@proplist.com"]
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Visit our office",
      details: ["123 Business District", "Moti Nagar, New Delhi", "Delhi 110019"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're available",
      details: ["Mon-Fri: 9:00 AM - 7:00 PM", "Saturday: 10:00 AM - 6:00 PM", "Sunday: 11:00 AM - 4:00 PM"]
    }
  ]

  const services = [
    {
      icon: Building2,
      title: "Property Investment",
      description: "Get expert guidance on property investments with guaranteed returns and comprehensive market insights."
    },
    {
      icon: Users,
      title: "Free Consultation",
      description: "Schedule a complimentary consultation with our real estate experts to discuss your investment goals."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our dedicated customer support team is available round the clock to answer all your questions."
    }
  ]

  return (
    <div className="min-h-screen bg-[#111111]">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-6">
              <MessageSquare className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about our properties or investment opportunities? We're here to help you make informed decisions and guide you through your real estate journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-card/80 backdrop-blur-sm hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground mb-4">{info.description}</p>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="font-semibold text-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm">
                <CardHeader className="pb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-lg">
                      <Send className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold text-foreground">Send us a Message</CardTitle>
                      <p className="text-muted-foreground mt-2">Fill out the form below and we'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-foreground font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-border focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-foreground font-semibold">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-border focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-foreground font-semibold">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="h-12 border-border focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="subject" className="text-foreground font-semibold">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-border focus:border-teal-500 focus:ring-teal-500 rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-foreground font-semibold">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="border-border focus:border-teal-500 focus:ring-teal-500 rounded-lg resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-14 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="h-5 w-5 mr-3" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    Why Choose PropList?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">RERA approved properties with guaranteed returns</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Expert guidance from experienced professionals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Transparent pricing with no hidden costs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">24/7 customer support and assistance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Prime locations with excellent connectivity</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-teal-900/20 to-teal-900/20 rounded-lg p-6 text-center">
                    <Phone className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Need Immediate Help?</h3>
                    <p className="text-muted-foreground mb-4">Call us directly for instant assistance</p>
                    <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team is ready to assist you with all your real estate needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group text-center border-0 shadow-xl bg-card/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
