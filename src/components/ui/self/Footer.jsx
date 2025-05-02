// components/Footer.js
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-6 w-6 bg-gray-100 border border-gray-200 flex items-center justify-center rounded">
                <span className="text-gray-700 font-semibold text-sm">L</span>
              </div>
              <span className="text-gray-800 font-medium">Business Name</span>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Providing exceptional business solutions since 2010. Our mission
              is to help companies reach their full potential.
            </p>
            <div className="mt-6 flex space-x-4">
              {/* Social Media Icons */}
              {["twitter", "linkedin", "facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-6 w-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">
                      {social[0].toUpperCase()}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {[
            {
              title: "Solutions",
              links: ["Analytics", "Commerce", "Insights", "Marketing"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Contact", "Blog"],
            },
            {
              title: "Resources",
              links: ["Documentation", "Guides", "Support", "API Status"],
            },
          ].map((column, idx) => (
            <div key={idx} className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-500 text-sm">
                Get the latest news and updates delivered to your inbox.
              </p>
            </div>
            <div className="flex">
              <div className="min-w-0 flex-1">
                <input
                  type="email"
                  className="block w-full rounded-l-md border border-r-0 border-gray-300 bg-white py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Business Name, Inc. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
