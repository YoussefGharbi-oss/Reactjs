import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'

function NavContainer(props) {

  return (

    <div className='navbar-container'>
      <Link className='navbar-elements' to='/home'>Home </Link>

      <Link className='navbar-elements' to='/App'>AiNews</Link>
      <Link className='navbar-elements' to=''>About Us</Link>
    </div>

  );
}

export default NavContainer;