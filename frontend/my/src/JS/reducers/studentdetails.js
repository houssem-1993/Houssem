import { STUDENT_DETAILS_REQUEST,STUDENT_DETAILS_SUCCESS,STUDENT_DETAILS_FAIL } from "../constants/students";

const initialState={student:{},isLoad:false,errors:false}

export const studentDetailsReducer = (state=initialState, action) => {
    switch (action.type) {
      case STUDENT_DETAILS_REQUEST:
        return { isLoad: true, ...state };
      case STUDENT_DETAILS_SUCCESS:
        return { isLoad: false, student: action.payload.student };
      case STUDENT_DETAILS_FAIL:
        return { isLoad: false, errors: action.payload };
      default:
        return state;
    }
  };

  export default studentDetailsReducer