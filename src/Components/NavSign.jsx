import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

function NavSign(props) {
    let navigate = useNavigate()
    let {setCurrentUser} = useAuth()
    const handleClick=()=>{
        localStorage.clear();
        setCurrentUser(null)
        navigate("/login")
    }
    return (
        <div>
             <div className='navbar-sign'>
               
               <button onClick={handleClick} className='signin-btn' >Sign Out</button>
       </div> 
         
        </div>
    );
}

export default NavSign;