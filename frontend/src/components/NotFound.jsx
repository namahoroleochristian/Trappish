import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="mb-8 text-lg text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/home"
        className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
