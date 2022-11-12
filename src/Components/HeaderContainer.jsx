import React from 'react';
import HeaderImage from './HeaderImage';
import Headerleft from './Headerleft';
import './Home.css';

function HeaderContainer(props) {
    return (
        <div>
        <div className='header-container'>
            <Headerleft /> 
            <HeaderImage />
        </div>
        </div>
    );
}

export default HeaderContainer;