import e from 'cors'
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser,userDetails } from '../JS/actions/user'
import {USER_UPDATE_RESET} from '../JS/constants/user'
import Loader from '../components/Loader'

function UserUpdate({user}) {
 


    const dispatch = useDispatch()
    const params=useParams()
    const navigate=useNavigate()

    const userDetail=useSelector((state)=>state.userDetailsReducer.user)
    const userLoad= useSelector((state)=> state.userDetailsReducer.isLoad )
    const errors=useSelector((state)=>state.userDetailsReducer.errors)

    const [name,setName]=useState(userDetail.name)
    const [forename,setForname]=useState(userDetail.forename)
    const [email,setEmail]=useState(userDetail.email)
    const [password,setPassword]=useState('')
    const [phone,setPhone]=useState('')
    const [role,setRole]=useState('');
    console.log("userDetail",userDetail)

    useEffect(()=>{
       
        dispatch(userDetails(params.id))
       
        setName(userDetail.name)
        setForname(userDetail.forename)
        setEmail(userDetail.email)
        setPassword(userDetail.password)
        setPhone(userDetail.phone)
        setRole(userDetail.role)
    },[dispatch])



//     const [editUser, setEditUser] = useState(userDetail)
//    // setEditUser(userDetail)

//     console.log("editUser",editUser)

//     const handleChange = (e) => {

//         setEditUser({...userDetail , [e.target.name]:e.target.value})
//     }

    const submitHandler = (e)=> {
        e.preventDefault()
        
        dispatch(updateUser({_id:params.id,name,forename,email,password,phone,role}
           , navigate
        ))
       
    }

    return (
        <>
            {userLoad?<Loader/>:<form>
            <h1>Edit user</h1>
            <label>Name</label>
            <input type='text'placeholder='enter your name' required name='name' onInput={(e) => setName(e.target.value)} value={name}/>
            <label>Forename</label>
            <input type='text'placeholder='enter your forename' required name='forename'onInput={(e) => setForname(e.target.value)} value={forename}/>
            <label>Email</label>
            <input type='email'placeholder='enter your Email' required name='email'onInput={(e) => setEmail(e.target.value)} value={email}/>
            <label>Password</label>
            <input type='password'placeholder='enter your password' min={6} required name='password'onInput={(e) => setPassword(e.target.value)} value={password}/>
            <label>Phone</label>
            <input type='number'placeholder='enter your Phone number' min={8} max={8} name='phone'onInput={(e) => setPhone(e.target.value)} value={phone}/>
            <label>Role</label>
            <select name='role' onInput={(e) => setRole(e.target.value)}>
                <option value={userDetail.admin}>admin</option>
                <option value={userDetail.scolarityagent}>scholarity agent</option>
                <option value={userDetail.professor}>professor</option>
                <option value={userDetail.director}>director</option>
            </select>
            <input type='submit' onClick={submitHandler}click value="Update"/>
        </form>}
             
        </>
    )
}

export default UserUpdate
