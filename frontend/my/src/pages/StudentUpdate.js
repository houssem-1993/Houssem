import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { STUDENT_UPDATE_RESET } from '../JS/constants/students'
import { studentDetails, studentUpdate } from '../JS/actions/students'


const StudentUpdate = () => {

    const [name,setName]=useState('')
    const [forename,setForeName]=useState('')
    const [cin,setCin]=useState('')
    const [birthday,setBirthday]=useState('')
    const [section,setSection]=useState('')
    const [professor, setProfessor] = useState('')
    const [credit, setCredit]=useState('')
    const [topic,setTopic]=useState('')
    const [valid,setValid]=useState('')
    const [image,setImage]=useState('')
    const [paid,setPaid]=useState('')

    const dispatch = useDispatch()
    const params=useParams()
    const navigate=useNavigate()
    const studentDetail = useSelector((state) => state.studentDetailsReducer.student)
    const studentLoad= useSelector((state)=> state.studentDetailsReducer.isLoad)
    const errors=useSelector ((state)=>state.studentDetailsReducer.errors) 

    const success=useSelector((state)=> state.studentUpdateReducer.success)
    const isLoad=useSelector((state)=>state.studentUpdateReducer.isLoad)
    const errorsUpdate=useSelector((state)=>state.studentUpdateReducer.errors)


    useEffect(()=>{
        if(success){
            dispatch({type:STUDENT_UPDATE_RESET})
            navigate('/admin/students')
        }else{
            if(!studentDetail.name||studentDetail._id!==params.id){
            dispatch(studentDetails(params.id))}
            else {
                setName(studentDetail.name)
                setForeName(studentDetail.forename)
                setBirthday(studentDetail.birthday)
                setCin(studentDetail.cin)
                setProfessor(studentDetail.professor)
                setSection(studentDetail.section)
                setTopic(studentDetail.sujet)
                setCredit(studentDetail.credit)
                setImage(studentDetail.image)
                setPaid(studentDetail.paid)
                setValid(studentDetail.valid)
            }
        }
    },[dispatch,studentDetail,success])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            studentUpdate({
            _id:studentDetail.id,
            name,
            forename,
            cin,
            birthday,
            section,
            professor,
            credit,
            topic,
            valid,
            image,
            paid
        }))
    }

    return (
        <>
           <Link to='/admin/students' className='btn btn-info my-3'>Go back</Link> 
           <FormContainer>
                <h1 style={{color:'#800707'}}>Update Student</h1>
                {studentLoad && <Loader/>}
                {errorsUpdate &&<Message varian='danger'>{errorsUpdate}</Message>}
                {isLoad ? <Loader /> : errors ? <Message variant='danger'>{errors}</Message> : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='forename'>
                            <Form.Label>Forename</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter forename'
                                value={forename}
                                onChange={(e) => setForeName(e.target.value)}
                            ></Form.Control>
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
                        <Form.Group controlId='birthday'>
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control
                                type='date'
                                placeholder='Enter birthday'
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                            <Form.Group controlId='cin'>
                                <Form.Label>CIN</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter category'
                                    value={cin}
                                    onChange={(e) => setCin(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='professor'>
                                <Form.Label>Professor</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter desccription'
                                    value={professor}
                                    onChange={(e) => setProfessor(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='section'>
                                <Form.Label>section</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter section'
                                    value={section}
                                    onChange={(e) => setSection(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='sujet'>
            <Form.Label>sujet</Form.Label>
            <Form.Control
            name='sujet'
              type='text'
              placeholder='Enter your subject name'
              value={topic}
              onChange={(e)=>setTopic(e.target.value)}
            ></Form.Control>
          </Form.Group>
          
          
          <Form.Group controlId='credit'>
            <Form.Label>Credit</Form.Label>
            <Form.Select
            name='credit'
              type='select'
              placeholder='Enter credit'
              value={credit}
              onChange={(e)=>setCredit(e.target.value)}
            ><option>yes</option><option>no</option></Form.Select>
          </Form.Group>
          <Form.Group controlId='paid'>
            <Form.Label>Paid</Form.Label>
            <Form.Select
            name='paid'
              type='select'
              placeholder='Enter Paid or not'
              value={paid}
              onChange={(e)=>setPaid(e.target.value)}
            ><option>yes</option><option>no</option></Form.Select>
          </Form.Group>
          <Form.Group controlId='valid'>
            <Form.Label>valid</Form.Label>
            <Form.Select
              name='valid'
              type='select'
              placeholder='Enter valid or not'
              value={valid}
              onChange={(e)=>setValid(e.target.value)}
            ><option>yes</option><option>no</option></Form.Select>
          </Form.Group>

                            <Button type='submit' variant='primary'>
                                Submit
                            </Button>
        </Form>
      )}
      

        </FormContainer>
        </>
    )
}

export default StudentUpdate
