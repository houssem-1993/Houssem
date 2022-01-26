import { CLEAR_ERRORS, CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOG_OUT, REGISTER_USER } from "../constants/user"

const initialState={
    user:null,
    errors:null,
    isLoad:false,
    isAuth:false,
}
const userReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_USER:
            return {...state,isLoad:true}
        case REGISTER_USER: 
            return {...state,isLoad:false,user:payload.user,isAuth:true}   
        case LOGIN_USER:
            localStorage.setItem('token',payload.token)
            return {...state,isLoad:false,user:payload.user,isAuth:true}  
        case CURRENT_USER:
            return {...state,user:payload.user,isLoad:false,isAuth:true}
        case FAIL_USER: 
            return {...state,errors:payload.errors,isLoad:false}
        case LOG_OUT:
            localStorage.removeItem('token')
            return {user:null,errors:null,isLoad:false,isAuth:false} 
        case CLEAR_ERRORS:
            return {...state,errors:null} 
    
        default:
            return state
    }
}
export default userReducer