import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
       const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected:",conn.connection.host);
    }catch(error){
        console.error("Error connection to MONGODB",error);
        process.exit(1);//1 satus code means fail,0 means sucess

    }
}