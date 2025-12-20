const express=require('express')
const fs=require('fs')
const app=express()

app.get('/',(req,res)=>{
    fs.readFile("home.txt",(err,data)=>{
            if(err){
                res.end(err)
            }
            res.end(data)
        })
})

app.get('/about',(req,res)=>{
    fs.readFile("about.txt",(err,data)=>{
            if(err){
                res.end(err)
            }
            res.end(data)
        })
})

app.listen(3000,()=>{
    console.log('server started')
})