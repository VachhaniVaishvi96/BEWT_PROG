const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.put('/home',(req,res)=>{
    res.send('home page')
})

app.patch('/about',(req,res)=>{
    res.send('about page')
})

app.post('/contact',(req,res)=>{
    res.send('contact page')
})

app.use('/',(req,res)=>{
    res.status(404).send("page not found")
})



app.listen(3000,()=>{
    console.log('server started')
})