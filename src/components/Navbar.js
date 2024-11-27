import React from "react";
import Logo from '../assets/image.png'
function Navbar() {
  return (
    <div className="">
        
    <nav className=" Navbar flex justify-between items-center px-6 py-4 bg-black ">
      <div ><img src={Logo} className="logo" alt="trappish music"></img></div>
      <input
        type="search"
        placeholder="Search..."
        className="bg-gray-800 text-sm text-yellow-500 px-4 py-2 rounded-md focus:outline-none"
      />
      <ul className="hidden md:flex space-x-6 text-yellow-400 text-sm">
        <li>Home</li>
        <li>Releases</li>
        <li>Marketplace</li>
        <li>Booking</li>
        <li>About Us</li>
      </ul>
      <div className="block md:hidden text-yellow-500">☰</div>
    </nav></div>
    
  );
}

export default Navbar;
