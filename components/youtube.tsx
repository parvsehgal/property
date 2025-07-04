export default function YouTubeVideosSection() {
  const videos = [
    {
      id: "1j9RAgm_S6Y",
      title: "Real Estate Investment Basics: Getting Started with MiniLands",
      description:
        "Learn the fundamentals of real estate crowdfunding and how to make your first investment.",
      duration: "8:45",
    },
    {
      id: "2sWB-NroqJY",
      title: "Market Analysis: Dubai Property Trends 2025",
      description:
        "Expert insights into Dubai's real estate market and emerging investment opportunities.",
      duration: "12:30",
    },
    {
      id: "6cCkimumA6Y",
      title: "Building Your Investment Portfolio with Fractional Ownership",
      description:
        "Strategies for diversifying your portfolio through fractional real estate investments.",
      duration: "15:20",
    },
    {
      id: "tQwrJQ0fA88",
      title: "Building Your Investment Portfolio with Fractional Ownership",
      description:
        "Strategies for diversifying your portfolio through fractional real estate investments.",
      duration: "15:20",
    },
    {
      id: "SJ2A0QUY7RI",
      title: "Building Your Investment Portfolio with Fractional Ownership",
      description:
        "Strategies for diversifying your portfolio through fractional real estate investments.",
      duration: "15:20",
    },
    {
      id: "bfY30JVVkUs",
      title: "Building Your Investment Portfolio with Fractional Ownership",
      description:
        "Strategies for diversifying your portfolio through fractional real estate investments.",
      duration: "15:20",
    },
    {
      id: "ag8t4hOd-2U",
      title: "Building Your Investment Portfolio with Fractional Ownership",
      description:
        "Strategies for diversifying your portfolio through fractional real estate investments.",
      duration: "15:20",
    },
  ];

  const [featuredVideo, ...sideVideos] = videos;

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Videos
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Video - Large on the left */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                    title={featuredVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {featuredVideo.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-3">
                  {featuredVideo.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {featuredVideo.description}
                </p>
              </div>
            </div>
          </div>

          {/* Side Videos - Smaller on the right */}
          <div className="space-y-4">
            {sideVideos.map((video, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="flex sm:block lg:flex">
                  <div className="relative flex-shrink-0 w-32 sm:w-full lg:w-32">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-1 py-0.5 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <h4 className="text-white text-sm font-semibold mb-1 line-clamp-2 leading-tight">
                      {video.title}
                    </h4>
                    <p className="text-gray-400 text-xs line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-accent hover:bg-accent/90 text-black px-8 py-3 rounded-full font-medium transition-colors duration-300">
            View All Videos
          </button>
        </div>
      </div>
    </section>
  );
}
