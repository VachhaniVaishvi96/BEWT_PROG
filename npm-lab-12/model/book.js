const mongoose= require('mongoose')
const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    author:String,

    totalQuantity:{
        type:Number,
        required:true,
        min:1
    },
    
    availableQuantity:{
        type:Number,
        required:true,
        min:0
    }
},{timestamps:true})
module.exports=mongoose.model("book",bookSchema)