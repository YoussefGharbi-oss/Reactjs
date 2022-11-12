import React from 'react';
import HeaderContainer from './HeaderContainer';
import './Home.css';

import Sponsor from './Sponsor';


function Header(props) {
    return (
    <div className='header '>
        <HeaderContainer />
        <Sponsor />
        
    </div>


       
      
    );
}

export default Header;

