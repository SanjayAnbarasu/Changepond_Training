import React from 'react'
import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';
const LoginComp = () => {
    const nav = useNavigate();
    const newUser = useRef();
    const newPass = useRef();
    return (
        <div>
            <h2>Login Page</h2>
            <form>
                <input type='text' name='' placeholder='Enter User Id'><br></br></input>
                <input type='text' name='' placeholder='Enter User Id'><br></br></input>
                <button type='submit' className='btn btn-outline-primary'>Login</button>
            </form>
        </div>
    )
}
export default LoginComp
