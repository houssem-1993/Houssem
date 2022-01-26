import React,{useEffect,}from 'react'
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Table, Button,Row,Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { current } from '../JS/actions/user';
import { studentCreate, studentsList } from '../JS/actions/students';
import { useNavigate, useParams } from 'react-router-dom';
import { studentDelete } from '../JS/actions/students';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const ListStudent = useSelector((state) => state.studentListReducer.students)
    const loadStudents=useSelector((state)=>state.studentListReducer.isLoad)
    const errors=useSelector((state)=>state.studentListReducer.errors)
    
    const successDelete=useSelector((state) => state.studentDeleteReducer.success)
    const loadDelete=useSelector((state)=>state.studentDeleteReducer.isLoad)
    const errorDelete=useSelector((state)=>state.studentDeleteReducer.errors)

    const updatedStudent= useSelector ((state)=> state.studentUpdateReducer.student )
    const successUpdate=useSelector((state)=>state.studentUpdateReducer.success)
    const loadUpdate=useSelector((state)=>state.studentUpdateReducer.isLoad)
    const errorUpdate=useSelector((state)=>state.studentUpdateReducer.errors)

    const createdStudent=useSelector((state)=>state.studentCreateReducer.student)
    const successCreate=useSelector((state)=>state.studentCreateReducer.success)
    const loadCreate=useSelector((state)=>state.studentCreateReducer.isLoad)
    const errorCreate=useSelector((state)=>state.studentCreateReducer.errors)

    const dispatch = useDispatch()
    const history=useNavigate();
    const token = localStorage.getItem("token")
    
    useEffect(()=>{
        if(token) {dispatch(current());dispatch(studentsList())}
        if(createdStudent){history(`/student/${createdStudent._id}`)
    }else {dispatch(studentsList())}

    },[dispatch,])

    const deleteHandler= (id) => {
        if(window.confirm('are you sure?'))
        dispatch(studentDelete(id))
      };
      const createStudentHandler = () =>{
        dispatch(studentCreate())
      }
    
    return (
        <>
            <Row className='align-items-center'>
            <Col>
            <h1>Students List</h1>
            </Col>
            <Col className='text-right'>
               <Button className='my-3' ><Link to='/admin/addStudent' ><i className='fas fa-plus'> </i>Create Student</Link></Button>
            </Col>
            </Row>
                {loadDelete&&<Loader/>}
                {errorDelete&&<Loader/>}
                {loadCreate&&<Loader/>}
                {errorCreate&&<Loader/>}
                {loadStudents?(<Loader/>)
                : errors ? (
                    <Message variant="danger">{errors}</Message>
                  ):  
                  <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>FORENAME</th>                                                
              <th>NAME</th>
              <th>CIN</th>
            </tr>
          </thead>
         
          <tbody>
                {ListStudent.map((student)=>(
                    <tr key={student._id}>
                    <td>{student.forename}</td>
                    <td>{student.name}</td>
                    <td>
                      {student.cin}
                    </td>
    
                    
                    <td>
                      <LinkContainer to={`/admin/student/${student._id}/update`}>
                        <Button variant='info' className='btn-sm'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </LinkContainer>
                      <Button
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteHandler(student._id)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
          </tbody>
          </Table>
                  
                  }
            
        </>
    )
}

export default StudentList
