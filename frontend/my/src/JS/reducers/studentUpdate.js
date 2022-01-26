import {STUDENT_UPDATE_REQUEST,STUDENT_UPDATE_SUCCESS,STUDENT_UPDATE_FAIL,STUDENT_UPDATE_RESET} from '../constants/students'



const studentUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case STUDENT_UPDATE_REQUEST:
        return { isLoad: true };
      case STUDENT_UPDATE_SUCCESS:
        return { isLoad: false, success: true, student: action.payload };
      case STUDENT_UPDATE_FAIL:
        return { isLoad: false, errors: action.payload };
      case STUDENT_UPDATE_RESET:
        return { student: {} };
      default:
        return state;
    }
  };

  export default studentUpdateReducer