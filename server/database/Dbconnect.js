import mongoose from "mongoose";

export const dbconnect = async()=>{
    try {
       await mongoose.connect(process.env.DATABASE_URL)
        console.log("database connected successfully")
    } catch (error) {
        console.log(error.message)
    }
}