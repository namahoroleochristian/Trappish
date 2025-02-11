import mongoose from "mongoose";
export const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt : Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date,

 },{timestamps : true})
 const userModel = mongoose.model('User',userSchema)
 export default userModel