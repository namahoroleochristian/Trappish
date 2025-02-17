import React, { useState } from "react";
// import "tailwindcss/tailwind.css";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Register() {
  const {theme,toggleTheme} = useTheme()
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
    <div className={`flex justify-center flex-col items-center min-h-screen  ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 to-gray-900': 'bg-teal-50'}`}>
      <div className="flex justify-end mr-48 p-6 w-full">
                <button
          className="p-2 rounded-full bg-yellow-500 dark:bg-gray-800 text-white dark:text-yellow-500 focus:outline-none"
          onClick={toggleTheme} // Use the toggleTheme from context
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
                </div>
      <div className={`w-full max-w-md p-8 rounded-lg shadow-lg  ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 to-gray-900 drop-shadow-2xl ': 'bg-slate-300'}`}>
        <h2 className={`text-2xl font-bold text-center mb-6 ${theme === 'dark' ? '': 'text-slate-700'}`}>Register</h2>
        <form onSubmit={handleSubmit} className={`space-y-4 ${theme === 'dark' ? '': ' '}`}>
          <div className="">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full p-3 rounded-md border-none  ${theme === 'dark' ? '': 'bg-slate-500 outline-none `'}`}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full p-3 rounded-md border-none  ${theme === 'dark' ? '': 'bg-slate-500 outline-none `'}`}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full p-3 rounded-md  border-none  ${theme === 'dark' ? '': 'bg-slate-500 outline-none `'}`}
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={`w-full p-3 rounded-md  border-none  ${theme === 'dark' ? '': 'bg-slate-500 outline-none `'}`}
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3  text-black font-bold rounded-md hover:bg-yellow-600 transition duration-300 ${theme === 'dark' ? '': 'bg-yellow-500'}`}
          >
            Register
          </button>
          <h1 className={` text-center ${theme === 'dark' ? '' : 'text-slate-600 '} `}>Already have an account? <Link to="/login" className={`text-gold`}>Login</Link> </h1>
        </form>
      </div>
    </div>
  );
}

export default Register;
