import {
  DollarSign,
  Users,
  Smartphone,
  Eye,
  TrendingUp,
  Shield,
  Banknote,
  BarChart3,
  PieChart,
} from "lucide-react";

export default function WhyBaytukumSection() {
  const advantages = [
    {
      icon: DollarSign,
      title: "Minimal Entry Barriers",
      description:
        "Invest with as little as AED 5000, making real estate investment accessible to everyone.",
    },
    {
      icon: Users,
      title: "Expert Management",
      description:
        "Our team of experienced professionals handles all aspects of your investment, from property selection to rental management.",
    },
    {
      icon: Smartphone,
      title: "All-Digital Experience",
      description:
        "Manage your investments conveniently through our user-friendly online platform.",
    },
    {
      icon: Eye,
      title: "Transparent Processes",
      description:
        "Benefit from our transparent investment processes, providing you with clear information and updates.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Returns",
      description:
        "Enjoy competitive returns on your investment, with potential for both rental income and capital appreciation.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description:
        "Our platform is designed with the highest security standards to protect your investments.",
    },
    {
      icon: Banknote,
      title: "Passive Income",
      description:
        "Generate rental income without the hassle of property management.",
    },
    {
      icon: BarChart3,
      title: "Long-Term Capital Appreciation",
      description:
        "Benefit from the potential for long-term growth in property values.",
    },
    {
      icon: PieChart,
      title: "Diversified Portfolio",
      description:
        "Invest in a diversified portfolio of properties, reducing risk and maximizing returns.",
    },
  ];

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Invest with MiniLands?
          </h2>
          <p className="text-xl text-accent font-medium mb-4">
            Experience the MiniLands Advantage | Invest Smarter, Earn More
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed">
            Investing in India's real estate market has never been more
            accessible. With MiniLands, you can fractionally own prime
            properties and reap the rewards of rental yield and capital
            appreciation. As a leading crowdfunding platform in India, we offer
            a unique and advantageous approach to real estate investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4">
                <advantage.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
