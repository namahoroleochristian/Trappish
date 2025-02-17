import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const {theme,toggleTheme} = useTheme("dark")
    const [name,SetName]=useState("");
    const [password,SetPassword]=useState("");
    const Valid_UserName="testinguser";
    const Valid_Password="1c6@TE$t";
    const navigate=useNavigate()
    const handleLogin = (e) => {
        e.preventDefault(); 
        if (name === Valid_UserName && password === Valid_Password) {
            navigate("/home"); 
            // alert("Login Successful!");
        } else {
            alert("Invalid username or password.");
        }
    };

    return (
        <>

          
       
        
                
                
                <div className={`flex flex-col items-center  ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 to-gray-900' :'text-gray-500'} min-h-screen`}>
                <div className="flex justify-end mr-48 p-6 w-full">
                <button
          className="p-2 rounded-full bg-yellow-500 dark:bg-gray-800 text-white dark:text-yellow-500 focus:outline-none"
          onClick={toggleTheme} // Use the toggleTheme from context
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
                </div>
                    <form action="" className={` text-3xl w-3/6 max-sm:w-5/6 px-16 py-4 rounded-xl shadow-xl flex flex-col justify-center ${theme === 'dark' ? 'bg-gradient-to-r from-gray-700 to-gray-900 shadow-black text-slate-200' :'bg-slate-200 shadow-slate-300 '}`} onSubmit={handleLogin}>
                        <h1  className={` font-semibold text-5xl text-center ${theme === 'dark' ? 'text-slate-200' :'bg-slate-200 '}`}>LOGIN</h1>
                        {/* <!-- <h2>TRAPPISH MUSIC</h2> --> */}
                        <div className="  input-group ">
                            <input type="text"  className={`bg-transparent outline-none w-4/6 `} onChange={(e)=>{SetName(e.target.value)}} required />
                            <label for="" className={`absolute top-0 left-0  text text-xl text-gray-500 duration-500 ease-in-out ${theme === 'dark' ? 'text-slate-200' :'bg-slate-200 '} `}>Username</label>
                        </div>
                        <div className="input-group">
                            <input type="password" className={`bg-transparent`} required onChange={(e)=>{SetPassword(e.target.value)}} />
                            <label for="" className="text text-xl">Password</label>
                        </div>

                        <div class="">
                            <label for="" className={`text-lg flex items-center justify-center p-2 text-gray-900 ${theme === 'dark' ? 'text-slate-200' :'bg-slate-200 '} `}><input type="checkbox" className={`w-12`} /> Remember me</label>
                        </div>
                        <button type="submit" className={`p-2 rounded-lg bg-slate-900 text-slate-200`}  >Login</button>
                        
                        <div className={`text-lg flex items-center justify-center p-2 text-gray-900 ${theme === 'dark' ? 'text-slate-200' :'bg-slate-200 '}`}><p>Don't you have an account? <Link  className="signup-link hover:text-yellow-500" to="/signup">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
           
        </>
    );
}
export default Login