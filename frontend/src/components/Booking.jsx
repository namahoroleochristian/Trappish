import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion"; // Install with `npm install framer-motion`

function Booking() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    artist: "Artist 1",
    eventType: "Concert",
  });

  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    if (isStepValid()) {
      setStep(step + 1);
      setErrorMessage(""); // Clear any previous error messages
    } else {
      setErrorMessage("Please fill all required fields.");
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request submitted!");
    console.log(formData);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 2:
        return formData.eventDate.trim() !== "" && formData.artist !== "";
      case 3:
        return formData.eventType !== "";
      default:
        return false;
    }
  };

  const getFieldClass = (field) => {
    return formData[field]?.trim() === ""
      ? "mt-2 p-3    text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
      : "mt-2 p-3   text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-green-500";
  };

  return (
    <>
      <Navbar />
      <div
        className={`flex flex-col items-center justify-center p-8 min-h-screen  ${
          theme === "dark" ? "bg-gradient-to-r from-gray-700 to-gray-900" : "bg-teal-50"
        }`}
      >
        <div
          className={` w-5/6  ${theme === "dark" ? "bg-gradient-to-r from-gray-700 to-gray-900" : "bg-teal-50 "} shadow-2xl shadow-gray-700  rounded-lg p-6 `}
        >
          <h2 className={`${theme === 'dark' ? 'text-gray-200' :' text-gray-600' } text-3xl  font-bold text-center  mb-6 `}>Book an Artist</h2>
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.5 }}
          >
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className={` ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} text-2xl font-semibold `}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`${getFieldClass("name")}   ${theme === 'dark' ? 'bg-slate-500 text-slate-200 text-lg ' :'bg-slate-300'}`}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className={` ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} text-2xl font-semibold `}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`${getFieldClass("email")}   ${theme === 'dark' ? 'bg-slate-500 text-slate-200 text-lg ' :'bg-slate-300'}`}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="eventDate" className="text-sm text-gold">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className={`${getFieldClass("email")}   ${theme === 'dark' ? 'bg-slate-500 text-slate-200 text-lg ' :'bg-slate-300'}`}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="artist" className="text-sm text-gold">
                    Artist
                  </label>
                  <select
                    id="artist"
                    name="artist"
                    value={formData.artist}
                    onChange={handleChange}
                    className={`${getFieldClass("email")}  ${theme === 'dark' ? 'bg-slate-500 text-slate-200 text-lg ' :'bg-slate-300'}`}
                  >
                    <option>Artist 1</option>
                    <option>Artist 2</option>
                    <option>Artist 3</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="eventType" className="text-sm text-gold font-bold">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`${getFieldClass("email")} ${theme === 'dark' ? 'bg-slate-500 text-slate-200 text-lg ' :'bg-slate-300'}  `}
                  >
                    <option>Concert</option>
                    <option>Private Party</option>
                    <option>Festival</option>
                  </select>
                </div>
                <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  // className="w-full text- p-3 rounded-md hover:bg-gold hover:text-black focus:outline-none focus:ring-2 focus:ring-gold"
                  className={`w-2/5 p-5 text-white text-xl hover:scale-105 ${getFieldClass("email")} ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-700 hover:bg-slate-900'} `}
                >
                  Submit Booking Request
                </button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-center mt-4">
              <p>{errorMessage}</p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={handlePrev}
                className="bg-red-200 text-red-950 px-4 py-2 rounded-md"
              >
                Previous
              </button>
            )}
            {step < 3 && (
              <button
                onClick={handleNext}
                className={`rounded-md  px-4 py-2 cursor-pointer  ${theme === 'dark' ? ' bg-green-300 text-slate-700' : 'text-gray-700 bg-green-300'} text-2xl font-semibold `}
                
                disabled={!isStepValid()}
              >
                Next
              </button>
            )}
          </div>

          {/* Step Indicator */}
          <div className="mt-4 text-center text-slate-700">
            Step {step} of 3
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Booking;
