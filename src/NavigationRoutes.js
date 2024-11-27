import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
function NavigationRoutes(params) {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                {/* <Route path="/lg" element={<Navbar/>}/> */}
                <Route path="/home" element={<HeroSection/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default  NavigationRoutes