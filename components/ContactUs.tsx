"use client";

import { CardSpotlight } from "./ui/card-spotlight";

export function ContactUs() {
  const contactMethods = [
    {
      key: "call",
      title: "Call our Team",
      description: "Our Support Team will be glad to assist you",
      link: "tel:+1234567890",
      linkText: "(+91) 8765345678",
      linkClass: "text-teal-400 hover:text-teal-600",
    },
    {
      key: "whatsapp",
      title: "Chat on WhatsApp",
      description: "Reach out instantly via WhatsApp for quick support.",
      link: "https://wa.me/1234567890",
      linkText: "Chat Now",
      linkClass: "text-green-400 hover:text-green-600",
    },
    {
      key: "email",
      title: "Email Us",
      description: "Send us an email and we'll get back to you soon.",
      link: "mailto:support@example.com",
      linkText: "support@example.com",
      linkClass: "text-blue-400 hover:text-blue-600",
    },
    {
      key: "facebook",
      title: "Facebook Messenger",
      description: "Connect with us on Facebook Messenger.",
      link: "https://m.me/examplepage",
      linkText: "Message on Messenger",
      linkClass: "text-indigo-400 hover:text-indigo-600",
    },
    {
      key: "twitter",
      title: "Twitter DM",
      description: "Send us a direct message on Twitter.",
      link: "https://twitter.com/messages/compose?recipient_id=123456789",
      linkText: "DM on Twitter",
      linkClass: "text-blue-500 hover:text-blue-700",
    },
    {
      key: "supportPortal",
      title: "Support Portal",
      description: "Submit a ticket through our support portal.",
      link: "https://support.example.com",
      linkText: "Open Support Portal",
      linkClass: "text-orange-400 hover:text-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12">
          <p className="text-7xl font-semibold -mt-10 text-muted-foreground max-w-7xl mb-10 flex items-center justify-end ml-auto">
            Contact {"  "}
            <span className="bg-gradient-to-r ml-2 from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Us
            </span>
          </p>
          {/* <div className="border-b border-spacing-10 border-b-slate-400 mb-10" /> */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto-fit">
            {contactMethods.map((method) => (
              <CardSpotlight
                key={method.key}
                className="bg-gradient-to-br from-[#17403b] to-[#12302a] shadow-xl rounded-2xl p-8 border border-[#244e46] transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col min-h-[260px]"
              >
                <p className="text-2xl font-extrabold text-white mb-2 tracking-tight">
                  {method.title}
                </p>
                <div className="text-base text-gray-200 flex-1">
                  {method.description}
                </div>
                <div className="z-50">
                  <a
                    href={method.link}
                    className="inline-block px-5 py-2 rounded-lg bg-emerald-700 text-white font-semibold shadow hover:bg-emerald-800 transition-colors duration-150"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.linkText}
                  </a>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
