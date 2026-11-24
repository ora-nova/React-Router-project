import {useState} from 'react'
import { useLocation, useNavigate} from 'react-router'
export default function Login({onLogin}){
const[text, setText]=useState('');
const[password, setPassword]=useState('');
const Location=useLocation();
const navigate=useNavigate()
const from=Location.state?.from?.pathname || "/dashboard"

function handleLogin(){
onLogin();
navigate(from, {replace: true})
}

function handlechange(e){
    setText(e.target.value)
}
return(
    <>
    <h1>Login page</h1>
    <input value={text} placeholder='type usename' onChange={handlechange}/>
    <input type="password" value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} />
    <button onClick={handleLogin} > Login</button>
    </>
)
}