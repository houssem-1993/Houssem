const mongoose=require('mongoose')

const {Schema,model}=mongoose

const UserSchema= new Schema({
    forename:{
        type:String,
    //    required:true,
    },
    name:{
        type:String,
      //  required:true,
    },
    email:{
        type:String,
       // required:true,
    },
    password:{
        type:String,
       // required:true,
    },
    phone:Number,
    role:{
        type:String,
        enum:["director","scolarityagent","admin","professor"]
    }
})

module.exports = user = model('user',UserSchema)