export default function MediaCoverageSection() {
  const mediaLogos = [
    { name: "Entrepreneur", logo: "/placeholder.svg?height=60&width=200" },
    { name: "Zawya", logo: "/placeholder.svg?height=60&width=200" },
    { name: "Al Bayan", logo: "/placeholder.svg?height=60&width=200" },
  ]

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Media Coverage */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-8">Media Coverage</h2>
            <div className="w-24 h-1 bg-accent mx-auto lg:mx-0 mb-8"></div>

            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              {mediaLogos.map((media, index) => (
                <div
                  key={index}
                  className="bg-transparent border-2 border-white/30 rounded-xl p-6 flex items-center justify-between hover:border-white/50 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-white">{media.name}</div>
                  <div className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Accolades */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-8">Awards & accolades</h2>
            <div className="w-24 h-1 bg-accent mx-auto lg:mx-0 mb-8"></div>

            <div className="space-y-6 max-w-md mx-auto lg:mx-0">
              {/* Future 100 Award */}
              <div className="bg-transparent border-2 border-white/30 rounded-xl p-6 hover:border-white/50 hover:bg-white/5 transition-all duration-300">
                <p className="text-white text-lg mb-6 text-center lg:text-left">
                  Named in the list of the top 100 future enterprises in the UAE (2023)
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <div className="text-accent text-center">
                    <div className="text-xl font-bold">Future</div>
                    <div className="text-5xl font-bold">100</div>
                    <div className="text-xs">من المستقبل</div>
                  </div>
                </div>
              </div>

              {/* Real Estate Leader Award */}
              <div className="bg-transparent border-2 border-white/30 rounded-xl p-6 hover:border-white/50 hover:bg-white/5 transition-all duration-300">
                <div className="text-center lg:text-left">
                  <h3 className="text-accent font-semibold text-lg mb-2">LATIFA BIN HAIDER</h3>
                  <p className="text-gray-400 text-sm mb-2">THE WINNER OF</p>
                  <p className="text-white font-semibold mb-6">THE REAL ESTATE LEADER AWARD</p>

                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <div className="text-accent">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🏆</span>
                        <div className="text-left">
                          <div className="text-sm font-semibold">SME LEADERS AWARDS 2023</div>
                          <div className="text-xs text-white">Entrepreneur</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
