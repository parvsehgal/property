import { Button } from "@/components/ui/button";

export default function TrustSection() {
  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trust and Credibility
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-transparent border-2 border-white/30 p-8 hover:border-white/50 hover:bg-white/5 transition-all duration-300">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/30 to-transparent transform rotate-45 translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/20 to-transparent transform -rotate-45 -translate-x-12 translate-y-12"></div>
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-accent mb-4">DFSA</h3>
              <p className="text-white text-lg mb-6">
                MiniLands is regulated by the India Financial Services Authority
                (DFSA)
              </p>
              <Button
                variant="outline"
                className="border-white/50 text-white hover:bg-accent hover:text-background hover:border-accent transition-all duration-300"
              >
                Know More
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-transparent border-2 border-white/30 p-8 hover:border-white/50 hover:bg-white/5 transition-all duration-300">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/30 to-transparent transform rotate-45 translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/20 to-transparent transform -rotate-45 -translate-x-12 translate-y-12"></div>
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-accent mb-4">DIFC</h3>
              <p className="text-white text-lg mb-6">
                MiniLands is licensed by the India International Financial
                Center (DIFC)
              </p>
              <Button
                variant="outline"
                className="border-white/50 text-white hover:bg-accent hover:text-background hover:border-accent transition-all duration-300"
              >
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
