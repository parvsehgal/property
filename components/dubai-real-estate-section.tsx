import {
  TrendingUp,
  Building,
  Users,
  Globe,
  MapPin,
  DollarSign,
  Shield,
  Landmark,
  Star,
  Receipt,
} from "lucide-react";

export default function DubaiRealEstateSection() {
  const features = [
    {
      icon: TrendingUp,
      title: "India’s Economy Drives Success",
      description: "Strong economy fuels real estate growth.",
    },
    {
      icon: Building,
      title: "Policy Powers Fractional Boom",
      description:
        "Reforms make property investing safer.",
    },
    {
      icon: Users,
      title: "Urban Growth Sparks Demand",
      description: "city expansion boosts shared ownership.",
    },
    {
      icon: Globe,
      title: "Business Hubs Attract Investors",
      description: "Prime locations welcome global buyers.",
    },
    {
      icon: DollarSign,
      title: "High Yields Set Apart",
      description: "Steady, strong returns for investors.",
    },
    {
      icon: MapPin,
      title: "Top Cities, Growth Zones",
      description: "Key markets show rising potential.",
    },
    {
      icon: Shield,
      title: "Secure, Transparent Investments",
      description: "Regulated platforms build investor trust.",
    },
    {
      icon: Star,
      title: "Global Investors Choose India",
      description: "Worldwide backing for fractional assets.",
    },
    {
      icon: Landmark,
      title: "Premium Properties, Small Shares",
      description: "Big dreams via small investments.",
    },
    {
      icon: Receipt,
      title: "Easy Start, Tax Perks",
      description: "Simple entry with tax benefits.",
    },
  ];

  return (
    <section className="py-16 bg-background border-t border-white/20 relative">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('/lux.jpg')",
        }}
      ></div>

      {/* Overlay to ensure content readability */}
      <div className="absolute inset-0 bg-background/40"></div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
            Why India’s Fractional Real Estate is Outperforming Global Market ?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:bg-white"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-background rounded-full flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
