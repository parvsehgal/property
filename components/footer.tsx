import Link from "next/link"
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-2 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-4xl font-bold bg-teal-600 bg-clip-text text-transparent">
                PropList
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in finding premium properties and investment opportunities. We connect buyers,
              sellers, and investors with the perfect real estate solutions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#properties" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link href="#buy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link href="#sell" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Sell Property
                </Link>
              </li>
              <li>
                <Link href="#rent" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Rent Property
                </Link>
              </li>
              <li>
                <Link href="#agents" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Find Agents
                </Link>
              </li>
              <li>
                <Link href="#investment" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Investment Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Property Valuation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Investment Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Legal Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Financing Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>123 Business District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-400">info@proplist.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Business Hours</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} PropList. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
