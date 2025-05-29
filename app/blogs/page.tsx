"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight, BookOpen } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  image: string
  category: string
}

const dummyBlogs: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Real Estate Investment Tips for 2025",
    excerpt: "Discover the best strategies to maximize your returns in the real estate market this year. From location analysis to market timing, learn what successful investors do differently.",
    author: "John Doe",
    date: "May 15, 2025",
    readTime: "5 min read",
    image: "/placeholder.jpeg",
    category: "Investment"
  },
  {
    id: 2,
    title: "How to Choose the Perfect Property for Your Family",
    excerpt: "A comprehensive guide to finding a home that suits your lifestyle and budget. Learn about key factors like location, amenities, and future growth potential.",
    author: "Jane Smith",
    date: "April 28, 2025",
    readTime: "7 min read",
    image: "/placeholder.jpeg",
    category: "Buying Guide"
  },
  {
    id: 3,
    title: "Understanding RERA and Its Benefits for Buyers",
    excerpt: "Learn how RERA protects your interests and ensures transparency in property transactions. Understand your rights as a buyer and how to leverage RERA provisions.",
    author: "Alice Johnson",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "/placeholder.jpeg",
    category: "Legal"
  },
  {
    id: 4,
    title: "The Rise of Smart Homes: What You Need to Know",
    excerpt: "Explore the latest trends in smart home technology and how it can enhance your living experience. From IoT devices to energy efficiency, discover the future of housing.",
    author: "Bob Lee",
    date: "February 20, 2025",
    readTime: "8 min read",
    image: "/placeholder.jpeg",
    category: "Technology"
  },
  {
    id: 5,
    title: "Tips for First-Time Home Buyers in India",
    excerpt: "Essential advice to help you navigate the home buying process with confidence. From documentation to financing, get expert insights for your first property purchase.",
    author: "Emily Davis",
    date: "January 5, 2025",
    readTime: "10 min read",
    image: "/placeholder.jpeg",
    category: "Buying Guide"
  },
  {
    id: 6,
    title: "Market Analysis: Indore Real Estate Trends 2025",
    excerpt: "Deep dive into Indore's real estate market with comprehensive analysis of price trends, upcoming projects, and investment opportunities in key locations.",
    author: "Rajesh Kumar",
    date: "December 15, 2024",
    readTime: "12 min read",
    image: "/placeholder.jpeg",
    category: "Market Analysis"
  },
  {
    id: 7,
    title: "Property Investment vs Stock Market: Which is Better?",
    excerpt: "Compare the pros and cons of real estate investment versus stock market investment. Learn which option suits your financial goals and risk tolerance better.",
    author: "Michael Brown",
    date: "November 30, 2024",
    readTime: "9 min read",
    image: "/placeholder.jpeg",
    category: "Investment"
  },
  {
    id: 8,
    title: "Home Loan Interest Rates: Current Trends and Predictions",
    excerpt: "Stay updated with the latest home loan interest rates and understand how they affect your property purchase decisions. Expert predictions for the coming months.",
    author: "Sarah Wilson",
    date: "November 15, 2024",
    readTime: "6 min read",
    image: "/placeholder.jpeg",
    category: "Finance"
  },
  {
    id: 9,
    title: "Sustainable Housing: Green Building Trends in India",
    excerpt: "Explore the growing trend of sustainable and eco-friendly housing in India. Learn about green building certifications and their benefits for homeowners.",
    author: "David Chen",
    date: "October 28, 2024",
    readTime: "8 min read",
    image: "/placeholder.jpeg",
    category: "Sustainability"
  }
]

export default function BlogsPage() {
  const [blogs] = useState(dummyBlogs)
  const [visibleCount, setVisibleCount] = useState(4)

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, blogs.length))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Real Estate Insights
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, tips, and insights from the real estate world. 
              Expert advice to help you make informed property decisions.
            </p>
          </div>

          <div className="space-y-8">
            {blogs.slice(0, visibleCount).map((blog) => (
              <div key={blog.id} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-200">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-80 h-48 md:h-auto flex-shrink-0">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {blog.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                      {blog.title}
                    </h2>
                    
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-6 text-slate-500 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="text-sm font-medium">{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{blog.readTime}</span>
                      </div>
                    </div>

                    <Button className="bg-teal-600 hover:bg-teal-700 text-white group">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleCount < blogs.length && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={loadMore}
                className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-3"
              >
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
