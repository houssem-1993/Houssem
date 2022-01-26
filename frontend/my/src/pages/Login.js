import React,{useState,} from 'react'
import {useNavigate} from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux'
import {login} from '../JS/actions/user'
import Notification from '../components/Notification';
import './auth/register.css'

const Login = () => {
    const [user,setUser]= useState({
        email:'',
        password:'',

    })
    const errors=useSelector((state) =>state.userReducer.errors )
    const history=useNavigate();
    const dispatch=useDispatch()
    
    const handleUser=(e)=> {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login(user,history))
        setUser({
            email:'',
            password:'',
        })
    }   
    return (
        <>
        {errors&&errors.map((el)=> <Notification error={el}/>)}
        <form>
            <h1>Please enter your E-mail and Password to login</h1>
            <label>Email</label>
            <input type='email'placeholder='enter your Email' required name='email'onInput={handleUser}value={user.email}/>
            <label>Password</label>
            <input type='password'placeholder='enter your password' min={6} required name='password'onInput={handleUser}value={user.password}/>
            <input type='submit' onClick={handleLogin}click value="Login"/>
        </form>
        </>
    )
}

export default Login
