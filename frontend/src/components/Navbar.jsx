import React, { useState, useEffect } from "react";
import Logo from "../assets/image.png";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.js"; // Import your useTheme hook

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use theme from context

  // Apply theme to the body
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav
      className={` text-center p-5 shadow-xl ${theme === "dark" ? "bg-gradient-to-r from-gray-700 to-gray-900" : "bg-slate-200 "} sticky top-0 z-10`}
    >
      <div className="container mx-auto  flex justify-between items-center px-4 py-4">
        {/* Logo */}
        {/* <img src={Logo} className="h-10" alt="Trappish Music" /> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold ">
          <li>
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-200 hover:text-yellow-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/releases"
              className="text-gray-700 dark:text-gray-200 hover:text-yellow-500"
            >
              Releases
            </Link>
          </li>
          <li>
            <Link
              to="/MarketPlace"
              className="text-gray-700 dark:text-gray-200 hover:text-yellow-500"
            >
              MarketPlace
            </Link>
          </li>
          <li>
            <Link
              to="/booking"
              className="text-gray-700 dark:text-gray-200 hover:text-yellow-500"
            >
              Book
            </Link>
          </li>
          <li>
            <Link
              to="/AboutUs"
              className="text-gray-700 dark:text-gray-200 hover:text-yellow-500"
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Theme Toggle Button */}

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-gray-700  dark:text-gray-200 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <button
          className="p-2 rounded-full bg-yellow-500 dark:bg-gray-800 text-white dark:text-yellow-500 focus:outline-none"
          onClick={toggleTheme} // Use the toggleTheme from context
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden  ${theme === "dark" ? "bg-gradient-to-r from-gray-700 to-slate-900" : "bg-gradient-to-r bg-slate-200 "} bg-gray-100 dark:bg-gray-800 px-4 py-2`}>
          <ul className="space-y-4 text-lg font-semibold  shadow-inner" >
            <li>
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-200 hover:text-yellow-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/releases"
                className="text-gray-700 dark:text-gray-200 hover:text-yellow-500"
              >
                Releases
              </Link>
            </li>
            <li>
              <Link
                to="/MarketPlace"
                className="text-gray-700 dark:text-gray-200 hover:text-yellow-500"
              >
                MarketPlace
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className="text-gray-700 dark:text-gray-200 hover:text-yellow-500"
              >
                Book
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className="text-gray-700 dark:text-gray-200 hover:text-yellow-500"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
export default Navbar