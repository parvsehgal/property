import Image from "next/image";

export default function BlogsSection() {
  const blogPosts = [
    {
      title: "The Future of Real Estate Crowdfunding in the UAE",
      excerpt:
        "Exploring how technology and innovation are reshaping property investment opportunities across the Emirates.",
      image: "/blog-1.jpg",
      author: "Latifa Bin Haider",
      date: "June 12, 2025",
    },
    {
      title: "Smart Investment Strategies for First-Time Property Investors",
      excerpt:
        "A comprehensive guide to making your first real estate investment through crowdfunding platforms.",
      image: "/blog-2.jpg",
      author: "Dr. Sarah Al-Mansouri",
      date: "June 10, 2025",
    },
    {
      title: "Dubai's Property Market: Opportunities in 2025",
      excerpt:
        "Analyzing current trends and emerging opportunities in Dubai's real estate market.",
      image: "/blog-3.jpg",
      author: "Ahmed Hassan",
      date: "June 8, 2025",
    },
  ];

  const [featuredPost, ...sidePosts] = blogPosts;

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Blogs
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Side Posts - Small blogs on the left */}
          <div className="space-y-4 lg:order-1">
            {sidePosts.map((post, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex sm:block lg:flex">
                  <div className="relative flex-shrink-0 w-32 sm:w-full lg:w-32">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <h4 className="text-white text-sm font-semibold mb-1 line-clamp-2 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-gray-400 text-xs line-clamp-2 mb-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-accent truncate mr-2">
                        {post.author}
                      </span>
                      <span className="text-gray-500 flex-shrink-0">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Post - Large blog on the right */}
          <div className="lg:col-span-2 lg:order-2">
            <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group cursor-pointer">
              <div className="relative h-80 lg:h-96">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-accent text-black px-3 py-1 rounded-full text-xs font-medium mb-3">
                    Featured Article
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-accent font-medium">
                      {featuredPost.author}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {featuredPost.date}
                    </span>
                  </div>
                  <button className="text-accent hover:text-accent/80 text-sm font-medium transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-accent hover:bg-accent/90 text-black px-8 py-3 rounded-full font-medium transition-colors duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
