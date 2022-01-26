import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate,Route} from 'react-router-dom'
import Profile from '../pages/Profile'

function PrivateRoute({component,...rest}) {
    const token =localStorage.getItem('token')
    const isAuth= useSelector((state)=>state.userReducer.isAuth)
    if(!token&&!isAuth){
        return  <Navigate to='/login'/>
    }
       else return <Profile/>
    ;
}

export default PrivateRoute
