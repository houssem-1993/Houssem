const User = require("../models/User")
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken')
const { findById } = require("../models/User")
exports.Register= async (req,res)=>{
    try {
        const  {email,password} = req.body
        const findUser = await User.findOne({email})
        if (findUser){
            return res.status(400).send({errors:[{message:"email is unique"}]})
        }
        //hashing password
        const saltRound=10
        const hashedPassword= bcrypt.hashSync(password,saltRound)
        const newUser = new User ({...req.body})
        newUser.password= hashedPassword

        

        await newUser.save()

        res.send({msg:"register success",user:newUser});
    } catch (error) {
        res.send({errors:[{message:"cannot register the user"}]})
    }
}
exports.login= async (req,res)=>{
    try {
        const {email,password}=req.body
        //check if email exist
        const findUser = await User.findOne({email})
        if (!findUser){
            return res.status(400).send({errors:[{msg:"bad credantial"}]})
        }
        //check if the password is correct
        const testPassword= bcrypt.compareSync(password,findUser.password)
        if(!testPassword){
            return res.status(400).send({errors:[{msg:"bad credantial"}]})
        }

        const token=jwt.sign(
            {
            _id:findUser._id
        },
        process.env.SECRET_KEY ,{expiresIn:'1h'});
        return res.status(200).send({msg:"login success",user:findUser,token})
    } catch (error) {
        console.log(error)
        return res.status(400).send({msg:'cant login',error});
    }
};
exports.deleteUser =async(req,res) =>{
        try {
        await User.deleteOne({_id:req.params.id})
            
        res.status(200).send({msg:'user deleted'})
        } catch (error) {
            return res.status(400).send({msg:'cannot delete user'})
        }
      
}
exports.userList = async(req,res)=> {
    try {
        const users = await User.find()
     return   res.status(200).send(users)
    } catch (error) {
        return res.status(400).send({msg:'cannot find users'})
        
    }
}


    // exports.updateUser = async (req,res) => {
        
    //    try {
    //     const {id} = req.params
    //        const updated = await User.findOne({_id: req.params.id})
    //        if(updated){
    //           return req.status(200).send({msg:'user updated',updated})
    //        }
    //    } catch (error) {
    //       return res.status(400).send({msg:'user update failed', error})
    //    }
    // }

    exports.updateUser= async (req,res) => {
        const user = await User.findById(req.params.id)

        try {
            if (user) {
                user.name = req.body.name || user.name
                user.forename=req.body.forename||user.forename
                user.email = req.body.email || user.email
                user.phone=req.body.phone||user.phone
                user.role=req.body.role||user.role
                if (req.body.password) {
                  user.password = req.body.password
                }
            
                const updatedUser = await user.save()
            
                res.json({
                  _id: updatedUser._id,
                  name: updatedUser.name,
                  forename:updatedUser.forename,
                  email: updatedUser.email,
                  phone:updatedUser.phone,
                    role:updatedUser.role
                })
        }} catch (error) {
           return res.status(404).send({msg:'user update failed', error})
        }
    }

    exports.getUserById = async(req,res) => {
        try {
            const user=await User.findById({_id:req.params.id})
            res.status(200).send({user})
        } catch (error) {
            res.status(400).send({errors:[{message:"cant find user"}]})
        }
    }