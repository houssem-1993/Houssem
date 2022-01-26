import React, { useEffect, useState } from 'react'
import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { current, usersList,deleteUser } from '../JS/actions/user'
import UserUpdate from './UserUpdate'

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch()

//   const userList = useSelector((state) => state.userListReducer)
//   const { isLoad, errors, users } = userList
    const users = useSelector((state)=>state.userListReducer.users)
    const usersLoad=useSelector((state)=>state.userListReducer.isLoad)
    const usersErrors=useSelector((state)=>state.userListReducer.errors)

    const userDeleteSuccess = useSelector((state)=>state.studentDeleteReducer.success)
    const userDeleteIsLoad = useSelector((state)=>state.studentDeleteReducer.isLoad)
    const userDeleteErrors = useSelector((state)=>state.studentDeleteReducer.errors)
  const token = localStorage.getItem("token")
  const navigate= useNavigate()

  useEffect(() => {
    if(token) {dispatch(usersList())

    } else {
      navigate('/login')
    }
  }, [dispatch, history, token])


  return (
    <>
      <Col>
      <h1>Users</h1>
      </Col>
      <Col className='text-right'>
      <Link className='btn btn my-6' to='/register' style={{backgroundColor:'#1e386f',color:'whitesmoke'}}>
        Add new user
        </Link>
            </Col>
      {usersLoad ? (
        <Loader />
      ) : usersErrors ? (
        <Message variant='danger'>{usersErrors}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.role==='admin' ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/update/${user._id}`}>
                    <Button variant='info' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={()=> {let result=window.confirm('are you sure?') 
                    if(result){dispatch(deleteUser(user._id))}}}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default UserListScreen