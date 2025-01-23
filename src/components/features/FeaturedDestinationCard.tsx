import { Star } from "lucide-react";

interface FeaturedDestinationCardProps {
  name: string;
  image: string;
  country: string;
  rating: number;
  description: string;
}

const FeaturedDestinationCard: React.FC<FeaturedDestinationCardProps> = ({
  name,
  image,
  country,
  rating,
  description,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{country}</p>
        <div className="mt-2 flex items-center">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
            {rating}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturedDestinationCard;
