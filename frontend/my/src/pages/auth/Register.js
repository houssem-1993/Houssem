import React,{useState,} from 'react'
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {register} from '../../JS/actions/user'
import Notification from '../../components/Notification'
import './register.css'

const Register = () => {
    const [user,setUser]= useState({
        name:'',
        forename:'',
        email:'',
        password:'',
        phone:0,

    })
    const errors=useSelector((state) =>state.userReducer.errors )
    const history=useNavigate();
    const dispatch=useDispatch()
    
    const handleUser=(e)=> {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleRegister=(e)=>{
        e.preventDefault()
        dispatch(register(user,history))
        setUser({
            name:'',
            forename:'',
            email:'',
            password:'',
            phone:'',
    
        })
    }   
    return (
        <>
        {errors&&errors.map((el)=> <Notification error={el}/>)}
        <form>
            <h1>Add a new user</h1>
            <label>Name</label>
            <input type='text'placeholder='enter your name' required name='name' onInput={handleUser} value={user.name}/>
            <label>Forename</label>
            <input type='text'placeholder='enter your forename' required name='forename'onInput={handleUser}value={user.forename}/>
            <label>Email</label>
            <input type='email'placeholder='enter your Email' required name='email'onInput={handleUser}value={user.email}/>
            <label>Password</label>
            <input type='password'placeholder='enter your password' min={6} required name='password'onInput={handleUser}value={user.password}/>
            <label>Phone</label>
            <input type='text'placeholder='enter your Phone number' name='phone'onInput={handleUser}value={user.phone}/>
            <input type='submit' onClick={handleRegister}click value="Register"/>
        </form>
        </>
    )
}

export default Register
