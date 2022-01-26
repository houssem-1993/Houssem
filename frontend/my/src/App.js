import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/auth/Register'
import Nav from './components/Nav'
import Error from './pages/Error'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current, } from './JS/actions/user'
import PrivateRoute from './routers/PrivateRoute'
import Students from './pages/Students';
import { StudentDetailsScreen } from './pages/StudentDetailsScreen';
import AdminPrivateRoute from './routers/AdminPrivateRoute';
import StudentCreate from './pages/StudentCreate';
import UsersList from './pages/UsersList'
import Footer from './components/Footer';
import AgentUpdateRoute from './routers/AgentUpdateRoute';
import UserUpdate from './pages/UserUpdate';
const App =() => 
  {const dispatch=useDispatch();
    const token=localStorage.getItem("token")
    useEffect(()=> {
      if(token) dispatch(current())
    },[dispatch,token])
  return (
    
    <>
    <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<PrivateRoute/>}/>
      <Route path='/students' element={<Students/>}/>
      <Route path= 'student/:id' element={<StudentDetailsScreen/>}/>
      <Route path='/admin/students' element={<AdminPrivateRoute/>}/>
      <Route path='/admin/addStudent' element={<StudentCreate/>}/>
      <Route path='/admin/usersList' element={<UsersList/>}/>
      <Route path='/admin/student/:id/update' element={<AgentUpdateRoute/>}/>
      <Route path='/admin/user/update/:id' element={<UserUpdate/>}/>
      <Route path='/*' element={<Error/>}/>

     </Routes>
     <Footer/>
    </>
  );
}

export default App;
