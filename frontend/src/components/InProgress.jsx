import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function InProgress() {
  const {theme} = useTheme()
    return (
      <div className={`flex flex-col items-center  justify-center min-h-screen ${theme === "dark" ? "bg-gradient-to-r from-gray-700 to-gray-900" : "bg-teal-50 "}`}>
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">Page in Progress</h1>
        <p className="text-lg text-gray-400 mb-6">
          This page is still under construction. Please check back later!
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    );
  }
  
  export default InProgress;