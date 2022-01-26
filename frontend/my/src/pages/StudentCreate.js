import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Form, Button,Option } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { studentCreate } from '../JS/actions/students'



const StudentCreate = () => {

// const [forename, setForeName] = useState('')
// const [name, setName] = useState('')
// const [cin, setCin] = useState('')
// const [birthday, setBirthday] = useState('')
// const [section, setSection] = useState(0)
// const [professor, setProfessor] = useState('')
// const [credit, setCredit] = useState('')
// const [paid,setPaid]=useState('')
const [image,setImage]=('')
const [uploading,setUploading]=useState(false)

const dispatch = useDispatch()


const student=useSelector((state)=>state.studentCreateReducer.student)
const createIsLoad=useSelector((state)=>state.studentCreateReducer.isLoad)
const createError=useSelector((state)=>state.studentCreateReducer.errors)


const navigate=useNavigate()

const [NewStudent, setNewStudent] = useState({})
const handleStudent =(e) => {
    setNewStudent({...NewStudent,[e.target.name]:e.target.value})

}
const handleSubmit = (e)=> {
      e.preventDefault()
    dispatch(studentCreate(NewStudent))
    // setNewStudent({})

    navigate('/admin/students')

}

const uploadFileHandler = async (e) => {
  const file = e.target.files[0]
  const formData = new FormData()
  formData.append('image', file)
  setUploading(true)

  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    const { data } = await axios.post('/api/upload', formData, config)

    setImage(data)
    setUploading(false)
  } catch (error) {
    console.error(error)
    setUploading(false)
  }
}
    return (
        <>  
            <Link to='/admin/students' className='btn btn-info my-3'>Go back</Link>


      <FormContainer>
      <h1>Edit Student</h1>
     
          <Form onSubmit={handleSubmit} >
            <Form.Group controlId='forename'>
          <Form.Label>Forename</Form.Label>
          <Form.Control
            name='forename'
            type='text'
            placeholder='Enter forename'
            value={NewStudent.forename}
            onInput={handleStudent}
          ></Form.Control>
        </Form.Group>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
            name='name'
              type='text'
              placeholder='Enter your name'
              value={NewStudent.name}
              onInput={handleStudent}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='birthday'>
            <Form.Label>Birthday</Form.Label>
            <Form.Control
                name='birthday'
              type='date'
              placeholder='Enter your birthday'
              value={NewStudent.birthday}
              onInput={handleStudent}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='name'>
            <Form.Label>CIN</Form.Label>
            <Form.Control
            name='cin'
              type='number'
              placeholder='Enter your CIN'
              value={NewStudent.cin}
              onInput={handleStudent}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='name'>
            <Form.Label>Section</Form.Label>
            <Form.Control
            name='section'
              type='text'
              placeholder='Enter your section'
              value={NewStudent.section}
              onInput={handleStudent}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='professor'>
            <Form.Label>Professor</Form.Label>
            <Form.Control
            name='professor'
              type='text'
              placeholder='Enter your professor name'
              value={NewStudent.professor}
              onInput={handleStudent}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='sujet'>
            <Form.Label>sujet</Form.Label>
            <Form.Control
            name='sujet'
              type='text'
              placeholder='Enter your subject name'
              value={NewStudent.sujet}
              onInput={handleStudent}
            ></Form.Control>
          </Form.Group>
          
          
          <Form.Group controlId='credit'>
            <Form.Label>Credit</Form.Label>
            <Form.Select
            name='credit'
              type='select'
              placeholder='Enter credit'
              value={NewStudent.credit}
              onChange={handleStudent}
            ><option>yes</option><option>no</option></Form.Select>
          </Form.Group>
          <Form.Group controlId='paid'>
            <Form.Label>Paid</Form.Label>
            <Form.Select
            name='paid'
              type='select'
              placeholder='Enter Paid or not'
              value={NewStudent.paid}
              onChange={handleStudent}
            ><option>yes</option><option>no</option></Form.Select>
          </Form.Group>
          <Form.Group controlId='valid'>
            <Form.Label>valid</Form.Label>
            <Form.Select
              name='valid'
              type='select'
              placeholder='Enter valid or not'
              value={NewStudent.valid}
              onChange={handleStudent}
            ><option>yes</option><option>no</option></Form.Select>
          </Form.Group>

          {/* <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter image url'
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></Form.Control>
                            <Form.File id='image-file' label='Choose file' custom onChange={uploadFileHandler}>
                                {uploading && <Loader />}
                            </Form.File>
                        </Form.Group> */}
  
          <Button type='submit' variant='primary' onSubmit={handleSubmit}>
            Create Student
          </Button>
        </Form>
      
      

      
    </FormContainer>
        </>
    )
}

export default StudentCreate
