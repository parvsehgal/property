"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/60 backdrop-blur-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-4xl font-extrabold text-emerald-800">
              PropList
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-14">
            <Link
              href="/properties"
              className="text-muted-foreground font-bold text-xl transition-colors hover:text-foreground"
            >
              Properties
            </Link>
            {/* <Link href="#sell" className="text-foreground font-semibold text-lg hover:text-teal-600 transition-colors">
              Investments
            </Link> */}
            {/* <Link href="#rent" className="text-foreground font-semibold text-lg hover:text-teal-600 transition-colors">
              Analysis
            </Link> */}
            <Link
              href="/blogs"
              className="text-muted-foreground font-bold text-xl transition-colors hover:text-foreground"
            >
              Blogs
            </Link>
            <Link
              href="/contact-us"
              className="text-muted-foreground font-bold text-xl transition-colors hover:text-foreground"
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-emerald-800 hover:bg-emerald-800 text-foreground flex items-center space-x-2">
              <span>Get Started</span>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                href="/properties"
                className="text-muted-foreground font-semibold text-lg transition-colors"
              >
                Properties
              </Link>
              {/* <Link href="#sell" className="text-foreground hover:text-teal-600 font-medium">
                Investments
              </Link>
              <Link href="#agents" className="text-foreground hover:text-teal-600 font-medium">
                Analysis
              </Link> */}
              <Link
                href="/blogs"
                className="text-muted-foreground font-semibold text-lg transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/contact-us"
                className="text-muted-foreground font-semibold text-lg transition-colors"
              >
                Contact Us
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
