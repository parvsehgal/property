import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Youtube, TwitterIcon as TikTok } from "lucide-react"

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Baytukum Logo" width={32} height={32} />
              <span className="text-accent font-semibold text-xl">Baytukum</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for real estate investments in Dubai. Making property investment accessible to
              everyone.
=======
    <footer className="bg-[#111111] text-foreground">
      <div className="container mx-auto px-2 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent">
                PropList
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted partner in finding premium properties and investment opportunities. We connect buyers,
              sellers, and investors with the perfect real estate solutions.
>>>>>>> bf99cb78d527175c407e870ed4abab1627a3a5a6
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <TikTok className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/golden-visa" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Golden Visa
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Investment */}
          <div>
            <h3 className="text-white font-semibold mb-4">Investment</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact & Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Download App Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Download Our App</h4>
              <p className="text-gray-400 text-sm">Start investing in Dubai real estate today</p>
            </div>
            <div className="flex gap-4">
<<<<<<< HEAD
              <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/app-store.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/google-play.svg"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </Link>
=======
              <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/properties" className="text-muted-foreground hover:text-teal-400 transition-colors">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link href="#buy" className="text-muted-foreground hover:text-teal-400 transition-colors">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link href="#sell" className="text-muted-foreground hover:text-teal-400 transition-colors">
                  Sell Property
                </Link>
              </li>
              <li>
                <Link href="#rent" className="text-muted-foreground hover:text-teal-400 transition-colors">
                  Rent Property
                </Link>
              </li>
              <li>
                <Link href="#agents" className="text-muted-foreground hover:text-teal-400 transition-colors">
                  Find Agents
                </Link>
              </li>
              <li>
                <Link href="#investment" className="text-muted-foreground hover:text-teal-400 transition-colors">
                  Investment Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                  Property Valuation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                  Investment Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                  Legal Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                  Financing Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>123 Business District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className="text-muted-foreground">info@proplist.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-foreground">Business Hours</h4>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
>>>>>>> bf99cb78d527175c407e870ed4abab1627a3a5a6
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Baytukum. All rights reserved. | Regulated by DFSA | Licensed by DIFC
          </p>
          <div className="flex items-center gap-6">
            <Link href="/cookies" className="text-gray-400 hover:text-accent text-sm transition-colors">
              Cookie Policy
            </Link>
            <Link href="/disclaimer" className="text-gray-400 hover:text-accent text-sm transition-colors">
              Disclaimer
            </Link>
=======
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} PropList. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
>>>>>>> bf99cb78d527175c407e870ed4abab1627a3a5a6
          </div>
        </div>
      </div>
    </footer>
  )
}
