import React from "react";
import Ish1 from "../assets/ish1.jpg";
import Ish2 from "../assets/ish2.jpeg";
import Ish3 from "../assets/ish3.jpg";
import Semana from "../assets/semana.jpg";
import Pull1 from "../assets/pull1.png";
import Pull2 from "../assets/pull2.png";
import Pull3 from "../assets/pull3.png";
import Pull4 from "../assets/pull4.png";
import Pull5 from "../assets/pull5.png";


import Footer from "./Footer";
import Navbar from "./Navbar";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Releases() {
  const { theme } = useTheme();
  const releasesData = [
    {
      id: 1,
      title: "My Year",
      artist: "Ish Kevin",
      image: Ish1,
    },
    {
      id: 2,
      title: "BST",
      artist: "ish Kevin album",
      image: Ish2,
    },
    {
      id: 3,
      title: "Long Way",
      artist: "ish Kevin Ep",
      image: Ish3,
    },
    {
      id: 4,
      title: "Semana",
      artist: "Ish kevin Ep",
      image: Semana,
    },
  ];
  const productsData = [
    {
      id: 1,
      title: "Merch",
      description: "Trappish",
      image: Pull1,
      rating: 5,
    },
    {
      id: 2,
      title: "Merch",
      description: "Trappish",
      image: Pull3,
      rating: 4,
    },
    {
      id: 3,
      title: "Merch",
      description: "Trappish",
      image: Pull4,
      rating: 4,
    },
    {
      id: 4,
      title: "Merch",
      description: "Trappish",
      image: Pull5,
      rating: 4,
    },
    {
      id: 5,
      title: "Merch",
      description: "Trappish",
      image: Pull2,
      rating: 4,
    },
  ];
  return (
    <>
      <Navbar />
      <section
        className={`text-center py-20 min-h-screen relative ${theme === "dark" ? "bg-gradient-to-r from-gray-700 to-gray-900" : "bg-teal-50 "}`}
      >
        {/* Latest Releases Section */}
        
        <div className="ml-10">
          <div className="flex justify-end items-center  ">
         <Link to="/CreateRelease" className={`pb-2 px-2 rounded-lg ${theme === 'dark' ? 'border  border-slate-500 text-slate-300 ' : 'bg-teal-100 text-gray-700 p-2 shadow-lg'} sticky z-10 top-zz10   font-semibold text-2xl`}>Admin</Link>
         </div>
          <h2
            className={`hover:cursor-pointer p-4 font-semibold ${
              theme === "dark" ? "text-slate-200" : "text-slate-600"
            }`}
          >
            Latest Releases
          </h2>
          </div>
        <div
          className={`flex justify-between overflow-x-auto  space-x-4 p-8  shadow-xl rounded-lg scrollbar-hide ${
            theme === "dark" ? "bg-transparent " : "bg-slate-200"
          }`}
        >
          {releasesData.map((release) => (
            <div
              key={release.id}
              className={`min-w-[18rem] w-72 rounded-lg p-10  bg-slate-600 ${
                theme === "dark"
                  ? "bg-transparent shadow-xl border border-slate-700"
                  : "bg-teal-50 shadow-xl"
              } hover:scale-110 duration-150 ease-in`}
            >
              <img
                src={release.image}
                alt={release.title}
                className="w-52 h-52 rounded-full shadow-md hover:scale-105 hover:shadow-xl hover:shadow-black shadow-black"
              />
              <div className="text-center mt-4">
                <h3 className={`text-2xl font-semibold ${ theme === "dark"
                      ? "text-slate-200" 
                      : " text-gray-700 " 
                  }} font-mono`}>
                  {release.title}
                </h3>
                <h6
                  className={`hover:cursor-pointer font-semibold ${
                    theme === "dark"
                      ? "text-slate-200"
                      : "bg-teal-100 rounded-lg shadow-xl text-gray-700"
                  }`}
                >
                  {release.artist}
                </h6>
                
              </div>
            </div>
            
          ))}
        </div>

        {/* Released Products Section */}
        <div
          className={` ${
            theme === "dark"
              ? "bg-slate-800"
              : "border border-transparent bg-gray-100"
          } mt-10 rounded-xl shadow-2xl min-w-full `}
        >
          <h2
            className={`ml-10 hover:cursor-pointer pt-4 font-semibold ${
              theme === "dark" ? "text-slate-200" : "text-slate-600"
            }`}
          >
            Released Products
          </h2>
          <div
            className={`flex overflow-x-auto space-x-6 py-8 ${theme === 'dark' ? 'bg-transparent' : 'bg-slate-200'}  scrollbar-hide`}
          >
            {productsData.map((product) => (
              <div
                key={product.id}
                className={`min-w-[18rem] w-64 rounded-lg p-10 relative bg-slate-600 ${
                  theme === "dark"
                    ? "bg-transparent shadow-xl border border-slate-700"
                    : " shadow-xl bg-teal-50"
                } hover:scale-110 duration-150 ease-in`}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                {/* Plus Button */}
                <button className="absolute top-4 right-4 bg-white text-yellow-600 w-8 h-8 rounded-full flex items-center pb-2 ring-1 justify-center text-3xl font-bold">
                  +
                </button>
                {/* Product Details */}
                <div className="mt-4">
                  <h3 className={`text-2xl font-semibold ${ theme === "dark"
                      ? "text-slate-200" 
                      : " text-gray-700 " 
                  }} font-mono`}>{product.title}</h3>
                  <p className="text-gray-400 text-sm">{product.description}</p>
                  {/* Star Ratings */}
                  <div className="flex mt-2">
                    {Array.from({ length: product.rating }, (_, index) => (
                      <span key={index} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - product.rating }, (_, index) => (
                      <span key={index} className="text-gray-500 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Releases;
