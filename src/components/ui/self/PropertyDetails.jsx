import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Building,
  ChevronRight,
  DollarSign,
  Calendar,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

const PropertyDetails = ({ property }) => {
  const {
    name,
    location,
    annualReturns,
    minInvestment,
    propertyType,
    imageUrl,
    description,
    totalValue,
    occupancyRate,
    expectedAppreciationRate,
    investmentHighlights,
    financialDetails,
  } = property;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full bg-[#0a0e17]"
    >
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Property Header */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Property Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-[500px] w-full rounded-xl overflow-hidden group"
          >
            <Image
              src={imageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-105 duration-300"
            />
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 right-4 bg-emerald-500 text-white text-sm font-medium px-2 py-1 rounded"
            >
              {annualReturns} Returns
            </motion.div>
          </motion.div>

          {/* Property Overview */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              <h1 className="text-3xl font-bold text-white">{name}</h1>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-emerald-500 text-white text-sm font-medium px-2 py-1 rounded"
              >
                {annualReturns} Returns
              </motion.div>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center text-gray-400"
            >
              <MapPin className="h-5 w-5 mr-2 text-emerald-500" />
              <span className="text-md">{location}</span>
            </motion.div>

            {/* Key Details Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: <Building className="h-4 w-4 mr-2 text-emerald-500" />,
                  label: "Property Type",
                  value: propertyType,
                },
                {
                  icon: (
                    <DollarSign className="h-4 w-4 mr-2 text-emerald-500" />
                  ),
                  label: "Min. Investment",
                  value: minInvestment,
                },
                {
                  icon: <FileText className="h-4 w-4 mr-2 text-emerald-500" />,
                  label: "Total Value",
                  value: totalValue,
                },
              ].map((detail, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <p className="text-xs text-gray-500 mb-1">{detail.label}</p>
                  <div className="flex items-center">
                    {detail.icon}
                    <p className="text-sm font-semibold text-white">
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Investment Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white mt-4">
                Invest Now
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Property Description */}
        <motion.div variants={itemVariants} className="mt-10 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-800 pb-2">
            Property Description
          </h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Investment Highlights */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-800 pb-2">
            Investment Highlights
          </h2>
          <motion.ul variants={containerVariants} className="space-y-3">
            {investmentHighlights.map((highlight, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center text-gray-400"
              >
                <ChevronRight className="h-5 w-5 mr-2 text-emerald-500" />
                <span>{highlight}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PropertyDetails;
