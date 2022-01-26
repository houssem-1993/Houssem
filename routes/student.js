const express= require('express')
const {AddStudent, GetStudents, UpdateStudent,GetStudent, GetStudentById, DeleteStudent}= require('../controllers/studentController')
const {validation,studentValidation,}= require('../middlewares/studentValidation')
const upload = require('../middlewares/upload')
const router= express.Router()


//add student
 router.post('/add',studentValidation(),validation,upload.single('image'),AddStudent)
 //get students
 router.get('/',GetStudents)
 //get student by id
//  router.get('/:id',GetStudent)
//  router.get(':/id',GetStudentById)
router.get('/:id',GetStudentById)
 //update student
 router.put('/update/:id',studentValidation(),validation,UpdateStudent)

router.delete('/:id',DeleteStudent)
 module.exports=router