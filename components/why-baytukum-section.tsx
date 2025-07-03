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
      title: "Low Investment, Big Opportunities",
      description: "Start with just Rs. 10L , accessible to all.",
    },
    {
      icon: Users,
      title: "Professionally Managed Properties",
      description: "Experts handle selection, leasing, and maintenance.",
    },
    {
      icon: Smartphone,
      title: "Fully Digital, Seamless Experience",
      description: "Track and manage investments anytime, anywhere.",
    },
    {
      icon: Eye,
      title: "Transparent, Hassle-Free Process",
      description: "Clear, honest updates on every investment step.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Returns, Steady Growth",
      description: "Earn rental income plus capital appreciation.",
    },
    {
      icon: Shield,
      title: "Safe, Secure Investment Platform",
      description: "Top-tier security for your peace of mind.",
    },
    {
      icon: Banknote,
      title: "Effortless Passive Income",
      description: "Earn without dealing with property hassles.",
    },
    {
      icon: BarChart3,
      title: "Long-Term Wealth Creation",
      description: "Benefit from rising real estate values over time.",
    },
    {
      icon: PieChart,
      title: "Diversify Easily, Minimize Risk",
      description: "Build a multi-property portfolio with small amounts.",
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
            Secure, Transparent, and Professionally Managed for Steady Growth.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed">
            Step into India’s booming real estate market with fractional
            ownership—affordable, hassle-free, and high-return. Minilands makes
            it possible for anyone to start small and grow big.
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
