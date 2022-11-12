import React from 'react';
import Detail from '../Components/Detail.css'
import  { useEffect } from 'react';
import AOS from 'aos'
function DetailCard(props) {
   
     useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })

    return (
        <div data-aos="fade-up" className='Detail-card'>
    <div className='mid-detail'>
        <div className='part-1'>
           <div className='line'></div>
           <h1>{props.Title}</h1>
        </div>
         <div className='part-2'>
            <p>{props.paragraph}</p>
         </div>
        </div>
    </div>
                  
    );
}

export default DetailCard;