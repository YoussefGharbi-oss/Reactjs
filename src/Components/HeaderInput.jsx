import React from 'react';
import './header.css';

function HeaderInput(props) {
    return (
    <div className="header-content-input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
    </div>
    );
}

export default HeaderInput;