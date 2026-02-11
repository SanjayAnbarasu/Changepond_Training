import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
const ProtectedRouting = ({component}) => {
    const nav  =useNavigate()
useEffect(()=>{
    if(!sessionStorage.getItem('user')){
        nav('/login');
    }
},[])
    return (
        <div>
            {/* <h1>This is protected route Component</h1> */}
            <component></component>
        </div>
    )
}
export default ProtectedRouting
