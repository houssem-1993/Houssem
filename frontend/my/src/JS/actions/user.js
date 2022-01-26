import axios from "axios"
import { USER_LIST_RESET } from "../constants/students"
import { CLEAR_ERRORS, CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOG_OUT, REGISTER_USER, USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS ,USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS,USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS} from "../constants/user"

export const register=(newUser)=> async (dispatch)=> {
    dispatch({type:LOAD_USER})
    try {
      let { data }= await axios.post('/api/user/register',newUser)
      dispatch({type:REGISTER_USER,payload:data})
      
    } catch (error) {
      // error.response.data.errors.map((el) => alert(el.msg))
      dispatch({type:FAIL_USER, payload: error.response.data})
    }
}
export const login=(user,history)=> async (dispatch)=> {
    dispatch({type:LOAD_USER})
    try {
      let {data}=await axios.post('/api/user/login',user)
      dispatch({type:LOGIN_USER,payload:data})
      history('/profile')
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response.data})
    }
}
export const current =()=> async(dispatch) => {
  const config={
    headers:{
      authorization:localStorage.getItem("token")
    }
  }
  dispatch({type:LOAD_USER})
  try {
    let {data} =await axios.get('/api/user/current',config)
    dispatch({type:CURRENT_USER,payload:data})
  } catch (error) {
    dispatch({type:FAIL_USER,payload:error.response.data})
  }
}
export const logout =() => {
  return{
    type:LOG_OUT
  }
}
export const clearErrors=() => {
  return{type:CLEAR_ERRORS}
}
export const usersList =  () => async (dispatch)=> {
  dispatch ({type:USER_LIST_REQUEST})
  
  try {
    let {data} = await axios.get('/api/user/users')
    dispatch({type:USER_LIST_SUCCESS,
    payload:data})
    
  } catch (error) {
      dispatch({type:USER_LIST_FAIL,payload:error.response.data})
        
  }
  
}

export const deleteUser = (id) => async (dispatch) => {
  // dispatch({type:{USER_DELETE_REQUEST}})
  try {
     await axios.delete(`/api/user/user/${id}`)
   
    dispatch(usersList())
  } catch (error) {
    dispatch({type:USER_DELETE_FAIL,payload:error.response.data})
  }
}
export const updateUser=(user,navigate) => async (dispatch) => {
  dispatch({type:{USER_UPDATE_REQUEST}})
  try {
    const {data} = await axios.put(`/api/user/updateuser/${user._id}`,user)
    dispatch({type:USER_UPDATE_SUCCESS,payload:data})
    navigate('/admin/usersList')
  } catch (error) {
    dispatch({type:USER_LIST_RESET,payload:error.data})
  }
}

export const userDetails=(id) => async(dispatch) => {
  dispatch({type:{USER_DETAILS_REQUEST}})
  try {
    const {data}= await axios.get(`/api/user/user/${id}`)

    dispatch({type:USER_DETAILS_SUCCESS,payload:data})
  } catch (error) {
    dispatch({type:{USER_DELETE_FAIL,payload:error.data}})
  }
}