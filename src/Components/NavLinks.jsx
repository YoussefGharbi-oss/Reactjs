import React from 'react';
import './Home.css'
import NavContainer from './NavContainer';
import NavSign from './NavSign';

function NavLinks(props) {
    return (
        <div className='navbar-links'>
          <NavContainer />
          <NavSign />
        </div>
    
    );
} 

export default NavLinks;