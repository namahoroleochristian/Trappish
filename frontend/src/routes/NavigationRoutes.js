import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "../components/Login";
// import Navbar from "./components/Navbar";
import HeroSection from "../components/HomePage";
import Booking from "../components/Booking";
import Releases from "../components/Releases";
import Register from "../components/signUp";
import NotFound from "../components/NotFound";
import MarketPlace from "../components/MarketPlace";
import AboutUs from "../components/AboutUs";
import CreateRealese from "../components/AdminRelease";
function NavigationRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Login" element={<Login/>}/>
                {/* <Route path="/lg" element={<Navbar/>}/> */}
                <Route path="/" element={<HeroSection/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/Releases" element={<Releases/>}/>
                <Route path="/signUp" element={<Register/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/MarketPlace" element={<MarketPlace/>}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
                <Route path="/CreateRelease" element={<CreateRealese/>}/>

            </Routes>
        </BrowserRouter>
    );
}
export default  NavigationRoutes