import React from 'react';
import './header.css';
import HeaderText from './HeaderText';
import HeaderInput from './HeaderInput';
import People from './People';
import AOS from 'aos'

import  { useEffect } from 'react';

function Headerleft(props) {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })
    return (
    <div data-aos="fade-left"  className='left-header'>
        <HeaderText />
        <HeaderInput />
        <People />
      </div>


    );
}

export default Headerleft;