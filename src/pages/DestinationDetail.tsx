import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../data";
import BackButton from "../components/common/BackButton";
import { Clock, Ticket, Globe, Star } from "lucide-react";
import toast from "react-hot-toast";

const DestinationDetail: React.FC = () => {
  const { continentId, countryId, destinationId } = useParams();
  const navigate = useNavigate()

  const continent = data.continents.find((c) => c.id === Number(continentId));
  const country = continent?.countries.find((c) => c.id === Number(countryId));
  const destination = country?.destinations.find(
    (d) => d.id === Number(destinationId)
  );

  if (!continent || !country || !destination) {
      return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Destination not found
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleWebsiteClick = () => {
    setTimeout(() => {
      window.open(destination.website, "_blank");
    }, 800);
    toast.success("Opening website in a new tab");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <BackButton />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {destination.name}
              </h1>
              <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">
                {destination.location}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                {destination.ratings}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                ({destination.reviews} reviews)
              </span>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              {destination.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  {destination.openingHours}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Ticket className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  {destination.ticketPrice}
                </span>
              </div>
            </div>

            <button
              onClick={handleWebsiteClick}
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <Globe className="w-5 h-5" />
              <span className="text-lg font-medium">Visit Website</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
