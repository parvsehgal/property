import { motion } from "framer-motion";
import { Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar({ isLoaded = true }) {
  return (
    <header className="bg-slate-900 py-6">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Building className="h-8 w-8 text-emerald-500" />
            <span className="text-2xl font-bold text-white">
              Wealth<span className="text-emerald-500">Property</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex space-x-8"
          >
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Properties
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Investments
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Analysis
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              Get Started
            </Button>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}
