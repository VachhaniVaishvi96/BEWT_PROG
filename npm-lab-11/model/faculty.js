const mongoose=require('mongoose')

const facultySchema=mongoose.Schema({
    FacultyName:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    FacultyEmail:{
        type:String,
        require:true
    },
    FacultyPhone:{
        type:Number,
        require:true
    }
},{timestamp:true})

module.export=mongoose.model('faculty',facultySchema)