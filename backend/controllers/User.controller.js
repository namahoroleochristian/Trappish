// import mongoose from "mongoose";
import bycryptjs from 'bcryptjs'
import userModel from "../Models/User.model.js";
import dotenv from 'dotenv'
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie';
dotenv.config()

export const CreateUser =async (req, res) => {

    const {name,email,password} = req.body;
    if (!name || !email || !password) {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    
     
    }
    const userAlreadyExist = await userModel.findOne({email})
    console.log(userAlreadyExist);
    
      
    if(userAlreadyExist){
      res.status(400).json({success :false,message : `user could not be created Email already exists`})
    }
    // const encode_salt = process.env.encode_salt
    // console.log(encode_salt);
    const  verificationToken =Math.floor(100000 + Math.random() * 900000 ).toString()
    const hashedPassword = await bycryptjs.hash(password, 12)
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt : Date.now() + 24 * 60 *60 * 1000        
    });
    try {
      await newUser.save();
      generateTokenAndSetCookie(res,newUser._id)
      res.status(201).json({
        success: true,
        message: `User created Successfully`,
        User : {
          ...newUser._doc,
          password:null
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: `User not created ${error.message}`,
      });
      console.log(`error is ${error.message}`);
    }
  }

  export const GetUsers = async (req, res) => {
      try {
        const result = await userModel.find();
        res.status(200).json(result);
      } catch (error) {
        console.log(`error message:${error.message}`);
      }
    }
    // app.get("/getUsers", );
  // app.delete("/delete/user/:id", async (req, res) => {
  //   const { id } = req.params;
  //   if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return  res
  //       .status(404)
  //       .json({ success: false, message: "Nigga give me a valid URL Id" });
  //   }
  //   try {
  //     const result = await userModel.findByIdAndDelete(id);
  
  //     res.status(200).send({
  //       success: true,
  //       message: "Data deleted",
  //     });
  //   } catch (error) {
  //     res.status(404).json({
  //       success: false,
  //       message: `object with id ${id} not found`,
  //     });
  //   }
  // });
  