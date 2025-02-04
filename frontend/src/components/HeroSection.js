import React from "react"; 
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext"; // Import the useTheme hook

function HeroSection() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <>
      <Navbar />
      <section
        className={`text-center flex flex-col justify-center px-4 py-20 min-h-screen relative ${theme === "dark" ? "bg-gradient-to-r from-gray-700 to-gray-900" : "bg-teal-50 "}`}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className={`text-4xl md:text-6xl font-bold ${theme === "dark" ? "text-yellow-500" : "text-gray-800"}`}>
            TRAPPISH MUSIC
          </h1>
          <p className={`text-xl md:text-2xl mt-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            Your journey becomes a spark with us. <br />Trappish, elevated.
          </p>
          <div className="mt-8">
            <Link to="/booking" aria-label="Book Your Session">
              <button className={`transition transform shadow-lg shadow-slate-600 hover:scale-105 py-2 px-6 rounded-lg font-semibold ${theme === "dark" ? "bg-yellow-500 text-gray-800 hover:bg-yellow-600" : "bg-yellow-600 text-white hover:bg-yellow-700"}`}>
                Book Your Session
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HeroSection;