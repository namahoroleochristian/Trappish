import React from 'react'
import Ish1 from "../assets/ish1.jpg"
import Ish2 from "../assets/ish2.jpeg"
import Ish3 from "../assets/ish3.jpg"
import Semana from "../assets/semana.jpg"
import Pull1 from "../assets/pull1.jpeg"
import Pull2 from "../assets/pull2.jpeg"
import Footer from './Footer'
import Navbar from './Navbar'

function Releases() {
    const releasesData = [
        {
          id: 1,
          title: "My Year",
          artist: "Ish Kevin",
          image: Ish1
        },
        {
          id: 2,
          title: "BST",
          artist: "ish Kevin album",
          image: Ish2
        },
        {
          id: 3,
          title: "Long Way",
          artist: "ish Kevin Ep",
          image: Ish3
        },
        {
          id: 4,
          title: "Semana",
          artist: "Ish kevin Ep",
          image: Semana
        }
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
          image: Pull2,
          rating: 4,
        },
        {
          id: 3,
          title: "Merch",
          description: "Trappish",
          image: Pull2,
          rating: 4,
        },
      ];
  return (

  <>
  <br />
  <Navbar/>
    <section className='Releases'>
        <div className='flex justify-start ml-10'>
            <h2 className='ml-10'>Latest Releases</h2>
        </div>
        <div className='flex flex-wrap gap-4 justify-center'>
        {releasesData.map((release) => (
          <div key={release.id} className='w-72 rounded-lg p-10'>
            <img src={release.image} alt={release.title} className='w-52 h-52 rounded-full'/>
            <div className='ml-16'>
              <h3 className='text-2xl text-white font-mono'>{release.title}</h3>
              <h6 className='text-lg text-gray-400 font-light'>{release.artist}</h6>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-black min-h-screen p-10">
      <h2 className="text-yellow-500 text-3xl mb-6">Released Products</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 rounded-lg shadow-lg p-4 w-64 relative"
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
              <h3 className="text-white text-xl">{product.title}</h3>
              <p className="text-gray-400 text-sm">{product.description}</p>
              {/* Star Ratings */}
              <div className="flex mt-2">
                {Array.from({ length: product.rating }, (_, index) => (
                  <span key={index} className="text-yellow-400 text-lg">★</span>
                ))}
                {Array.from({ length: 5 - product.rating }, (_, index) => (
                  <span key={index} className="text-gray-500 text-lg">★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
   
    
    <Footer/>
    </>
   
  )
}

export default Releases