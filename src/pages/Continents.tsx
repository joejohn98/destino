import React from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../data";
import { MapPin } from "lucide-react";

const Continents: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
          Explore Continents
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.continents.map((continent) => (
            <div
              key={continent.id}
              onClick={() => navigate(`/continent/${continent.id}`)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="relative h-64">
                <img
                  src={continent.image}
                  alt={continent.name}
                  className="w-full h-full object-cover"
                />
                {/* Mobile view: Always visible overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 md:hidden">
                  <h2 className="text-2xl font-bold text-white text-center">
                    {continent.name}
                  </h2>
                  <div className="flex items-center justify-center text-white text-base mt-1">
                    <MapPin className="h-5 w-5 mr-1" />
                    <span>{continent.countries.length} Countries</span>
                  </div>
                </div>
                {/* Desktop view: Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 hidden md:flex">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {continent.name}
                    </h2>
                    <div className="flex items-center justify-center text-white text-lg">
                      <MapPin className="h-6 w-6 mr-2" />
                      <span>{continent.countries.length} Countries</span>
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

export default Continents;
