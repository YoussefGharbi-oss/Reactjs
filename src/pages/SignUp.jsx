import React, { useState } from "react";
import { useRef } from "react";
import { Link } from 'react-router-dom';

import "../Components/SignUp.css";
import { useAuth } from "../Contexts/AuthContext";
import Image from "../assetes/undraw_the_world_is_mine_re_j5cr.svg"
import AOS from 'aos'
import  { useEffect } from 'react';


function SignUp(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Password didn t match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to Create an account");
    }

    setLoading(false);
  }
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })
  return (
    <div  className="sign-up-page">
    <h1 data-aos="fade-right" className="main-title">Welcome To Ainews</h1>
    <div  className="login">
       <img  data-aos="fade-left" className="login-Svg" src={Image} alt='bot Gif' />
    <div data-aos="fade-right" className="form-container">
      <h1>Sign up</h1>
    <form className="form" onSubmit={handleSubmit}>
      <div className="email">
        <label>Email</label>
        <input type={"email"} ref={emailRef} required />
      </div>
      <div className="password">
        <label>Password</label>
        <input type={"password"} ref={passwordRef} required />
      </div>
      <div className="password">
        <label>Password Confirmation{error && <div>{error}</div>}</label>
        <input type={"password"} ref={passwordConfirmationRef} required />
      </div>
      <button className="sign-up-btn" disabled={loading}>Sign-Up</button>
      <p className="tosignup-text">You  Have An Account ?<Link className="link" to="/login">Log In</Link></p>

    </form>
    </div>
    </div>
    </div>
  );
}

export default SignUp;
