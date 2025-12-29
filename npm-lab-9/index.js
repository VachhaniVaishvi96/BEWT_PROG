// const express=require('express')
// const mongoose=require('mongoose')
// require('dotenv').config()
// const app=express();
// const user=require('./module/user')
// app.use(express.json())

// mongoose.connect(process.env.mongourl),then(()=>{
//     console.log("mongo connected")
// }).catch((err)=>{
//     console.log(err)
// })

// app.post('/register',async(req,res)=>{
//     const User=new user({
//         "name":"xyz",
//         "email":"xyz@xyz",
//         "password":"123654",
//         "phone":"1236547890"
//     });

//     const newUser=awaitUser.save()
//     return res.status(200).json({message:"success",newUser})
// })

// app.listen(3000,()=>{
//     console.log("done")
// })



//CRUD

const express= require('express')
require('dotenv').config()
const mongoose=require('mongoose')
const User = require('./model/user')
const app=express()
app.use(express.json())

mongoose.connect(process.env.mongourl).then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log(err);
})


app.get('/user',async(req,res)=>{
    try{
    const user = await User.find();
    res.json({message:"Successfully fetched",allUser:user})
    }
   catch(err){
    res.json({err})
   }
})


app.get('/user/:id',async(req,res)=>{
    try{
    const user = await User.findById(req.params.id);

    if(!user){
        res.status(404).json({message:"user not found"})
    }
    res.json({message:"successfully fetched",OneUser:user})

    }
    catch(err){
        res.json({err});
    }
})

app.post('/register',async(req,res)=>{
    try{
        const {name,email,password,phone}=req.body;
        const user=await User.create({
        name,
        email,
        password,
        phone
    })
    res.json({message:"successfully registered user",createdUSer:user})
    }
   catch(err){
    res.json({err})
   }
})

app.patch('/update/:id',async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id
        ,{
            $set:req.body
        },
    {
        new:true
    })
    res.json({message:"successfully updated",upadatedUser:user})
    }
    catch(err){
    res.json({err})
}
})


app.delete('/delete/:id',async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
        res.status(404).json({message:"user not found"})
    }
        res.json({message:"successfully deleted",deletedUser:user})
    }
    catch(err){
        res.json({err})
    }
})

app.listen(3000,()=>{
    console.log("server connected");
})