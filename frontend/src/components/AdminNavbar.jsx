import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function AdminNavbar() {
  const { theme } = useTheme();
  return (
    <div className="flex justify-end">
      <nav className={`w-3/6 p-2 px-10 ${theme === 'dark' ? '"bg-gradient-to-r from-gray-700 to-gray-900 shadow-2xl shadow-zinc-900': 'bg-slate-200'} rounded-lg shadow-xl mr-4 mt-10 z-0 scroll- top-200 `}>
        <ul className={`flex justify-between items-center px-4`}>
          <li>
            <Link
              to="/Releases"
              className={`mt-20 rounded-3xl ${
                theme === "dark"
                  ? "text-slate-200 font-semibold text-xl hover:underline "
                  : "text-slate-700  font-semibold"
              }`}
            >
              Back
            </Link>
          </li>
          <li className={``}>
            <form className={``}>
                <input type="search" name="findProduct" id="findProduct" className={`p-2 rounded-md outline-none ${theme === 'dark' ?'bg-slate-500' :'text-gray-700'} `} placeholder="Find something" />
                    
            </form>
          </li>
          <li className={``}>
            <h3 className={`font-semibold ${theme === 'dark' ? '' :'text-gray-700 '}`}>Add</h3>
          </li>
          <li className={``}>
            <h3 className={`font-semibold ${theme === 'dark' ? '' :'text-gray-700 '}`}>Update</h3>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminNavbar;
