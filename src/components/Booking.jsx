// import Navbar from "./Navbar";

// function Booking() {
//     return (
//         <>
//             <br />

//             <Navbar />
//             <section className="Booking">
//                 <form className="Booking-form">
//                     <div className="title">
//                         <h1 className="text-center">BOOKING</h1>
//                     </div>
//                     <div className="reason">
//                         <label htmlFor="" className="label">Want to book</label><br />    
//                         <select class="w-full sm:w-1/2 md:w-1/3 bg-gray-500 text-gray-900 border border-gray-300 rounded-md shadow-sm px-3 py-2">
//                             Select
//                             <option value="option1">Studio session</option>
//                             <option value="option2">Artist Performance</option>
//                             <option value="option3">Media Show up</option>
//                             <option value="option3"></option>
//                         </select>

//                     </div>
//                 </form>
//             </section>
//         </>
//     );

// }
// export default Booking
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    artist: "Artist 1",
    eventType: "Concert",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request submitted!");
    console.log(formData);
  };

  return (
    <>
    <br />
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-black p-8">
      <div className="max-w-xl w-full bg-[#121212] shadow-xl rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gold mb-6">Book an Artist</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-gold">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 p-3 border border-transparent bg-[#303030] text-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gold">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 p-3 border border-transparent bg-[#303030] text-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold-500"
            />
          </div>

          {/* Event Date */}
          <div className="flex flex-col">
            <label htmlFor="eventDate" className="text-sm text-gold">Event Date</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="mt-2 p-3 border border-transparent bg-[#303030] text-gold rounded-md focus:outline-none focus:bg-[#303030] focus:ring-2 focus:ring-gold focus:border-gold-500"
            />
          </div>

          {/* Artist */}
          <div className="flex flex-col">
            <label htmlFor="artist" className="text-sm text-gold">Artist</label>
            <select
              id="artist"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              className="mt-2 p-3 border border-transparent bg-[#303030] text-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold-500"
            >
              <option>Artist 1</option>
              <option>Artist 2</option>
              <option>Artist 3</option>
            </select>
          </div>

          {/* Event Type */}
          <div className="flex flex-col">
            <label htmlFor="eventType" className="text-sm text-gold font-bold">Event Type</label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="mt-2 p-3 border border-transparent bg-[#303030] text-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold-500"
            >
              <option>Concert</option>
              <option>Private Party</option>
              <option>Festival</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#000000] text-gold p-3 rounded-md hover:bg-gold hover:text-black focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Submit Booking Request
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Booking;


