import React, { useState } from "react";
import Logo from "../assets/image.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="Navbar bg-black px-6 py-4">
      <div className="flex justify-between items-center">
        
        <img src={Logo} className="Logo" alt="Trappish Music" />

        
        {/* <input
          type="search"
          placeholder="Search..."
          className="hidden md:block bg-gray-800 text-sm text-yellow-500 px-4 py-2 rounded-md focus:outline-none"
        /> */}

       
        <ul className="hidden md:flex space-x-6 text-yellow-400 text-sm font-bold">
          <li className="hover:text-yellow-300  text-lg cursor-pointer"><Link to="/home  ">Home</Link></li>
          <li className="font-bold text-lg"><Link to="/releases">Releases</Link></li>

          <li className="hover:text-yellow-300 text-lg cursor-pointer"><Link to="/MarketPlace">MarketPlace</Link></li>
          <li className="hover:text-yellow-300 text-lg cursor-pointer"><Link to="/booking">Book</Link></li>
          <li className="hover:text-yellow-300 text-lg cursor-pointer"><Link to="/AboutUs">About Us</Link></li>
        </ul>

       
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-yellow-500 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

     
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-[#202020] rounded-md shadow-lg">
          <ul className="flex flex-col text-yellow-400 text-sm font-bold space-y-4 p-4">
          <li className="hover:text-yellow-300 text-lg cursor-pointer"><Link to="/home  ">Home</Link></li>
          <li className="font-bold text-lg"><Link to="/releases">Releases</Link></li>

          <li className="hover:text-yellow-300 text-lg cursor-pointer"><Link to="/MarketPlace">MarketPlace</Link></li>
          <li className="hover:text-yellow-300 text-lg cursor-pointer"><Link to="/booking">Book</Link></li>
          <li className="hover:text-yellow-300 text-lg cursor-pointer"><Link to="/AboutUs">About Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
