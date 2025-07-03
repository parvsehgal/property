import { Button } from "@/components/ui/button";
import * as lucideReact from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: lucideReact.Search,
      title: "Curated Investment Opportunities",
      description:
        "Identify and select prime real estate properties in India, meticulously vetting them for potential returns.",
    },
    {
      number: "02",
      icon: lucideReact.FileText,
      title: "Transparent Property Details",
      description:
        "Provide comprehensive property listings, including detailed documentation, financial projections, and risk assessments.",
    },
    {
      number: "03",
      icon: lucideReact.CreditCard,
      title: "Seamless Funding Management",
      description:
        "Efficiently manage the crowdfunding process, ensuring secure and transparent transactions for investors.",
    },
    {
      number: "04",
      icon: lucideReact.Home,
      title: "Hassle-Free Property Acquisition",
      description:
        "Handle all legal and administrative procedures, facilitating a smooth property acquisition on behalf of investors.",
    },
    {
      number: "05",
      icon: lucideReact.Settings,
      title: "Dedicated Investment Management",
      description:
        "Provide ongoing property management services, including rental collection, maintenance, and tenant relations.",
    },
    {
      number: "06",
      icon: lucideReact.DollarSign,
      title: "Income Distribution",
      description:
        "Distribute rental income to investors in a timely and transparent manner, ensuring maximum returns.",
    },
    {
      number: "07",
      icon: lucideReact.TrendingUp,
      title: "Profitable Property Disposition",
      description:
        "Assist investors in selling their properties at optimal market prices, ensuring a profitable exit strategy.",
    },
  ];

  return (
    <section className="py-16 bg-background border-t border-white/20 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How does MiniLands work?
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Your Path to Real Estate Investment with MiniLands
          </p>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Curved connecting path - Subtly shifted to the right */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 1800"
          >
            <path
              d="M420 50 Q620 150 420 250 Q220 350 488 450 Q620 550 420 650 Q220 750 420 850 Q620 950 420 1050 Q220 1150 420 1250 Q620 1350 420 1450 Q220 1550 420 1650"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              className="opacity-60"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fecc57" />
                <stop offset="50%" stopColor="#fecc57" />
                <stop offset="100%" stopColor="#fecc57" />
              </linearGradient>
            </defs>
          </svg>

          {/* Start dot - Slightly shifted to match new path */}
          <div className="absolute top-12 left-1/2 w-4 h-4 bg-accent rounded-full transform translate-x-1 z-10"></div>

          {/* End dot - Slightly shifted to match new path */}
          <div className="absolute bottom-12 left-1/2 w-4 h-4 bg-accent rounded-full transform translate-x-1 z-10"></div>

          <div className="relative z-20 space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex items-center ${isEven ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`flex items-center gap-8 max-w-lg ${isEven ? "" : "flex-row-reverse"}`}
                  >
                    {/* Step number - Changed from green to accent color */}
                    <div className="flex items-center justify-center w-16 h-16 bg-accent text-background font-bold text-xl rounded-full flex-shrink-0 shadow-lg border-2 border-white/20">
                      {step.number}
                    </div>

                    {/* Content card */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-xl flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-background rounded-full flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button className="bg-accent text-background hover:bg-accent/90 font-semibold px-8 py-3 text-lg">
            Sign up for Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
