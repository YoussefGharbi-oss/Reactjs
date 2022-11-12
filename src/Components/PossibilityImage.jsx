import React from 'react';
import Image from '../assetes/possibility.png'
import  { useEffect } from 'react';
import AOS from 'aos'

function PossibilityImage(props) {
    useEffect(()=>{
        AOS.init({
          offset: 200,
          duration: 1000,
          easing: 'ease-in-sine',
          delay: 100,
        });
        })
    return (
        <div>
           <div data-aos="fade-right" className='left-Image'>
                    <img src={Image} alt="Posibility " />
                 </div> 
        </div>
    );
}

export default PossibilityImage;