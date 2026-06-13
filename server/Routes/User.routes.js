import { Router } from "express";
import { userlogincontroller, userregistercontroller, userverifyotpcontroller } from "../controller/User.controller.js";
import asynchandler from "express-async-handler";

export const userroutes = Router();

// for creating user 
userroutes.post('/register',asynchandler(userregistercontroller))

// otp verification api 

userroutes.post('/verify-otp',asynchandler(userverifyotpcontroller))

// login route 
 
userroutes.post('/login',asynchandler(userlogincontroller))