// components/PropertyGrid.js
import PropertyCard from "./PropertyCard";

// Hardcoded data to simulate API response
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
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Featured Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
