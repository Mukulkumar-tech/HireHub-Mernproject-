import mongoose from "mongoose";

export const UserSchema = mongoose.Schema({
    name:{
        String,
        required : true 
    },
    email:{
        String,
        required :true ,
        unique : true 
    },
    phone:{
        String,
        required :true ,
    },
    role:{
        String,
        required:true
    }

    
})

export const userModel = mongoose.model('user', UserSchema )