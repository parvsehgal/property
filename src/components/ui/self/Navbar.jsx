// components/Navbar.js
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-gray-100 border border-gray-200 flex items-center justify-center rounded">
              <span className="text-gray-700 font-semibold">L</span>
            </div>
            <span className="text-gray-800 font-medium">Business Name</span>
          </div>

          {/* Navigation buttons in the middle */}
          <div className="flex items-center">
            {["Home", "Properties", "Learn", "Contact Us"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium"
              >
                <Link href={`/${item}`}>{item}</Link>
              </Button>
            ))}
          </div>

          {/* Login button on the right */}
          <div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
