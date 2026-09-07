import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },

    fullName:{
        type:String,
        required:true,
    },

     password:{
        type:String,
        required:true,
    },

     ProfilePic:{
        type:String,
       default:""
        
    },
},{timestamps:true})//createdat and updatedat

const User = mongoose.model("User",userShema);

export default User;