import { Router } from "express";
import { userregistercontroller } from "../controller/User.controller.js";


export const userroutes = Router();

// for creating user 
userroutes.post('/register',userregistercontroller)