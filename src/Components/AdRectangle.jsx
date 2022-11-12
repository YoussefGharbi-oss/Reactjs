import React from 'react';
import  { useEffect } from 'react';
import AOS from 'aos'

function AdRectangle(props) {
    useEffect(()=>{
        AOS.init({
          offset: 200,
          duration: 1000,
          easing: 'ease-in-sine',
          delay: 100,
        });
        })
    return (
    <div data-aos="fade-right" className='Ad-Rectangle'>
           <p>Request Early Access to Get Started</p>
        <div className='center'>
           <h1>Register today & start exploring the endless News.</h1>
           <button className='btn-Possibility'>Get Started</button>
        </div>
    </div>
    );
}

export default AdRectangle;