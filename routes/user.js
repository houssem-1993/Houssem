const express =require('express')
const { Register, login,userList,deleteUser, updateUser, getUserById } = require('../controllers/userController')
const { validation, registerValidation, loginValidation } = require('../middlewares/userValidation')
const isAuth=require('../middlewares/isAuth')
const router= express.Router()

   
//register / sign up
router.post('/register',registerValidation(),validation,Register)



//login
router.post('/login',loginValidation(),validation,login)

router.get('/current',isAuth,(req,res)=> {
    res.send({user:req.user})

})
router.get('/users',userList)
router.delete('/user/:id',deleteUser)
router.put('/updateuser/:id',updateUser)
router.get('/user/:id',getUserById)
module.exports=router


