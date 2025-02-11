import React, { useState } from "react";
// import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#101010]">
      <div className="w-full max-w-md p-8 bg-[#202020] rounded-lg shadow-lg text-yellow-500">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4 Register-form">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 rounded-md bg-[#121212] Register-input text-white border-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 rounded-md bg-[#121212] Register-input text-white border-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 rounded-md bg-[#121212] Register-input text-white border-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-3 rounded-md bg-[#121212] Register-input text-white border-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Register
          </button>
          <h1 className="text-white login-txt">Already have an account? <Link to="/login" className="text-gold">Login</Link> </h1>
        </form>
      </div>
    </div>
  );
}

export default Register;
