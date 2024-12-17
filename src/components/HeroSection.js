import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function HeroSection() {
  return (
    <>
    <br/>
    
    <Navbar/>
    <br/>
    <section className="Hero text-center px-4 py-12 relative">

<div className="text-content">
      <h1 className="text-4xl md:text-6xl font-bold text-yellow-500">
        TRAPPISH MUSIC
      </h1>
      <p className="text-gray-400 text-xl  mt-20">
        Your journey becomes a spark with us, <br/>Trappish elevated
      </p>
      <button className="btn-book transition"> <Link to="/booking">Book Your Session</Link>
        
      </button>
     
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default HeroSection;
