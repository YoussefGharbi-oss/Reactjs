import React from 'react';
import ai from '../assetes/ai.png';
import AOS from 'aos'
import  { useEffect } from 'react';
function HeaderImage(props) {
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
            <div className="header-image">
            <img src={ai} />
            </div>
        </div>
    );
}

export default HeaderImage;