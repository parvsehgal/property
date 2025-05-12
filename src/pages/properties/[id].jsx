import PropertyDetails from "@/components/ui/self/PropertyDetails";

export async function getServerSideProps(context) {
  const { id } = context.params;

  // Fetch property details based on the ID
  const property = {
    id: id,
    name: "Luxury Downtown Apartment",
    location: "New York, NY",
    annualReturns: "8.5%",
    minInvestment: "$50,000",
    propertyType: "Residential Apartment",
    imageUrl: "/path/to/property/image.jpg",
    description:
      "A luxurious downtown apartment in the heart of New York City...",
    totalValue: "$2,500,000",
    occupancyRate: "95%",
    expectedAppreciationRate: "5.2%",
    investmentHighlights: [
      "Prime location in downtown Manhattan",
      "Modern amenities and renovations",
      "Stable rental market",
    ],
    financialDetails: {
      netOperatingIncome: "$180,000",
      capitalExpenditure: "$50,000",
      monthlyRent: "$15,000",
    },
  };

  return {
    props: {
      property,
    },
  };
}

export default function PropertyDetailsPage({ property }) {
  return <PropertyDetails property={property} />;
}
