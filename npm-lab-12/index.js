const express= require('express')
const bcrypt=require('bcrypt')
const app=express()
const mongoose=require('mongoose')
app.use(express.json())
require('dotenv').config()

mongoose.connect(process.env.mongourl).then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err)
})

const userroutes=require('./route/user')
const bookroutes=require('./route/book')
const transactionroutes=require('./route/transaction')
app.use("/users",userroutes)
app.use("/books",bookroutes)
app.use("/transactions",transactionroutes)

app.listen(process.env.PORT,()=>{
    console.log("server started")
})