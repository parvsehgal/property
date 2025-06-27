import { Button } from "@/components/ui/button";
import { Youtube, Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🤝Lets Build Connections
          </h2>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <Youtube size={32} />
            </a>
            <a
              href="#"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <Twitter size={32} />
            </a>
            <a
              href="#"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <Instagram size={32} />
            </a>
            <a
              href="#"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="#"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <Facebook size={32} />
            </a>
          </div>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
