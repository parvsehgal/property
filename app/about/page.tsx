'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Send, User, MessageSquare, Building } from 'lucide-react';

const AboutUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const values = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously push boundaries to deliver cutting-edge solutions that transform the real estate industry."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Transparency",
      description: "We believe in open communication and honest dealings with all our stakeholders and investors."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards in all our endeavors."
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Integrity",
      description: "We conduct our business with the highest ethical standards and unwavering commitment to our values."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <section className="relative h-96 bg-gradient-to-br from-background via-background/80 to-background">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-accent">MiniLands</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Revolutionizing real estate investment through innovative crowdfunding solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background border-t border-white/20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-lg leading-relaxed">
                At MiniLands, our mission is to democratize real estate investment by making it accessible,
                transparent, and profitable for everyone. We leverage cutting-edge technology and innovative
                crowdfunding mechanisms to break down traditional barriers and create opportunities for both
                individual and institutional investors to participate in premium real estate ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Vision
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-lg leading-relaxed">
                We envision a future where real estate investment is no longer limited by geography,
                minimum capital requirements, or complex processes. Our goal is to become the leading
                global platform that connects investors with high-quality real estate opportunities,
                fostering a more inclusive and efficient investment ecosystem that benefits all participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-background border-t border-white/20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              These core values guide everything we do and shape our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:bg-white/10 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Founder
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-accent/80 to-accent rounded-2xl flex items-center justify-center">
                      <User className="w-24 h-24 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    John Anderson
                  </h3>
                  <p className="text-accent font-semibold text-lg mb-1">
                    Founder & CEO
                  </p>
                  <div className="flex justify-center lg:justify-start items-center gap-2 mb-6">
                    <Linkedin className="w-5 h-5 text-accent" />
                    <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                      linkedin.com/in/johnanderson
                    </a>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    John Anderson is a visionary entrepreneur with over 15 years of experience in real estate
                    and fintech. He founded MiniLands with the mission to revolutionize how people invest in
                    real estate. Prior to MiniLands, John led successful ventures in property development and
                    financial technology, raising over $50M in funding and delivering exceptional returns to investors.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    His expertise spans across real estate development, blockchain technology, regulatory compliance,
                    and venture capital. John holds an MBA from Harvard Business School and a Bachelor's degree
                    in Civil Engineering from MIT. He is passionate about creating accessible investment opportunities
                    and building sustainable communities through innovative real estate solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Form */}
      <section className="py-16 bg-background border-t border-white/20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Ready to start your investment journey? Get in touch with our team today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-white">contact@minilands.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <p className="text-white">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Address</p>
                        <p className="text-white">123 Innovation Drive<br />San Francisco, CA 94105</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="space-y-6">
                  <div>
                    <div className="block text-white font-medium mb-2">
                      Full Name
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <div className="block text-white font-medium mb-2">
                      Email Address
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <div className="block text-white font-medium mb-2">
                      Subject
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Enter message subject"
                    />
                  </div>

                  <div>
                    <div className="block text-white font-medium mb-2">
                      Message
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
