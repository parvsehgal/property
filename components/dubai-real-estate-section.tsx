import { TrendingUp, Building, Users, Globe, MapPin, DollarSign, Shield, Landmark, Star, Receipt } from "lucide-react"

export default function DubaiRealEstateSection() {
  const features = [
    {
      icon: TrendingUp,
      title: "Strong economy",
      description: "Driven by tourism, trade, and finance.",
    },
    {
      icon: Building,
      title: "Government support",
      description: "Infrastructure development, regulatory reforms, and investor-friendly policies.",
    },
    {
      icon: Users,
      title: "Growing population",
      description: "Creating demand for housing and commercial spaces.",
    },
    {
      icon: Globe,
      title: "Global tourism hub",
      description: "Attracting millions of visitors annually.",
    },
    {
      icon: DollarSign,
      title: "High rental yields and capital appreciation",
      description: "Offering attractive investment returns.",
    },
    {
      icon: MapPin,
      title: "Strategic location",
      description: "Providing excellent connectivity and accessibility.",
    },
    {
      icon: Shield,
      title: "Stable political environment",
      description: "Creating a favorable investment climate.",
    },
    {
      icon: Star,
      title: "Thriving economy and robust demand",
      description: "Fueled by both local and international investors.",
    },
    {
      icon: Landmark,
      title: "World-class infrastructure and luxurious lifestyle",
      description: "Enhancing its appeal as a place to live and invest.",
    },
    {
      icon: Receipt,
      title: "Tax-friendly policies",
      description: "Making it a favorable investment destination.",
    },
  ]

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
            Why Dubai Real Estate Is Outperforming Global Markets?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex items-start gap-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-background rounded-full flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
