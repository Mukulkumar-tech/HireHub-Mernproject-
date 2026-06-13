import { otpemail } from "../Template/otpsendemail.js";
import { sendotpemail } from "../utils/emailsender.js";
import bcrypt from 'bcrypt';
import userModel from "../model/User.schema.js";
import customerror from "../utils/customError.js";


// user register controller 
const userregistercontroller = async (req, res) => {
  const { username, email, phone, password, role } = req.body;

  const OTP = Math.floor(100000 + Math.random() * 900000);

  if (!username || !email || !phone || !password) {
    throw new customerror("All fields are required", 400);
  }

  const existinguser = await userModel.findOne({ email });

  
  if (existinguser) {
    throw new customerror("User already exists", 400);
  }

  const hashedpassword = await bcrypt.hash(password, 10);

  await userModel.create({
    username,
    email,
    phone,
    password: hashedpassword,
    role,
    otp: OTP,
    isverifiyed: false,
  });

  await sendotpemail(
    email,
    "OTP Verification",
    otpemail.replace("OTPCODE", OTP)
  );

  res.status(201).json({
    success: true,
    message: "OTP sent successfully",
  });
};

// Otp verification controller 
const userverifyotpcontroller = async (req, res) => {
  const { email, otp } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    throw new customerror("User not found", 404);
  }

  if (otp.toString() !== user.otp.toString()) {
    throw new customerror("Invalid OTP", 400);
  }

  user.isverifiyed = true;
  user.otp = null;

  await user.save();

  res.status(200).json({
    success: true,
    message: "OTP Verified Successfully",
  });
};

// login controller 
const userlogincontroller = async (req,res)=>{
   const {email,password}=req.body
   if(!email || !password){
    throw new customerror("all fields are required ")
   }
   const user = await userModel.findOne({email})
   console.log(user)
   if(!user.isverifiyed){
    throw new customerror("you are not verified register again ")
   }
   if(!user){
    throw new customerror("NO account found ")
   }
   const ismatch = await bcrypt.compare(password,user.password)
   if(!ismatch){
    throw new customerror("invalid password or email")
   }

   res.json({ success:true , message :"user login successfully "
   })
}

export {userregistercontroller,userverifyotpcontroller,userlogincontroller};