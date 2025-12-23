const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:String,
    email:{type:String,required:true,unique:true},
    pass:String,
    phone:Number
},{timeStamp:true})

module.export=mongoose.module("user",userSchema)