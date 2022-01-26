import { useSelector } from 'react-redux'
import {Navigate,Route} from 'react-router-dom'
import StudentList from '../pages/StudentList'
function AdminPrivateRoute({component,...rest}) {
    const token =localStorage.getItem('token')
    const isAuth= useSelector((state)=>state.userReducer.isAuth)
    if(!token&&!isAuth){
        return  <Navigate to='/login'/>
    }
       else return <StudentList/>
    ;
}

export default AdminPrivateRoute
