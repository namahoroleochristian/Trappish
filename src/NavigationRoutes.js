import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Booking from "./components/Booking";
import Releases from "./components/Releases";
function NavigationRoutes(params) {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                {/* <Route path="/lg" element={<Navbar/>}/> */}
                <Route path="/home" element={<HeroSection/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/Releases" element={<Releases/>}/>

            </Routes>
        </BrowserRouter>
    );
}
export default  NavigationRoutes