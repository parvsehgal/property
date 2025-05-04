// components/PropertyCard.js
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const PropertyCard = ({ property }) => {
  const {
    id,
    name,
    location,
    annualReturns,
    minInvestment,
    propertyType,
    imageUrl,
  } = property;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-shadow hover:shadow-lg">
      {/* Property Image */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform hover:scale-105 duration-300"
        />
      </div>

      {/* Property Details */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>

        <div className="flex items-center text-gray-500 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm">{location}</span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
          <div>
            <p className="text-xs text-gray-500">Projected annual returns</p>
            <p className="text-sm font-semibold text-green-600">
              {annualReturns}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Min. investment</p>
            <p className="text-sm font-semibold">{minInvestment}</p>
          </div>

          <div className="col-span-2">
            <p className="text-xs text-gray-500">Property Type</p>
            <p className="text-sm font-semibold">{propertyType}</p>
          </div>
        </div>

        <Link href={`/properties/${id}`} passHref>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
