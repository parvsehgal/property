export default function MediaCoverageSection() {
  const mediaLogos = [
    { name: "Entrepreneur", logo: "/placeholder.svg?height=60&width=200" },
    { name: "Zawya", logo: "/placeholder.svg?height=60&width=200" },
    { name: "Al Bayan", logo: "/placeholder.svg?height=60&width=200" },
  ]

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Media Coverage */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center lg:text-left">Media Coverage</h2>

            <div className="space-y-4">
              {mediaLogos.map((media, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 flex items-center justify-between border border-gray-200"
                >
                  <div className="text-2xl font-bold text-gray-900">{media.name}</div>
                  <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Accolades */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center lg:text-left">Awards & accolades</h2>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="text-gray-900 text-lg mb-6">
                  Named in the list of the top 100 future enterprises in the UAE (2023)
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="text-accent">
                    <div className="text-2xl font-bold">Future</div>
                    <div className="text-6xl font-bold">100</div>
                    <div className="text-sm">من المستقبل</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-accent font-semibold text-lg mb-4">LATIFA BIN HAIDER</h3>
                <p className="text-gray-600 text-sm mb-4">THE WINNER OF</p>
                <p className="text-gray-900 font-semibold mb-4">THE REAL ESTATE LEADER AWARD</p>

                <div className="flex items-center gap-4">
                  <div className="text-accent">
                    <div className="flex items-center gap-2">
                      <span>🏆</span>
                      <span className="text-sm">SME LEADERS AWARDS 2023</span>
                    </div>
                  </div>
                  <div className="text-gray-900">
                    <span className="text-sm">Entrepreneur</span>
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
