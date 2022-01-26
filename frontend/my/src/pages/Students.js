import {React,useEffect} from 'react'
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button,Row,Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from '../components/Message'
import { Navigate } from 'react-router';
import Student from '../components/Student';
import { current } from '../JS/actions/user';
import { studentsList } from '../JS/actions/students';

const Students = () => {
    const ListStudents = useSelector((state) => state.studentListReducer.students)
    const loadStudent=useSelector((state)=>state.studentListReducer.isLoad)
    const errors=useSelector((state)=>state.studentListReducer.errors)
    
   
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    useEffect(()=> {
        

        if(token) {dispatch(current());dispatch(studentsList())}
    
      },[dispatch,token])
    return (
        <>
           <h1 style={{color:'#800707'}}>Students</h1>
           {loadStudent? <Loader />:errors?<Message variant='danger'>{errors}</Message>:<Row>
                {ListStudents.map(student =>(
                    <Col key={student._id} sm={12} md={6} lg={4} xl={3}>
                        <Student student={student} />
                    </Col>
    ))}
            </Row>}
        </>
    )
}

export default Students
