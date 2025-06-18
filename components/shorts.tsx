export default function YouTubeShortsSection() {
  const shorts = [
    {
      id: "dQw4w9WgXcQ",
      title: "Quick Property Investment Tips",
      views: "1.2M",
      duration: "0:45",
    },
    {
      id: "oHg5SJYRHA0",
      title: "Dubai Real Estate in 60 Seconds",
      views: "850K",
      duration: "1:00",
    },
    {
      id: "9bZkp7q19f0",
      title: "Fractional Ownership Explained",
      views: "2.1M",
      duration: "0:38",
    },
    {
      id: "JGwWNGJdvx8",
      title: "ROI Calculator Quick Demo",
      views: "650K",
      duration: "0:52",
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Market Trends This Week",
      views: "1.8M",
      duration: "0:47",
    },
    {
      id: "fC7oUOUEEi4",
      title: "Investment Mistakes to Avoid",
      views: "970K",
      duration: "0:55",
    },
  ];

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-accent">#</span>Shorts
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Horizontal scrollable container */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {shorts.map((short, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative">
                  {/* Vertical aspect ratio for shorts */}
                  <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${short.id}`}
                      title={short.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-0 h-0 border-l-4 border-l-black border-y-2 border-y-transparent ml-1"></div>
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                      {short.duration}
                    </div>

                    {/* Shorts icon */}
                    <div className="absolute top-3 left-3 bg-black/80 text-white px-2 py-1 rounded-full text-xs font-bold">
                      #Shorts
                    </div>
                  </div>
                </div>

                {/* Video info */}
                <div className="p-4">
                  <h3 className="text-white text-sm font-semibold mb-2 line-clamp-2 leading-tight">
                    {short.title}
                  </h3>
                  <p className="text-gray-400 text-xs">{short.views} views</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-accent hover:bg-accent/90 text-black px-8 py-3 rounded-full font-medium transition-colors duration-300">
            View All Shorts
          </button>
        </div>
      </div>
    </section>
  );
}
