import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaApple, FaYoutube, FaSpotify, FaChevronRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // Import the useTheme hook

function FooterLink({ to, label }) {
  const { theme } = useTheme(); // Access the current theme
  return (
    <div className="flex items-center">
      <FaChevronRight className={theme === "dark" ? "text-yellow-400" : "text-blue-600"} />
      <Link to={to} className={`hover:${theme === "dark" ? "text-yellow-400" : "text-blue-600"} ml-2`}>
        {label}
      </Link>
    </div>
  );
}

function Footer() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <footer className={`text-center shadow-2xl pt-6 shadow-gray-900 relative ${theme === "dark" ? "bg-gradient-to-r from-gray-700 to-gray-900" : "bg-teal-50 "}`}>
      <div >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Company Info */}
            <div className="mb-5">
              <h4 className={`pb-4 text-2xl font-semibold ${theme === "dark" ? "text-yellow-400" : "text-blue-600"}`}>Company</h4>
              <p className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                A123 Lost street <br />
                Kigali PB232433 <br />
                Rwanda <br />
                <br />
                <strong>Phone:</strong> +250 794377337 <br />
                <strong>Email:</strong> leonamahoro1@gmail.com <br />
              </p>
            </div>

            {/* Useful Links */}
            <div className="mb-5">
              <h4 className={`pb-4 text-2xl font-semibold ${theme === "dark" ? "text-yellow-400" : "text-blue-600"}`}>Useful Links</h4>
              <ul className={`text-xl space-y-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                <FooterLink to="/" label="Home" />
                <FooterLink to="/about" label="About us" />
                <FooterLink to="/contact" label="Contact" />
                <FooterLink to="/login" label="Login" />
                <FooterLink to="/signup" label="Sign up" />
              </ul>
            </div>

            {/* Our Services */}
            <div className="mb-5">
              <h4 className={`pb-4 text-2xl font-semibold ${theme === "dark" ? "text-yellow-400" : "text-blue-600"}`}>Our Services</h4>
              <ul className={`text-xl space-y-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                <FooterLink to="/services/singing" label="Singing" />
                <FooterLink to="/services/live-performance" label="Live Performance" />
                <FooterLink to="/services/wedding-performance" label="Wedding Performance" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`text-center mb-0 pb-0 relative ${theme === "dark" ? " bg-gray-700 " : " from-yellow-200 to-slate-800"}`}>
        <div className="text-center max-w-7xl mx-auto">
          <div className="py-4 text-lg">
            Copyright <strong><span>christian_namahoro</span></strong>. All rights reserved.
          </div>
          <div>
            Designed by <Link to="/" className={theme === "dark" ? "text-yellow-500" : "text-blue-600"}>christian_namahoro</Link>
          </div>
          <div className="flex justify-center mt-4 space-x-3">
            <Link to="https://www.instagram.com/ishkevin_" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white inline-flex items-center justify-center shadow-lg">
              <FaInstagram size={24} className="text-pink-700" />
            
            </Link>
            </div>
            </div>
            </div>
            </footer>
  );
}
export default Footer