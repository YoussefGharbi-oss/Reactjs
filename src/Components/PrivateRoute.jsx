import React, { useEffect } from 'react'
import { Route,Navigate, Outlet, useNavigate} from 'react-router-dom'
import {useAuth} from '../Contexts/AuthContext'
import Login from '../pages/Login';
const PrivateRoute = ({ children }) => {
  return localStorage.getItem("Email") ?  children : <Navigate to="/login" />;
};

export default PrivateRoute
