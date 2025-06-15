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

  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Blogs
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white text-lg font-bold mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent">{post.author}</span>
                  <span className="text-gray-400">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
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
