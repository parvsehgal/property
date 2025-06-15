export default function YouTubeVideosSection() {
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Real Estate Investment Basics: Getting Started with MiniLands",
      description:
        "Learn the fundamentals of real estate crowdfunding and how to make your first investment.",
      duration: "8:45",
    },
    {
      id: "oHg5SJYRHA0",
      title: "Market Analysis: Dubai Property Trends 2025",
      description:
        "Expert insights into Dubai's real estate market and emerging investment opportunities.",
      duration: "12:30",
    },
    {
      id: "9bZkp7q19f0",
      title: "Building Your Investment Portfolio with Fractional Ownership",
      description:
        "Strategies for diversifying your portfolio through fractional real estate investments.",
      duration: "15:20",
    },
  ];

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Videos
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="relative">
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
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-lg font-bold mb-3">
                  {video.title}
                </h3>
                <p className="text-gray-300 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
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
