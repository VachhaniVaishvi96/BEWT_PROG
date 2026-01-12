const express=require('express')
const router=express.Router()
const Faculty=require('../model/faculty')
const mongoose=require('mongoose')

//getAll
router.get('/',async(req,res)=>{
    try{
        const faculty=await Faculty.find()
        res.json({message:"faculty fetched",allfaculty:faculty})
    }
    catch(err){
        res.json({err})
    }
})

router.get('/:id',async(req,res)=>{
    
})

module.exports=router