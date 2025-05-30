"use client"

import { Shield, TrendingUp, Users } from "lucide-react"
import CountUp from 'react-countup';

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Secure Investments",
      description: "All properties are thoroughly vetted and verified for maximum security and peace of mind.",
    },
    {
      icon: TrendingUp,
      title: "High Returns",
      description: "Access exclusive high-yield properties with average returns of 12-18% annually.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our team of property experts provides personalized investment advice and market insights.",
    },
  ]

  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent">
              PropList
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform offers unmatched advantages for sophisticated property investors and homebuyers
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Video Section - Primary Focus */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/NpEaa2P7qZI"
                  title="PropList Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Features Grid - Secondary */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-border"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-foreground mb-2">Our Track Record</h3>
            <p className="text-muted-foreground">Numbers that speak for our excellence</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp 
                  start={0}
                  end={50000}
                  duration={2.5}
                  separator=","
                />
              </div>
              <div className="text-muted-foreground font-medium">Properties Sold</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp
                  start={0}
                  end={1000}
                  duration={2.5}
                  separator=","
                />
              </div>
              <div className="text-muted-foreground font-medium">Cities Covered</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp 
                  start={0}
                  end={15}
                  duration={2.5}
                  separator=","
                />
              </div>
              <div className="text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp 
                  start={0}
                  end={98}
                  duration={2.5}
                  separator=","
                />
              </div>
              <div className="text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
