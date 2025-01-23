import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Star } from 'lucide-react';
import { featuredDestinations } from '../data/featuredDestinations';
import FeatureCard from '../components/common/FeatureCard';
import FeaturedDestinationCard from '../components/features/FeaturedDestinationCard';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen mt-5 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Explore the World with <span className="text-indigo-600 dark:text-indigo-400">Destino</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover amazing destinations across all continents. Plan your next adventure with Destino.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/continents"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Start Exploring
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
            Why Choose Destino?
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-indigo-600" />}
              title="Global Coverage"
              description="Explore destinations across all continents and countries."
            />
            <FeatureCard
              icon={<MapPin className="h-8 w-8 text-indigo-600" />}
              title="Detailed Information"
              description="Get comprehensive details about each destination, including opening hours and ticket prices."
            />
            <FeatureCard
              icon={<Star className="h-8 w-8 text-indigo-600" />}
              title="User Ratings"
              description="Make informed decisions based on ratings and reviews from fellow travelers."
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDestinations.map((destination) => (
              <FeaturedDestinationCard
                key={destination.id}
                name={destination.name}
                image={destination.image}
                country={destination.country}
                rating={destination.rating}
                description={destination.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;