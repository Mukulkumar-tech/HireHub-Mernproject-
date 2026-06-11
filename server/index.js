import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbconnect } from './database/Dbconnect.js'
import errorHandler from './middleware/errorHandler.js'
import customerror from './utils/customError.js'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import userModel from './model/User.schema.js'
import { userroutes } from './Routes/User.routes.js'


const app = express()


app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
dotenv.config()
dbconnect();
const PORT = process.env.PORT



app.use('/api/user',userroutes)

app.use(errorHandler)

app.listen(PORT , ()=>{
    console.log(`server is running on port no ${PORT}`)
})