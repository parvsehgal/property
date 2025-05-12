import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

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
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20">
      {/* Property Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-4 right-4 bg-emerald-500 text-white text-sm font-medium px-2 py-1 rounded">
          {annualReturns}
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin className="h-4 w-4 mr-2 text-emerald-500" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
          <div>
            <p className="text-xs text-gray-500">Projected Annual Returns</p>
            <p className="text-sm font-semibold text-emerald-500">
              {annualReturns}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Min. Investment</p>
            <p className="text-sm font-semibold text-white">{minInvestment}</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs text-gray-500">Property Type</p>
            <p className="text-sm font-semibold text-gray-300">
              {propertyType}
            </p>
          </div>
        </div>

        <Link href={`/properties/${id}`} passHref>
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
