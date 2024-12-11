import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaApple, FaYoutube, FaSpotify } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <footer>
        <div className="bg-[#101010] text-gray-200 p-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="mb-5">
                <h4 className="pb-4 text-2xl">Company</h4>
                <p className="text-gray-400">
                  A123 Lost street <br />
                  KIgali PB232433 <br />
                  Rwanda <br />
                  <br />
                  <strong>Phone:</strong> +250 794377337 <br />
                  <strong>Email:</strong> leonamahoro1@gmail.com <br />
                </p>
              </div>
              <div className="mb-5">
                <h4 className="pb-4">Useful Links</h4>
                <ul className="text-gray-400">
                  <li className="pb-4">
                  <div className="flex items-center">
      <FaChevronRight className="text-yellow-400" />
      <Link className="hover:text-yellow-400 ml-2">Home</Link>
    </div>
                
                  </li>
                  <li className="pb-4">
                <div className="flex items-center">
                <FaChevronRight className="text-yellow-400" />
                <Link href="#home" className="hover:text-yellow-400 ml-2">About us</Link>
                </div>
                  </li>
                  <li className="pb-4">
                     <div className="flex items-center">
      <FaChevronRight className="text-yellow-400" />
      <Link  className="hover:text-yellow-400 ml-2">Contact</Link>
    </div>
                  </li>
                  <li className="pb-4">
                     <div className="flex items-center">
      <FaChevronRight className="text-yellow-400" />
      <Link  className="hover:text-yellow-400 ml-2">Login</Link>
    </div>
                  </li>
                  <li className="pb-4">
                  <div className="flex items-center">
      <FaChevronRight className="text-yellow-400" />
      <Link className="hover:text-yellow-400 ml-2">Sign up</Link>
    </div>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="pb-4">Our Services</h4>
                <ul className="text-gray-400">
                  <li className="pb-4">
                  <div className="flex items-center">
      <FaChevronRight className="text-yellow-400" />
      <Link  className="hover:text-yellow-400 ml-2">Singing</Link>
    </div>
                  </li>
                  <li className="pb-4">
                  <div className="flex items-center">
      <FaChevronRight className="text-yellow-400" />
      <Link  className="hover:text-yellow-400 ml-2">Live Performance</Link>
    </div>
                  </li>
                  <li className="pb-4">
                  <div className="flex items-center">
      <FaChevronRight className="text-yellow-400" />
      <Link  className="hover:text-yellow-400 ml-2">Wedding Performance</Link>
    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#101010] w-full text-gray-500 px-10">
          <div className="text-center">
            <div className="flex flex-col max-w-7xl sm:flex-row py-4 mx-auto justify-center items-center">
              Copyright <strong><span>Company</span></strong>. All rights reserved.
            </div>
            <div>
              Designed by <Link  className="text-yellow-500">christian_namahoro</Link>
            </div>
          </div>
          <div className="flex justify-center text-center text-xl text-white mb-2 pb-3">
          <Link to="https://www.instagram.com/ishkevin_/" className="w-10 h-10 rounded-full bg-white mx-1 inline-flex items-center justify-center">
          <FaInstagram size={24} className="text-pink-700" />
        </Link>
        <Link to="/" className="w-10 h-10 rounded-full bg-white mx-1 inline-flex items-center justify-center">
          <FaFacebook size={24} className="text-blue-700" />
        </Link>
        <Link to="/" className="w-10 h-10 rounded-full bg-white mx-1 inline-flex items-center justify-center">
          <FaTwitter size={24} className="text-blue-500" />
        </Link>
        <Link to="/" className="w-10 h-10 rounded-full bg-white mx-1 inline-flex items-center justify-center">
          <FaApple size={24} className="text-green-800"/>
        </Link>
        <Link to="/" className="w-10 h-10 rounded-full bg-white mx-1 inline-flex items-center justify-center">
          <FaYoutube size={24} className="text-red-500" />
        </Link>
        <Link to="/" className="w-10 h-10 rounded-full bg-white mx-1 inline-flex items-center justify-center">
          <FaSpotify size={24} className="text-green-400" />
        </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
