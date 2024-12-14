import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Booking from "./components/Booking";
import Releases from "./components/Releases";
import Register from "./components/Register";
function NavigationRoutes(params) {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Login" element={<Login/>}/>
                {/* <Route path="/lg" element={<Navbar/>}/> */}
                <Route path="/home" element={<HeroSection/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/Releases" element={<Releases/>}/>
                <Route path="/" element={<Register/>}/>

            </Routes>
        </BrowserRouter>
    );
}
export default  NavigationRoutes