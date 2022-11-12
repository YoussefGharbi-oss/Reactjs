import React from 'react'
import  { useEffect } from 'react';
import AOS from 'aos'

function FooterText() {
  
     useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 1400,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })
    return (
        <div data-aos="fade-up" className='part1'>
            <h1 className='footer-text'>Do you want to step in to the future before others</h1>
            <button className='demo-btn'>Request a demo </button>
        </div>
    )
}

export default FooterText