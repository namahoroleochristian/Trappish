import React from "react";
// import Vid from "../assets/LoginBgVideo.mp4"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
    const [name,SetName]=useState("");
    const [password,SetPassword]=useState("");
    const Valid_UserName="testinguser";
    const Valid_Password="1c6@TE$t";
    const navigate=useNavigate()
    const handleLogin = (e) => {
        // e.preventDefault(); 
        if (name === Valid_UserName && password === Valid_Password) {
            navigate("/home"); 
            // alert("Login Successful!");
        } else {
            alert("Invalid username or password.");
        }
    };

    return (
        <>

            {/* <video autoplay loop muted plays-inline class="background-clip">
                <source src={Vid} type="video/mp4"/>
            </video> */}
        <div className="BG">
        
                
                <br></br>
                <br></br>
          
                <div className="form-wrapper sign-in ">
                    <form action="" className="login-form" onSubmit={handleLogin}>
                        <h1  className="lg-trap">TRAPPISH MUSIC</h1>
                        {/* <!-- <h2>Login</h2> --> */}
                        <div className="input-group">
                            <input type="text"  onChange={(e)=>{SetName(e.target.value)}} required />
                            <label for="" className="text text-xl">Username</label>
                        </div>
                        <div className="input-group">
                            <input type="password"  required onChange={(e)=>{SetPassword(e.target.value)}} />
                            <label for="" className="text text-xl">Password</label>
                        </div>

                        <div class="remember">
                            <label for=""><input type="checkbox"  /> Remember me</label>
                        </div>
                        <button type="submit" className="Lg-btn hover:bg-gold hover:text-black hover:transition duration-100" >Login</button>
                        
                        <div className="signup-link "><p>Don't you have an account? <Link  className="signup-link" to="/">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            
            </div>
        </>
    );
}
export default Login