const isProfessor = (req,res,next) => {
    if(req.user.role=="professor"){
        next()
    }
    else{
        res.status(401).send({errors:[{msg:"you're not allowed"}]})
    }
}
module.exports = isProfessor;