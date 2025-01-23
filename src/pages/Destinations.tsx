import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../data";
import BackButton from "../components/common/BackButton";

import { Star } from "lucide-react";

const Destinations: React.FC = () => {
  const { continentId, countryId } = useParams();
  const navigate = useNavigate();

  const continent = data.continents.find((c) => c.id === Number(continentId));
  const country = continent?.countries.find((c) => c.id === Number(countryId));

  if (!continent || !country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Country not found
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <BackButton />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
          Destinations in {country.name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {country.destinations.map((destination) => (
            <div
              key={destination.id}
              onClick={() =>
                navigate(
                  `/destination/${continentId}/${countryId}/${destination.id}`
                )
              }
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="relative h-56">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {destination.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base md:text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">
                    {destination.ratings}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    ({destination.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
