"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Building2, Heart, User } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              PropList
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#properties" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Properties
            </Link>
            <Link href="#buy" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Buy
            </Link>
            <Link href="#sell" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Sell
            </Link>
            <Link href="#rent" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Rent
            </Link>
            <Link href="#agents" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Agents
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-emerald-600">
              <Heart className="h-4 w-4 mr-2" />
              Saved
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-emerald-600">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
              List Property
            </Button>
          </div>

          <button className="md:hidden p-2 text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link href="#properties" className="text-gray-700 hover:text-emerald-600 font-medium">
                Properties
              </Link>
              <Link href="#buy" className="text-gray-700 hover:text-emerald-600 font-medium">
                Buy
              </Link>
              <Link href="#sell" className="text-gray-700 hover:text-emerald-600 font-medium">
                Sell
              </Link>
              <Link href="#rent" className="text-gray-700 hover:text-emerald-600 font-medium">
                Rent
              </Link>
              <Link href="#agents" className="text-gray-700 hover:text-emerald-600 font-medium">
                Agents
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-emerald-600 font-medium">
                About
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Button variant="ghost" className="justify-start text-gray-700">
                  <Heart className="h-4 w-4 mr-2" />
                  Saved Properties
                </Button>
                <Button variant="ghost" className="justify-start text-gray-700">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">List Property</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
