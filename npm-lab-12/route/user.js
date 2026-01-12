const express=require('express')
const router=express.Router()
const User=require('../model/user')
const mongoose=require('mongoose')
const bcrypt = require('bcrypt')

router.get('/user',async(req,res)=>{
    try{
    const user = await User.find();
    res.json({message:"Successfully fetched",allUser:user})
    }
   catch(err){
    res.json({err})
   }
})


router.get('/user/:id',async(req,res)=>{
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

router.post('/user/add',async(req,res)=>{
    try{
        const {userId,name,email,password,role}=req.body

        const hashPassword = await bcrypt.hash(password,10);
        // console.log(hashPassword);
    
        const user=await User.create({
            userId,
            name,
            email,
            password:hashPassword,
            role
        })
        // console.log(user);
        
        res.json({message:'user registered successfully',newUser:user})
    }
    catch(err){
        res.json({err})
    }
})

router.patch('/user/update/:id',async(req,res)=>{
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

router.get("/search", async (req, res) => {
    try{
        let {search, page=1, limit=5} = req.query;

        const skip=(page-1)*limit;

        let filter={};
        if (search) {
            filter = {
                $or: [
                    {name: { $regex: search, $options: "i"}},
                    {email: { $regex: search, $options: "i"}}
                ] 
            }
        }

        const total=await User.countDocuments(filter);
        const users = await User.find(filter).skip(skip).limit(limit).sort({createdAt: -1});

        res.status(200).json({
          message: "Users fetched",
          total,
          page,
          limit,
          users
        });
    }
    catch(err){
        res.status(500).json({message: "Internal Server Error"});
    }
});

module.exports=router