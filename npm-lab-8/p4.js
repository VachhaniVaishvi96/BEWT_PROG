const express=require('express')
const app=express()
require ('dotenv').config()
app.use(express.json())

app.get("/user/:id",(req,res)=>{
    res.send(req.params.id)
})

app.get("/user",(req,res)=>{
    res.send(req.query)
})

app.post("/register",(req,res)=>{
    const {name,email,password}=req.body
    res.send(`Name:${name}, Email:${email}, Password:${password}`)
})

app.use('/',(req,res)=>{
    res.status(404).send('page not found')
})

app.listen(process.env.PORT,()=>{
    console.log("server started")
})