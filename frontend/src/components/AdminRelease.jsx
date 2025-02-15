// import React, { useState } from "react";
import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import AdminNavbar from "./AdminNavbar";

function CreateRealese() {
  const { theme } = useTheme();
  // const [ProductData, setProductData] = useState({
  //   name: "",
  //   price: "",
  //   category: "",
  //   image: "",
  // });

  // const HandleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:3040/api/products", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(ProductData),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("Product created successfully:", data);
  //       alert("Product created successfully!");
  //       setProductData({ name: "", price: "", category: "", image: "" }); // Reset form
  //     } else {
  //       console.error("Error creating product:", response.statusText);
  //       alert("Failed to create product!");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while creating the product.");
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className={`${theme === "dark" ? "bg-gradient-to-r from-gray-700 to-gray-900" : "bg-teal-50 "} min-h-screen`}>
      <AdminNavbar/>
        <div className="pt-6">
          
        </div>
        {/* <div
          className={`text-center text-2xl hover:cursor-pointer p-2 font-semibold ${
            theme === "dark" ? "text-slate-200" : "text-slate-600"
          }`}
        >
          CreateRelease
        </div> */}
        <div className={`flex flex-col justify-center items-center mt-2`}>
          <form
            className={`w-5/6 mt-10 min-h-[78vh] flex flex-col justify-center items-center ${theme === 'dark' ? '"bg-gradient-to-r from-gray-700 to-gray-900 shadow-2xl shadow-zinc-900': 'bg-slate-200'} shadow-xl text-black rounded-xl shadow-slate-400`}
            // onSubmit={HandleSubmit}
          >
        <h1
              className={`text-center text-black text-2xl hover:cursor-pointer p-4 font-semibold ${
                theme === "dark" ? "text-slate-200" : "text-slate-600"
              }`}
            >
              Product Details
            </h1>
           
            <div className={`p-3 ml-2 flex flex-col text-lg w-5/6`}>
              <label className={`${theme === 'dark' ? 'text-slate-200' : 'text-gray-700  '} font-semibold p-2`}>Name</label>
              <input
                id="name"
                type="text"
                name="name"
                // onChange={(e) =>
                //   setProductData({ ...ProductData, [e.target.name]: e.target.value })
                // }
                // value={ProductData.name}
                placeholder="Enter Product Name"
                required
                className ={`${theme === 'dark' ? 'bg-slate-500 text-white': 'bg-slate-300'} outline-none p-3 rounded-lg `}
              />
            </div>
            <div className={`p-3 ml-2 flex flex-col text-lg w-5/6`}>
              <label className={`${theme === 'dark' ? 'text-slate-200' : 'text-gray-700  '} font-semibold p-2`}>Price</label>
              <input
                id="price"
                type="number"
                name="price"
                // onChange={(e) =>
                //   setProductData({ ...ProductData, [e.target.name]: e.target.value })
                // }
                // value={ProductData.price}
                placeholder="Enter Product Price"
                required
                className ={`${theme === 'dark' ? 'bg-slate-500 text-white': 'bg-slate-300'} outline-none p-3 rounded-lg `}
              />
             
            </div>
            <div className={`p-3 ml-2 flex flex-col text-lg w-5/6`}>
              <label className={`${theme === 'dark' ? 'text-slate-200' : 'text-gray-700  '} font-semibold p-2`}>Category</label>
              <input
                id="category"
                type="text"
                name="category"
                // onChange={(e) =>
                //   setProductData({ ...ProductData, [e.target.name]: e.target.value })
                // }
                // value={ProductData.category}
                placeholder="Enter Product Category"
                required
                className ={`${theme === 'dark' ? 'bg-slate-500 text-white': 'bg-slate-300'} outline-none p-3 rounded-lg `}
              />
            </div>
            <div className={`p-3 ml-2 flex flex-col text-lg w-5/6`}>
              <label className={`${theme === 'dark' ? 'text-slate-200' : 'text-gray-700  '} font-semibold p-2`}>Image</label>
              <input
                id="image"
                type="text"
                name="image"
                // onChange={(e) =>
                //   setProductData({ ...ProductData, [e.target.name]: e.target.value })
                // }
                // value={ProductData.image}
                placeholder="Enter Product Image URL"
                required
                className ={`${theme === 'dark' ? 'bg-slate-500 text-white': 'bg-slate-300'} outline-none p-3 rounded-lg `}
              />
            </div>
            <div className={`p-3 ml-2 flex flex-col text-lg w-3/6`}>  
              <button
                type="submit"
                className={`p-5 text-black ${theme === 'dark' ? 'bg-teal-300' :'text-gray-100 bg-teal-700'} text-2xl font-semibold rounded-xl shadow-lg `}
              >
                Create Product
              </button>
            </div>
            <div>
              </div>
              </form>
              </div>
              </div>

    
 </>       
  )
}
export default CreateRealese;    