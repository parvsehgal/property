import { Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Building className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-bold text-white">
                Wealth<span className="text-emerald-500">Property</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium property investment opportunities for discerning investors
              seeking above-market returns.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "linkedin", "instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-emerald-500"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-emerald-500 transition-colors">
                      #
                    </div>
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Investments</h3>
            <ul className="space-y-4">
              {[
                "Featured Properties",
                "Commercial",
                "Residential",
                "International",
                "How It Works",
                "FAQs",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                "About Us",
                "Team",
                "Careers",
                "Press",
                "Partners",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive investment insights and opportunities.
            </p>
            <div className="flex">
              <Input
                placeholder="Your email"
                className="bg-slate-800 border-gray-700 text-white rounded-r-none"
              />
              <Button className="bg-emerald-500 hover:bg-emerald-600 rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WealthProperty. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-500 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-500 text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-500 text-sm"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
