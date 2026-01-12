const express= require('express')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const app=express()
const mongoose=require('mongoose')
app.use(express.json())
require('dotenv').config()

mongoose.connect(process.env.mongourl).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err)
})

app.listen(process.env.PORT,()=>{
    console.log("server started")
})