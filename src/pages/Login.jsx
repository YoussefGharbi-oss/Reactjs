import { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate ,Navigate} from 'react-router-dom';
import { useAuth } from "../Contexts/AuthContext";
import Home from './Home';
import AOS from 'aos'
import  { useEffect } from 'react';
import '../Components/Login.css'
import Image from '../assetes/undraw_firmware_re_fgdy.svg'

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error,setError]=useState("")
    const {login} = useAuth();
    const navigate=useNavigate();
   const {currentUser} = useAuth();
   useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },[])
   if(currentUser){
    navigate("/home ")

   }
async function handleSubmit(e) {
  e.preventDefault();
let {user,error}= await login(emailRef.current.value, passwordRef.current.value);
        if(error){
         
             setError('Incorrect email or password! Try again.')
        }
        else {
          window.localStorage.setItem("Email",JSON.stringify(emailRef.current.value))
          window.localStorage.setItem("Password",JSON.stringify(passwordRef.current.value))

         navigate("/home");
        }
       
    
    }
    

    
  return (
<div  className="login-page">
     <h1 data-aos="fade-right" className="main-title">Welcome To Ainews</h1>
    
    {
   
   
    <div  className="login">
       <img  data-aos="fade-left" className="login-Svg" src={Image} alt='bot Gif' />
    <div data-aos="fade-right" className="form-container">
      <h1>Login</h1>
     <form   className="form-login" onSubmit={handleSubmit}>
        <div className="email">
         <label>Email</label>
         <input type={"email"} ref={emailRef} required />
        </div>
        <div className="password">
         <label>Password</label>
         <input type={"password"} ref={passwordRef} required />
         {error && <span className="error">{error}</span>}
        </div>
      <button className="Login-btn">login</button>
      <p className="tosignup-text">You Don't Have Account ?<Link className="link" to="/signup">Sign Up</Link></p>
    </form>
    </div>
   </div> 
}
</div>
  )
}

export default Login