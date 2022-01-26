const isStudent = (req,res,next) => {
    if(req.user.role=="student"){
        next()
    }
    else{
        res.status(401).send({errors:[{msg:"you're not allowed"}]})
    }
}
module.exports = isStudent;