const Student=require('../models/Student')

exports.AddStudent=async(req,res) => {
    try {
        const  cin = req.body
        const findStudent = await Student.findOne(cin)
        if(findStudent){
            return res.status(400).send({errors:[{message:"cin is unique"}]})
        }
        else{
            const newStudentt = req.body
            const newStudent = new Student(newStudentt)
            await newStudent.save()
            res.send({msg:"adding student with success",student:newStudent});
        }
    } catch (error) {
        console.log(error)
        res.send({errors:[{message:"cannot add a student"}]})
    }
}
exports.GetStudents = async (req,res) => {
        const students= await Student.find({})
        res.send(students)
}
exports.GetStudent=async (req,res) => {
        const student=await Student.findById(req.params.id)
        if(student){
            res.json(student)
            
        }else
        
        res.status(404).send({errors:[{message:"cant find student"}]})

}
exports.GetStudentById= async(req,res)=> {
    try {
        const student=await Student.findById({_id:req.params.id})
        res.status(200).send({student})
    } catch (error) {
        res.status(404).send({errors:[{message:"cant find student"}]})
    }
}


exports.UpdateStudent= async(req,res)=>{
        const {forename,name,birthday,section,cin,professor,sujet,credit,paid,valid,image}=req.body
        const student = await Student.findById(req.params.id)
        if (student){
            student.forename=forename
            student.name=name
            student.birthday=birthday
            student.section=section
            student.cin=cin
            student.professor=professor
            student.sujet=sujet
            student.credit=credit
            student.paid=paid
            student.valid=valid
            student.image=image

            const updatedStudent = await student.save()
            res.json(updatedStudent)
        }else{
            throw new Error('Student not found ')
        }
}
exports.DeleteStudent = async(req,res) => {
   
        const student= await Student.findOne(req.params.cin)
        if (student){
            await student.remove()
            res.json({message:"student removed"})
        }else{
            res.status(404)
        throw new Error ('News not found')
        }
    
}