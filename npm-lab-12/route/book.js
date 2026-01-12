const express=require('express')
const bcrypt=require('bcrypt')
const router=express.Router()
const mongoose=require('mongoose')
const Book=require('../model/book')

router.get('/book',async(req,res)=>{
    try{
    const book = await Book.find();
    res.json({message:"Successfully fetched",allBook:book})
    }
   catch(err){
    res.json({err})
   }
})


router.get('/book/:id',async(req,res)=>{
    try{
    const book = await Book.findById(req.params.id);

    if(!book){
        res.status(404).json({message:"book not found"})
    }
    res.json({message:"successfully fetched",OneBook:book})

    }
    catch(err){
        res.json({err});
    }
})

router.post('/book/add',async(req,res)=>{
    try{
        const {title,author,totalQuantity,availableQuantity}=req.body
        
        const book=await Book.create({
            title,
            author,
            totalQuantity,
            availableQuantity
        })
        res.json({message:'book registered successfully',newBook:book})
    }
    catch(err){
        res.json({err})
    }
})

router.patch('/book/update/:id',async(req,res)=>{
    try{
        const book = await Book.findByIdAndUpdate(
            req.params.id
        ,{
            $set:req.body
        },
    {
        new:true
    })
    res.json({message:"successfully updated",upadatedBook:book})
    }
    catch(err){
    res.json({err})
}
})


module.exports=router