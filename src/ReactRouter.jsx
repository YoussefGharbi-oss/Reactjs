import React, { useEffect } from 'react';
import "./pages/App"
import {Routes, Route } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
import Home from "./pages/Home";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {useNavigate,useLocation} from "react-router-dom"
import { useAuth } from './Contexts/AuthContext';
import App from './pages/App';
function ReactRouter(props) {
    const getEmail=JSON.parse(localStorage.getItem("Email"))
    const getPassword=JSON.parse(localStorage.getItem("Password"))
    const location = useLocation();
    const {login,currentUser} = useAuth()
    const navigate=useNavigate();
    useEffect(()=>{
        if(getEmail  && getPassword) { 
            login(getEmail,getPassword)
        return 
    }
        navigate("/login")
    },[location.pathname])
    return (
 
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/App" element={<App/>} />
        
        <Route path="/home" element={
        <PrivateRoute>
            <Home />
        </PrivateRoute>} />
     </Routes>
  

    );
}

export default ReactRouter;