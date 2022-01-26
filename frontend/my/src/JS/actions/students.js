import axios from 'axios'
import { STUDENTS_LIST_SUCCESS,STUDENTS_LIST_FAIL,STUDENTS_LIST_REQUEST, STUDENT_DETAILS_REQUEST, STUDENT_DETAILS_SUCCESS, STUDENT_DETAILS_FAIL, STUDENT_DELETE_REQUEST ,STUDENT_DELETE_SUCCESS,STUDENT_DELETE_FAIL, STUDENT_UPDATE_REQUEST,STUDENT_UPDATE_SUCCESS,STUDENT_UPDATE_FAIL, STUDENT_CREATE_REQUEST,STUDENT_CREATE_SUCCESS,STUDENT_CREATE_FAIL} from '../constants/students'



export const studentsList = () => async (dispatch) => {
    try {
        dispatch({type:STUDENTS_LIST_REQUEST})
        const {data} = await axios.get('/api/student');
        
        dispatch({
            type:STUDENTS_LIST_SUCCESS,
            payload:data,
        })
    } catch (error) {
        dispatch({type:STUDENTS_LIST_FAIL, payload: error.response.data})
    }
}
export const studentDetails=(id)=> async(dispatch) => {
    dispatch({type:STUDENT_DETAILS_REQUEST})
    try {
        

    const {data} = await axios.get(`/api/student/${id}`)
    
    dispatch({
        type: STUDENT_DETAILS_SUCCESS,
        payload: data,
        
      });
    } catch (error) {
        dispatch({type:STUDENT_DETAILS_FAIL
            ,payload:error.data})

    }
}

export const studentDelete=(id) => async (dispatch) =>{
    dispatch({type:STUDENT_DELETE_REQUEST})
    try {
        

         
          await axios.delete(`/api/student/${id}`);
          dispatch(studentsList())
    dispatch({
      type: STUDENT_DELETE_SUCCESS,
      payload: id,
    });

        } catch (error) {
            dispatch({type:STUDENT_DELETE_FAIL
                ,payload:error.data})
    
    }
}

export const studentUpdate=(student)=> async(dispatch) => {
    dispatch({type:STUDENT_UPDATE_REQUEST})

    try {
        
          
          const { data } = await axios.put(`/api/student/${student._id}`, student);
          dispatch({
            type: STUDENT_UPDATE_SUCCESS,
            payload: data,
          });
    } catch (error) {
        dispatch({type:STUDENT_UPDATE_FAIL
            ,payload:error.data})
    }

}
export const studentCreate= (newStudent) => async(dispatch) =>{

    dispatch({type:STUDENT_CREATE_REQUEST})
    try {
        
        const {data}= await axios.post(`/api/student/add`,newStudent);
        dispatch({type:STUDENT_CREATE_SUCCESS,payload:data})
        
      
    } catch (error) {
        dispatch({type:STUDENT_CREATE_FAIL
            ,payload:error.data})
    }
}