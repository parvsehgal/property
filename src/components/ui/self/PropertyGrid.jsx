import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";
const mockProperties = [
  {
    id: 1,
    name: "The Zen",
    location: "Whitefield, Bangalore",
    annualReturns: "8.55%",
    minInvestment: "₹1 Lakh",
    propertyType: "2 BHK",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    id: 2,
    name: "The Surya",
    location: "Koramangala, Bangalore",
    annualReturns: "8.66%",
    minInvestment: "₹2 Lakhs",
    propertyType: "3 BHK",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    id: 3,
    name: "Green Valley Villa",
    location: "Electronic City, Bangalore",
    annualReturns: "9.25%",
    minInvestment: "₹5 Lakhs",
    propertyType: "Villa",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    id: 4,
    name: "Urban Heights",
    location: "HSR Layout, Bangalore",
    annualReturns: "7.85%",
    minInvestment: "₹1.5 Lakhs",
    propertyType: "1 BHK",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    id: 5,
    name: "The Oasis",
    location: "Indiranagar, Bangalore",
    annualReturns: "8.95%",
    minInvestment: "₹3 Lakhs",
    propertyType: "2 BHK Premium",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    id: 6,
    name: "Lakeside View",
    location: "Hebbal, Bangalore",
    annualReturns: "9.15%",
    minInvestment: "₹2.5 Lakhs",
    propertyType: "3 BHK Premium",
    imageUrl: "/api/placeholder/600/400",
  },
];

const PropertyGrid = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-12"
      >
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured <span className="text-emerald-500">Properties</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Explore our selection of high-yield investment opportunities
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {mockProperties.map((property) => (
          <motion.div
            key={property.id}
            variants={fadeIn}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PropertyGrid;
