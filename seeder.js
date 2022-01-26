import mongoose from 'mongoose'
import dotenv from 'dotenv'
import students from './data/students'
import student from './models/Student'
import connectDB from './config/connectDB'

dotenv.config({path:'./.env'})
connectDB()

const importData = async () =>{
    try {
        await student.deleteMany()
        const simpleStudents = students.map((students) => {
            return { ...students }
            
          })
        await student.insertMany(simpleStudents)
        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}
const destroyData = async () => {
try {
    await student.deleteMany()
    console.log('Data destroyed!')
    process.exit()
} catch (error) {
    console.error(`${error}`)
        process.exit(1)
}
}

if (process.argv[2] === '-d') {
    destroyData()
  } else {
    importData()
  }