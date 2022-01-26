import { USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCESS } from "../constants/user"

 
 
 const userDeleteReducer = (state = {},action) => {
    switch(action.type){
        case USER_DELETE_REQUEST:
            return{isLoad:true}
        case USER_DELETE_SUCESS:
            return{isLoad:false,success:true}
        case USER_DELETE_FAIL:
            return {isLoad:false,errors:action.payload}
        default:
            return state
        
    }
}

export default userDeleteReducer