import { STUDENT_DELETE_REQUEST, STUDENT_DELETE_SUCCESS, STUDENT_DELETE_FAIL } from "../constants/students";
 


const studentDeleteReducer= (state={},action) =>{
    switch (action.type) {
        case STUDENT_DELETE_REQUEST:
            return {isLoad:true}
        case STUDENT_DELETE_SUCCESS:
            return{isLoad:false,success:true}
        case STUDENT_DELETE_FAIL:
            return{isLoad:false,errors:action.payload}
    
        default:
            return state;
    }
}

export default studentDeleteReducer;