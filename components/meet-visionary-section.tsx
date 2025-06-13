import Image from "next/image";

export default function MeetVisionarySection() {
  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Visionary
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="MiniLands Logo"
                width={32}
                height={32}
              />
              <span className="text-accent font-semibold text-lg">
                MiniLands
              </span>
            </div>

            <p className="text-white text-lg leading-relaxed">
              Latifa Bin Haider, a visionary Emirati entrepreneur, is the
              driving force behind MiniLands, a groundbreaking real estate
              crowdfunding platform. Inspired by her grandmother's wisdom to
              invest in tangible assets like gold, land, and property. With her
              innovative approach she has revolutionized the way individuals can
              invest in real estate, making it accessible to a wider audience.
            </p>

            <div className="pt-4">
              <h3 className="text-accent font-semibold text-lg">
                Latifa Bin Haider
              </h3>
              <p className="text-gray-400">
                Founder & Managing Partner of MiniLands
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/human-placeholder.jpg"
                alt="Latifa Bin Haider speaking at an event"
                width={400}
                height={400}
                className="rounded-2xl border border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
