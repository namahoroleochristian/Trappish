import React from "react";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <>
    <br/>
    
    <Navbar/>
    <br/>
    <section className="Hero text-center px-4 py-12 relative">
      <h1 className="text-4xl md:text-6xl font-bold text-yellow-500">
        TRAPPISH MUSIC
      </h1>
      <p className="text-gray-400 text-xl  mt-20">
        Your journey becomes a spark with us, <br/>Trappish elevated
      </p>
      <button className="btn-book transition">
        Book Your Session
      </button>
      {/* Honeycomb */}
      {/* <div className="flex justify-center mt-12 space-x-4">
        <div className="h-20 w-20 bg-yellow-500 clip-hex hover:scale-110 transform transition"></div>
        <div className="h-20 w-20 bg-yellow-500 clip-hex hover:scale-110 transform transition"></div>
        <div className="h-20 w-20 bg-yellow-500 clip-hex hover:scale-110 transform transition"></div>
      </div> */}
    </section>
    </>
  );
}

export default HeroSection;
