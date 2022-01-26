import { STUDENT_CREATE_REQUEST,STUDENT_CREATE_SUCCESS,STUDENT_CREATE_FAIL,STUDENT_CREATE_RESET } from "../constants/students";




 const studentCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case STUDENT_CREATE_REQUEST:
        return { isLoad: true };
      case STUDENT_CREATE_SUCCESS:
        return { isLoad: false, success: true, student: action.payload };
      case STUDENT_CREATE_FAIL:
        return { isLoad: false, error: action.payload };
      case STUDENT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export default studentCreateReducer