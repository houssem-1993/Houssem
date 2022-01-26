import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {ToastContainer,toast} from 'react-toastify'
import {clearErrors} from '../JS/actions/user'
function Notification({error}) {
    const [show,setShow] = useState(true)
    const dispatch=useDispatch()
    useEffect(()=>{
        setTimeout(()=>{
            setShow(false)
            dispatch(clearErrors())
        },5000)
    },[show,dispatch])
    return (
    <div>
        {show&&(<div>
            ('')
            {toast.error(error.msg)}
     <ToastContainer position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover />
        </div>
        )}
        
    </div>
    );
}


export default Notification
