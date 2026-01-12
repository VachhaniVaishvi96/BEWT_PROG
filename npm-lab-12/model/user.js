const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    userId:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String
        
    }
},{timestamps:true})
module.exports=mongoose.model("user",userSchema)