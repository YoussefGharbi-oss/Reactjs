import React from 'react';
import './Feature.css'
import AOS from 'aos'
import  { useEffect } from 'react';

function PossibilityText(props) {
    useEffect(()=>{
        AOS.init({
          offset: 200,
          duration: 1400,
          easing: 'ease-in-sine',
          delay: 100,
        });
})
 
    return (
     
        <div data-aos="fade-right" className='right-text'>
           <span>It can draw in readers</span>
           <h1 >The possibilities are beyond your imagination</h1>
           <p className='Feature-paragraph'>Voice recognition is the process of identifying a speaker's voice in an audio or video recording. It can be used to identify the person speaking, to locate specific sounds in the recording, or to recognize certain words or phrases.</p>
           <p   className='last-text'>Request Early Access to Get Started</p>
        </div>
        
    );
}

export default PossibilityText;