import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../data";
import BackButton from "../components/BackButton";
import { MapPin } from "lucide-react";

const CountriesPage: React.FC = () => {
  const { continentId } = useParams();
  const navigate = useNavigate();

  const continent = data.continents.find((c) => c.id === Number(continentId));

  if (!continent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Continent not found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Return to Continents
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
          Countries in {continent.name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {continent.countries.map((country) => (
            <div
              key={country.id}
              onClick={() => navigate(`/country/${continentId}/${country.id}`)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="relative h-64">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
                {/* Mobile view: Always visible overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 md:hidden">
                  <h2 className="text-2xl font-bold text-white text-center">
                    {country.name}
                  </h2>
                  <div className="flex items-center justify-center text-white text-base mt-1">
                    <MapPin className="h-5 w-5 mr-1" />
                    <span>{country.destinations.length} Destinations</span>
                  </div>
                </div>
                {/* Desktop view: Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 hidden md:flex">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {country.name}
                    </h2>
                    <div className="flex items-center justify-center text-white text-lg">
                      <MapPin className="h-6 w-6 mr-2" />
                      <span>{country.destinations.length} Destinations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesPage;
