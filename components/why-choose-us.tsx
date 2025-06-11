"use client";

import { HoverEffect } from "./ui/card-hover-effect";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

export function WhyChooseUs() {
  const features = [
    {
      title: "Secure Investments",
      description:
        "All properties are thoroughly vetted and verified for maximum security and peace of mind.",
    },
    {
      title: "High Returns",
      description:
        "Access exclusive high-yield properties with average returns of 12-18% annually.",
    },
    {
      title: "Expert Guidance",
      description:
        "Our team of property experts provides personalized investment advice and market insights.",
    },
    {
      title: "Flexible Investment Options",
      description:
        "Choose from a variety of investment plans tailored to your financial goals and risk appetite.",
    },
    {
      title: "Transparent Reporting",
      description:
        "Receive regular, detailed performance reports and real-time updates on your investments.",
    },
    {
      title: "Hassle-Free Management",
      description:
        "We handle all property management tasks, from tenant screening to maintenance, ensuring a seamless experience.",
    },
  ];

  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Running out of content
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 bg-[#111111]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-right mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-4">
            Trust{"  "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent">
              and{"  "}
            </span>
            Credibility
          </h2>
          <p className="text-7xl text-muted-foreground max-w-7xl mb-6 ml-auto">
            Why to trust{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent">
              Us?
            </span>
          </p>
          <div className="border-b border-spacing-10 -mb-10 border-b-slate-400 mt-10" />
        </div>

        <HoverEffect items={features} />

        <div className="bg-emerald-900 rounded-2xl p-8 shadow-lg border border-border">
          <div className="text-center mb-8">
            <h3 className="text-5xl text-center font-bold text-foreground mb-2">
              How does PropList Works?
            </h3>
          </div>
          <div className="w-full py-4 rounded-2xl">
            <StickyScroll content={content} />
          </div>
        </div>
      </div>
    </section>
  );
}
