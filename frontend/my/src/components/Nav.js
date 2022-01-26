import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../JS/actions/user';
import './nav.css'

export default function Nav() {
  const isAuth = useSelector((state)=>state.userReducer.isAuth)
  const user=useSelector((state)=>state.userReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout=()=>{
    dispatch(logout(),navigate('/login'))
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ESSECT
          </Typography>
          <div className='btns'>
              <Button className='btn-nav' ><Link to='/'>Home</Link></Button>
              {isAuth?<div><Button className='btn-nav' onClick={handleLogout}><Link to='/'>logout</Link></Button><Button><Link to='/students'>Students</Link></Button></div>:<div>
              <Button className='btn-nav' ><Link to='/login'>Login</Link></Button></div>}
              {isAuth&&(user.role==='scolarity-agent'||user.role==='admin')? <Button><Link to='admin/students'>students list management </Link> </Button>:null}
              {isAuth&&(user.role==='admin')?<Button><Link to='admin/usersList'>user list management</Link></Button>:null}
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
