import PropertyGrid from "@/components/ui/self/PropertyGrid";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Real Estate{" "}
            <span className="text-emerald-500">Investment</span> Opportunities
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover high-yield properties with guaranteed returns and low
            minimum investments
          </p>
        </motion.div>
        <PropertyGrid />
      </div>
    </div>
  );
}
