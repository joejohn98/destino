import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Homepage from "./pages/Home";

// Lazy load page components for better initial load performance
const ContinentsPage = lazy(() => import("./pages/Continents"));
const CountriesPage = lazy(() => import("./pages/Countries"));
const DestinationsPage = lazy(() => import("./pages/Destinations"));
const DestinationDetailPage = lazy(() => import("./pages/DestinationDetail"));

// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-800">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/continents" element={<ContinentsPage />} />
                <Route
                  path="/continent/:continentId"
                  element={<CountriesPage />}
                />
                <Route
                  path="/country/:continentId/:countryId"
                  element={<DestinationsPage />}
                />
                <Route
                  path="/destination/:continentId/:countryId/:destinationId"
                  element={<DestinationDetailPage />}
                />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
