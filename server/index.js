import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbconnect } from './database/Dbconnect.js'

const app = express()


app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
dotenv.config()
dbconnect();
const PORT = process.env.PORT




app.listen(PORT , ()=>{
    console.log(`server is running on port no ${PORT}`)
})