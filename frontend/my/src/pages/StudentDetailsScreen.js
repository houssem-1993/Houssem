import React,{useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Loader from "../components/Loader";
import Message from '../components/Message'
import { current } from '../JS/actions/user';
import {studentDetails} from '../JS/actions/students'
import { Row ,Col,Image,ListGroup} from 'react-bootstrap';
export const StudentDetailsScreen = () => {

    const studentDetail = useSelector((state) => state.studentDetailsReducer.student)
    const studentLoad= useSelector((state)=> state.studentDetailsReducer.isLoad)
    const errors=useSelector ((state)=>state.studentDetailsReducer.errors)
    const dispatch = useDispatch()
    const params= useParams()
    const token = localStorage.getItem("token")
    useEffect(()=> {
        
        
        if(token&&params.id) {dispatch(current());dispatch(studentDetails(params.id))}
    
      },[dispatch,token,params])
      
    return (
        <>
            <Link className='btn btn my-3' to='/students' style={{backgroundColor:'#21386f',color:'whitesmoke'}}>
        Go back
        </Link>
        {studentLoad ? <Loader />:errors? <Message variant='danger'>{errors}</Message>:(
           <Row>
                <Col md={6}>
                <Image src={studentDetail.image} alt={studentDetail.name} style={{width:'30rem',height:'30rem',}} />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                     <h1 style={{color:'#800707'}}>{studentDetail.name}</h1>   
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <h1 style={{color:'#800707'}}>{studentDetail.forename}</h1>   
                    </ListGroup.Item>
                    <ListGroup.Item>
                     CIN:{studentDetail.cin}
                    </ListGroup.Item>
                    <ListGroup.Item>
                     birthday:{studentDetail.birthday}   
                    </ListGroup.Item>
                    <ListGroup.Item>
                     section:{studentDetail.section}
                    </ListGroup.Item>
                    <ListGroup.Item>
                     professor:{studentDetail.professor}
                    </ListGroup.Item>
                    <ListGroup.Item>
                     credit:{studentDetail.credit}
                    </ListGroup.Item>
                    <ListGroup.Item>
                     topic:{studentDetail.sujet}
                    </ListGroup.Item>
                    <ListGroup.Item>
                     paid:{studentDetail.paid}
                    </ListGroup.Item>

                </ListGroup>
            </Col>
           </Row>
        )}
        </>
    )
}

