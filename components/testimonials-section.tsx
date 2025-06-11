"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Real Estate Investor",
      avatar: "/placeholder.jpeg?height=80&width=80",
      rating: 5,
      content:
        "PropList transformed how I approach property investments. The platform's analytics and market insights are game-changing. I've doubled my property portfolio value in just 18 months using their recommended strategies.",
      location: "New York, NY",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "First-time Homebuyer",
      avatar: "/placeholder.jpeg?height=80&width=80",
      rating: 5,
      content:
        "As a first-time buyer, I found the platform intuitive and the guidance invaluable. The team helped me navigate the entire process seamlessly, and I found my dream home within my budget.",
      location: "San Francisco, CA",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Property Developer",
      avatar: "/placeholder.jpeg?height=80&width=80",
      rating: 5,
      content:
        "The commercial property listings on PropList are exceptional. I've secured multiple high-yield investments through their platform, and the ROI has exceeded my expectations consistently.",
      location: "Miami, FL",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Luxury Home Buyer",
      avatar: "/placeholder.jpeg?height=80&width=80",
      rating: 5,
      content:
        "PropList's luxury property collection is unmatched. They helped me find a stunning waterfront estate that perfectly matched my requirements. The service was white-glove from start to finish.",
      location: "Los Angeles, CA",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r  from-teal-600 to-teal-600 bg-clip-text text-transparent">
              Clients {"  "}
            </span>
            say
          </h2>
          <p className="text-7xl text-muted-foreground max-w-screen-2xl mb-6">
            Join thousands of successful Investors{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent">
              and Homebuyers
            </span>
          </p>
          <div className="border-b border-spacing-10 border-b-slate-400" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-teal-900/20 to-teal-900/20 rounded-3xl p-8 md:p-12 shadow-lg border border-teal-800/30">
            <div className="flex right-6 absolute my-auto gap-1">
              {Array.from({
                length: testimonials[currentTestimonial].rating,
              }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <div className="flex  gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-card shadow-lg">
                <Image
                  src={
                    testimonials[currentTestimonial].avatar ||
                    "/placeholder.jpeg"
                  }
                  alt={testimonials[currentTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-teal-400 font-medium">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>

            <div className="text-center space-y-6 mt-8">
              <blockquote className="text-xl md:text-2xl text-foreground italic leading-relaxed max-w-3xl mx-auto">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="absolute my-auto right-6 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="border-teal-600 text-teal-400 hover:bg-teal-900/30"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="border-teal-600 text-teal-400 hover:bg-teal-900/30"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-teal-500 w-8"
                      : "bg-teal-700 hover:bg-teal-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
