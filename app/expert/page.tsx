'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { Award, Users, TrendingUp, Shield, Mail, Linkedin, Twitter, ChevronRight, ArrowLeft } from 'lucide-react';

export default function ExpertPanelPage() {
  const [selectedExpert, setSelectedExpert] = useState(null);

  const experts = [
    {
      id: 1,
      name: "Dr. Sarah Al-Mansouri",
      title: "Real Estate Investment Strategist",
      company: "Dubai Properties Group",
      image: "/expert-1.jpg",
      bio: "With over 15 years in Middle Eastern real estate markets, Dr. Al-Mansouri specializes in property investment strategies and market analysis.",
      fullBio: "Dr. Sarah Al-Mansouri is a distinguished real estate investment strategist with over 15 years of experience in Middle Eastern property markets. She holds a PhD in Real Estate Finance from the London School of Economics and has been instrumental in developing investment frameworks that have generated over $500M in returns for institutional investors.",
      expertise: ["Market Analysis", "Investment Strategy", "Property Valuation"],
      achievements: [
        "Led investment strategies for $500M+ in real estate assets",
        "Published 25+ research papers on MENA real estate markets",
        "Awarded 'Real Estate Professional of the Year' 2023",
        "Advisory board member for 3 major property funds"
      ],
      education: "PhD Real Estate Finance, London School of Economics",
      experience: "15+ years",
      email: "sarah.almansouri@example.com",
      linkedin: "linkedin.com/in/sarahalmansouri",
      twitter: "@sarahalmansouri"
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      title: "Fintech Innovation Director",
      company: "Emirates Financial Services",
      image: "/expert-2.jpg",
      bio: "A pioneer in financial technology solutions, Ahmed has led digital transformation initiatives across the MENA region's banking sector.",
      fullBio: "Ahmed Hassan is a visionary fintech leader who has spearheaded digital transformation initiatives across the MENA region's banking and financial services sector. With a background in computer science and finance, he has successfully launched 12 fintech products that have collectively processed over $1B in transactions.",
      expertise: ["Fintech Solutions", "Digital Banking", "Crowdfunding"],
      achievements: [
        "Launched 12 successful fintech products",
        "Processed $1B+ in digital transactions",
        "Winner of 'Fintech Innovation Award' 2022",
        "Keynote speaker at 50+ industry conferences"
      ],
      education: "MSc Financial Technology, MIT",
      experience: "12+ years",
      email: "ahmed.hassan@example.com",
      linkedin: "linkedin.com/in/ahmedhassan",
      twitter: "@ahmedhassan"
    },
    {
      id: 3,
      name: "Marina Rodriguez",
      title: "Regulatory Affairs Specialist",
      company: "UAE Securities Commission",
      image: "/expert-3.jpg",
      bio: "Marina ensures compliance and regulatory excellence in emerging financial products, with deep expertise in crowdfunding regulations.",
      fullBio: "Marina Rodriguez brings over a decade of regulatory expertise to the intersection of traditional finance and emerging technologies. As a senior regulatory affairs specialist, she has been pivotal in crafting the regulatory framework for crowdfunding in the UAE.",
      expertise: ["Regulatory Compliance", "Securities Law", "Risk Management"],
      achievements: [
        "Drafted key crowdfunding regulations for UAE",
        "Compliance advisor for 30+ fintech startups",
        "Recognized expert in securities law",
        "Published regulatory guidelines adopted region-wide"
      ],
      education: "LLM Securities Law, Harvard Law School",
      experience: "10+ years",
      email: "marina.rodriguez@example.com",
      linkedin: "linkedin.com/in/marinarodriguez",
      twitter: "@marinarodriguez"
    },
    {
      id: 4,
      name: "Khalid Al-Rashid",
      title: "Blockchain Technology Advisor",
      company: "Emirates Blockchain Consortium",
      image: "/expert-4.jpg",
      bio: "Leading blockchain integration in real estate transactions, Khalid brings cutting-edge technology solutions to traditional property markets.",
      fullBio: "Khalid Al-Rashid is at the forefront of blockchain technology adoption in real estate and financial services. With a strong technical background and deep understanding of distributed ledger technologies, he has architected blockchain solutions that have revolutionized property transactions in the Middle East.",
      expertise: ["Blockchain Technology", "Smart Contracts", "Digital Assets"],
      achievements: [
        "Architected blockchain solutions for $200M+ in property transactions",
        "Reduced transaction processing time by 70%",
        "Holds 8 blockchain technology patents",
        "Founded Emirates Blockchain Consortium"
      ],
      education: "MSc Blockchain Technology, Stanford University",
      experience: "8+ years",
      email: "khalid.alrashid@example.com",
      linkedin: "linkedin.com/in/khalidalrashid",
      twitter: "@khalidalrashid"
    },
  ];

  const stats = [
    { icon: Users, value: "60+", label: "Years Combined Experience" },
    { icon: Award, value: "150+", label: "Projects Completed" },
    { icon: TrendingUp, value: "$2B+", label: "Assets Under Management" },
    { icon: Shield, value: "25+", label: "Industry Awards" }
  ];

  const ExpertModal = ({ expert, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-6">
              <Image
                src={expert.image}
                alt={expert.name}
                width={100}
                height={100}
                className="rounded-full border-2 border-accent"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{expert.name}</h3>
                <p className="text-accent font-medium">{expert.title}</p>
                <p className="text-gray-400">{expert.company}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h4 className="text-xl font-semibold text-white mb-4">Biography</h4>
              <p className="text-gray-300 leading-relaxed mb-6">{expert.fullBio}</p>

              <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
              <ul className="space-y-2 mb-6">
                {expert.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Details</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-white ml-2">{expert.experience}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Education:</span>
                    <span className="text-white ml-2">{expert.education}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {expert.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                <div className="space-y-3">
                  <a href={`mailto:${expert.email}`} className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                    <Mail size={16} />
                    <span className="text-sm">Email</span>
                  </a>
                  <a href={`https://${expert.linkedin}`} className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                    <Linkedin size={16} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a href={`https://twitter.com/${expert.twitter.replace('@', '')}`} className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                    <Twitter size={16} />
                    <span className="text-sm">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-40">
        <a
          href="/"
          className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full border border-white/20 hover:border-accent/50 transition-all duration-300 flex items-center gap-2 group"
        >
          <ArrowLeft size={20} className="group-hover:text-accent transition-colors" />
          <span className="text-sm font-medium group-hover:text-accent transition-colors">Back to Home</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Expert
              <span className="text-accent"> Panel</span>
            </h1>
            <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Meet the industry leaders and specialists who guide MiniLands' vision and ensure excellence
              in real estate crowdfunding innovation.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:bg-white/10">
                  <stat.icon className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform duration-300" size={48} />
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Rows - Alternating Layout */}
      <section className="pb-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="space-y-16">
            {experts.map((expert, index) => (
              <div key={expert.id} className="group">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}>
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                      <div className="relative">
                        <Image
                          src={expert.image}
                          alt={expert.name}
                          width={250}
                          height={250}
                          className="rounded-2xl w-full h-60 object-cover border-2 border-white/20 group-hover:border-accent/50 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {expert.name}
                      </h2>
                      <p className="text-accent font-semibold text-lg mb-1">
                        {expert.title}
                      </p>
                      <p className="text-gray-400 mb-6">{expert.company}</p>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {expert.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {expert.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-accent/20 text-accent text-sm rounded-full border border-accent/30 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Experience & Education */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h4 className="text-white font-semibold mb-1">Experience</h4>
                        <p className="text-gray-400 text-sm">{expert.experience}</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h4 className="text-white font-semibold mb-1">Education</h4>
                        <p className="text-gray-400 text-sm">{expert.education}</p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => setSelectedExpert(expert)}
                      className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent/80 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                      View Full Profile
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collective Expertise Section */}
      <section className="py-16 px-4 border-t border-white/20">
        <div className="container max-w-7xl mx-auto">
          <div className="bg-white/5 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Collective Expertise & Vision
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                Our expert panel brings together over 60 years of combined experience in real estate,
                fintech, regulatory compliance, and blockchain technology. Together, they ensure MiniLands
                delivers innovative, secure, and compliant investment opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Strategic Oversight</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our experts provide strategic guidance on market opportunities, risk assessment,
                  and innovation roadmaps. They ensure every investment opportunity meets the highest
                  standards of due diligence and market viability.
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Technology Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Leveraging cutting-edge blockchain technology and fintech solutions, our panel
                  drives technological innovation that makes real estate investment more accessible,
                  transparent, and efficient for all participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Connect with Our Experts
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Have questions about our investment strategies or want to learn more about our approach?
            Our expert panel is available for consultation and guidance.
          </p>
          <button className="bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent/80 transition-all duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Expert Modal */}
      {selectedExpert && (
        <ExpertModal
          expert={selectedExpert}
          onClose={() => setSelectedExpert(null)}
        />
      )}
    </div>
  );
}
