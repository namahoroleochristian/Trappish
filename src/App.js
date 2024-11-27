import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NavigationRoutes from "./NavigationRoutes";


function App() {
  return (
    <div className="Body   text-white">
      <NavigationRoutes/>
      {/* <Navbar />
      <HeroSection /> */}
    </div >
  );
}

export default App;
