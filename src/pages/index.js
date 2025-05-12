import Head from "next/head";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building,
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const properties = [
    {
      id: 1,
      title: "Luxury Apartment Complex",
      location: "Downtown Financial District",
      price: "$4.2M",
      roi: "12% Annual",
      image: "/api/placeholder/800/500",
    },
    {
      id: 2,
      title: "Commercial Office Space",
      location: "Tech Hub Area",
      price: "$7.8M",
      roi: "9.5% Annual",
      image: "/api/placeholder/800/500",
    },
    {
      id: 3,
      title: "Mixed-Use Development",
      location: "University District",
      price: "$12.5M",
      roi: "14% Annual",
      image: "/api/placeholder/800/500",
    },
  ];

  const testimonials = [
    {
      name: "Jane Cooper",
      role: "Real Estate Developer",
      content:
        "Working with this platform transformed how I approach property investments. The analytics and market insights are game-changing.",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Michael Foster",
      role: "Investment Banker",
      content:
        "I've doubled my property portfolio value in 18 months using the strategies and properties recommended by this platform.",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Sarah Thompson",
      role: "Retail Investor",
      content:
        "Even as a beginner investor, I found the platform intuitive and the guidance invaluable for making my first property investment.",
      avatar: "/api/placeholder/40/40",
    },
  ];

  return (
    <>
      <Head>
        <title>Wealth Property | Premium Property Investments</title>
        <meta
          name="description"
          content="Premium property investment opportunities with high ROI"
        />
      </Head>

      <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Secure Your Future With Premium{" "}
                <span className="text-emerald-500">Property Investments</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Access exclusive high-yield property investment opportunities
                vetted by industry experts.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-lg px-8"
                >
                  Explore Properties
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 text-lg"
                >
                  How It Works
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center space-x-2"
                >
                  <TrendingUp className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-300">12-18% Annual ROI</span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center space-x-2"
                >
                  <Building className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-300">Premium Properties</span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center space-x-2"
                >
                  <Shield className="h-6 w-6 text-emerald-500" />
                  <span className="text-gray-300">Secure Investments</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-slate-900 rounded-lg overflow-hidden border border-gray-800">
                <img
                  src="/villa.jpeg"
                  alt="Premium property investment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        The Heights Tower
                      </h3>
                      <p className="text-gray-300">
                        Premium Commercial Property
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-500 font-bold text-xl">
                        $8.5M
                      </p>
                      <p className="text-emerald-400">15% ROI</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-slate-800/50 py-20">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why Choose{" "}
                <span className="text-emerald-500">WealthProperty</span>
              </h2>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform offers unmatched advantages for sophisticated
                property investors
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Building className="h-10 w-10 text-emerald-500" />,
                  title: "Premium Properties",
                  description:
                    "Access exclusive high-value properties not available on the public market.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
                  title: "Above-Market Returns",
                  description:
                    "Our properties consistently yield 5-7% above market average returns.",
                },
                {
                  icon: <DollarSign className="h-10 w-10 text-emerald-500" />,
                  title: "Low Entry Barrier",
                  description:
                    "Start investing with as little as $50,000 through our fractional ownership model.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-emerald-500" />,
                  title: "Fast Liquidity",
                  description:
                    "Our secondary market allows you to sell your investment shares in under 30 days.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-emerald-500" />,
                  title: "Fully Vetted",
                  description:
                    "Every property undergoes a rigorous 72-point due diligence process.",
                },
                {
                  icon: <ArrowRight className="h-10 w-10 text-emerald-500" />,
                  title: "Managed Service",
                  description:
                    "We handle all property management aspects, making investing passive and stress-free.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-slate-900 p-8 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="bg-slate-800/50 p-4 rounded-lg inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Properties Showcase */}
        <section className="container mx-auto py-20">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-12"
          >
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Featured <span className="text-emerald-500">Properties</span>
                </h2>
                <p className="mt-4 text-xl text-gray-300">
                  Explore our selection of high-yield investment opportunities
                </p>
              </div>
              <Button
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                View All Properties <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="bg-slate-800 border border-gray-700">
              <TabsTrigger value="all">All Properties</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="mixed">Mixed-Use</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <motion.div
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {properties.map((property) => (
                  <motion.div
                    key={property.id}
                    variants={fadeIn}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="overflow-hidden rounded-xl bg-slate-900 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-emerald-500 text-white text-sm font-medium px-2 py-1 rounded">
                        {property.roi}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">
                        {property.title}
                      </h3>
                      <p className="text-gray-400 mt-1">{property.location}</p>
                      <div className="flex justify-between items-center mt-6">
                        <p className="text-emerald-500 font-bold text-xl">
                          {property.price}
                        </p>
                        <Button
                          size="sm"
                          className="bg-emerald-500 hover:bg-emerald-600"
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="commercial" className="mt-8">
              <div className="text-center py-10">
                <p className="text-gray-400">
                  Select the Commercial tab to view commercial properties
                </p>
              </div>
            </TabsContent>

            <TabsContent value="residential" className="mt-8">
              <div className="text-center py-10">
                <p className="text-gray-400">
                  Select the Residential tab to view residential properties
                </p>
              </div>
            </TabsContent>

            <TabsContent value="mixed" className="mt-8">
              <div className="text-center py-10">
                <p className="text-gray-400">
                  Select the Mixed-Use tab to view mixed-use properties
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Testimonials */}
        <section className="bg-slate-900 py-20">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What Our <span className="text-emerald-500">Investors Say</span>
              </h2>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of successful investors who have grown their
                wealth with us
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="bg-slate-800 p-8 rounded-xl border border-gray-700"
                >
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Start Growing Your Property Portfolio?
                </h2>
                <p className="mt-4 text-xl text-white/90">
                  Join thousands of investors who have already discovered the
                  power of strategic property investments.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Access to exclusive properties",
                    "Expert investment guidance",
                    "Passive income opportunities",
                    "Portfolio diversification",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-white">
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Create Your Investor Account
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="bg-white/20 border-white/10 text-white placeholder:text-white/70"
                    />
                    <Input
                      placeholder="Last Name"
                      className="bg-white/20 border-white/10 text-white placeholder:text-white/70"
                    />
                  </div>
                  <Input
                    placeholder="Email Address"
                    className="bg-white/20 border-white/10 text-white placeholder:text-white/70"
                  />
                  <Input
                    placeholder="Phone Number"
                    className="bg-white/20 border-white/10 text-white placeholder:text-white/70"
                  />
                  <Input
                    placeholder="Investment Budget"
                    className="bg-white/20 border-white/10 text-white placeholder:text-white/70"
                  />
                  <Button className="w-full bg-white text-emerald-600 hover:bg-white/90">
                    Get Started Now
                  </Button>
                  <p className="text-center text-white/70 text-sm">
                    No commitment. No credit card required.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
