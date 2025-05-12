// pages/index.js
import PropertyGrid from "@/components/ui/self/PropertyGrid";

export default function Home() {
  return (
    <div>
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Premium Real Estate Investment Opportunities
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover high-yield properties with guaranteed returns and low minimum
          investments
        </p>
      </div>

      <PropertyGrid />
    </div>
  );
}
