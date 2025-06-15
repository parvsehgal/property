import Image from "next/image";

export default function ExpertPanelSection() {
  const experts = [
    {
      name: "Dr. Sarah Al-Mansouri",
      title: "Real Estate Investment Strategist",
      company: "Dubai Properties Group",
      image: "/expert-1.jpg",
      bio: "With over 15 years in Middle Eastern real estate markets, Dr. Al-Mansouri specializes in property investment strategies and market analysis.",
      expertise: [
        "Market Analysis",
        "Investment Strategy",
        "Property Valuation",
      ],
    },
    {
      name: "Ahmed Hassan",
      title: "Fintech Innovation Director",
      company: "Emirates Financial Services",
      image: "/expert-2.jpg",
      bio: "A pioneer in financial technology solutions, Ahmed has led digital transformation initiatives across the MENA region's banking sector.",
      expertise: ["Fintech Solutions", "Digital Banking", "Crowdfunding"],
    },
    {
      name: "Marina Rodriguez",
      title: "Regulatory Affairs Specialist",
      company: "UAE Securities Commission",
      image: "/expert-3.jpg",
      bio: "Marina ensures compliance and regulatory excellence in emerging financial products, with deep expertise in crowdfunding regulations.",
      expertise: ["Regulatory Compliance", "Securities Law", "Risk Management"],
    },
    {
      name: "Khalid Al-Rashid",
      title: "Blockchain Technology Advisor",
      company: "Emirates Blockchain Consortium",
      image: "/expert-4.jpg",
      bio: "Leading blockchain integration in real estate transactions, Khalid brings cutting-edge technology solutions to traditional property markets.",
      expertise: ["Blockchain Technology", "Smart Contracts", "Digital Assets"],
    },
  ];

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Expert Panel
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Meet the industry leaders and specialists who guide MiniLands'
            vision and ensure excellence in real estate crowdfunding innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {experts.map((expert, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:bg-white/10 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      width={120}
                      height={120}
                      className="rounded-full border-2 border-accent/30 group-hover:border-accent transition-colors duration-300"
                    />
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-1">
                    {expert.name}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-1">
                    {expert.title}
                  </p>
                  <p className="text-gray-400 text-xs mb-4">{expert.company}</p>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {expert.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {expert.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Collective Expertise
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our expert panel brings together over 60 years of combined
              experience in real estate, fintech, regulatory compliance, and
              blockchain technology. Together, they ensure MiniLands delivers
              innovative, secure, and compliant investment opportunities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-accent text-2xl font-bold">60+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-accent text-2xl font-bold">150+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-accent text-2xl font-bold">$2B+</div>
                <div className="text-gray-400 text-sm">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-accent text-2xl font-bold">25+</div>
                <div className="text-gray-400 text-sm">Industry Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
