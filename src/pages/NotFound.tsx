import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Destination Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          Oops! It seems like this destination doesn't exist on our map. Let's get you back on track!
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Return to Homepage
        </Link>
        <div className="mt-12">
          <p className="text-gray-500 dark:text-gray-400">
            Looking for popular destinations? Try our{' '}
            <Link to="/continents" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
              Continents page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
