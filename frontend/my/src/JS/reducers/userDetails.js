import { STUDENT_DELETE_REQUEST, STUDENT_DETAILS_FAIL, STUDENT_DETAILS_REQUEST, STUDENT_DETAILS_SUCCESS } from "../constants/students";
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS } from "../constants/user";


const initialState={user:{},isLoad:false,errors:false}

 const userDetailsReducer=(state=initialState,action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {...state,isLoad:true}
        case USER_DETAILS_SUCCESS:
            return {...state,isLoad:false,user:action.payload.user}
        case USER_DETAILS_FAIL:
            return{isLoad:false,errors:action.payload}
        default:
            return state;
    }
}

export default userDetailsReducer