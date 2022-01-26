import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
function Profile() {
    const user=useSelector((state) => state.userReducer.user)
    const loadUser= useSelector((state) => state.userReducer.isLoad)
    return (
        <div style={{'height':'80vh'}}>{loadUser?
        (<Loader/>
            ):user?
        (<div style={{'margin':'7rem 30rem'}}>
            <h1 style={{'fontFamily':'cursive',color:'#b71c1c','fontSize':'6rem'}}>welcome Mr/Mrs:</h1>
        <h3 style={{'color':'#1976d2','fontFamily':'cursive','fontSize':'3rem'}}>{user.name} {user.forename}</h3>
        {/* <h3 style={{'color':'#1976d2','fontFamily':'cursive'}}>{user.forename}</h3> */}
        </div>):null }
        </div>
    )
}

export default Profile
