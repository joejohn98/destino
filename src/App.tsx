import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Continents from "./pages/Continents";
import Navbar from "./components/layout/Navbar";
import { Toaster } from "react-hot-toast";
import Countries from "./pages/Countries";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Continents />} />
              <Route path="/continent/:continentId" element={<Countries />} />
              <Route
                path="/country/:continentId/:countryId"
                element={<Destinations />}
              />
              <Route
                path="/destination/:continentId/:countryId/:destinationId"
                element={<DestinationDetail />}
              />
            </Routes>
          </main>
          <Footer/>
        </div>
        <Toaster position="top-right" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
