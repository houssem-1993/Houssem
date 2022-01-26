import { STUDENTS_LIST_FAIL,STUDENTS_LIST_SUCCESS,STUDENTS_LIST_REQUEST } from "../constants/students";


 const studentListReducer =(state= {students:[]},action) =>{
  switch (action.type) {
        case STUDENTS_LIST_SUCCESS:
          return{isLoad:false, students: action.payload}
        case STUDENTS_LIST_REQUEST:
            return{isLoad:true,students:[]}
        case STUDENTS_LIST_FAIL:
            return{isLoad:false,errors:action.payload}
      default:
          return state;
  }
}
 

export default studentListReducer
