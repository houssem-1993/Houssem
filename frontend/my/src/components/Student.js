import React from 'react'
import {Link} from "react-router-dom"
import {Card} from 'react-bootstrap'
function Student({student}) {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/student/${student._id}`}>
                <Card.Img src={student.image} variant='top' />
            </Link>
        <Card.Body>
            <Link to={`/student/${student._id}`}>
                <Card.Title as='div'><h3 style={{'color':'#1976d2'}}>{student.name} {student.forename} <br/>{student.cin}</h3></Card.Title>
            </Link> 
        </Card.Body>
            
        </Card>
    )
}

export default Student
