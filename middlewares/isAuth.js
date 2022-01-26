const jwt=require('jsonwebtoken')
const User = require('../models/User')

const isAuth= async(req,res,next)=> {
 try {
    const token=req.headers['authorization']
    if(!token){
        res.status(401).send({errors:[{msg:'not authorized'}]})
    }

    const decoded=jwt.verify(token,process.env.SECRET_KEY)
    if(!decoded){
        return res.status(401).send({errors:[{msg:'not authorized'}]})}
        const findUser=await User.findById(decoded._id)
    req.user=findUser
 next();
 
 
 } catch (error) {
    res.status(401).send({errors:[{msg:'not authorized'}]})
 }
}

module.exports = isAuth