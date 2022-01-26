const mongoose=require('mongoose')

const {Schema,model}=mongoose

const StudentSchema = new Schema({
    forename:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    birthday:{
        type:Date,
        required:true,
    },
    section:{
        type:String,
        required:true,
    },
    cin:{
        type:Number,
        required:true,
        unique:true,
    },
    professor:{
        type:String,
        required:true,
    },
    sujet:{
        type:String,
        required:true,
    },
    credit:{
        type:String,
        required:true,
    },
    paid:{
        type:String,
        required:true,
    },
    valid:{
        type:String,
        required:true,
        default:false,
    },
    image:{
        type:String,
        // required:true,
    }
})
module.exports = student = model('student',StudentSchema)