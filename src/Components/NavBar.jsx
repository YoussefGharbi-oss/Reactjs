import React from 'react';

import  { useEffect } from 'react';

import NavLinks from './NavLinks';
import AOS from 'aos'
import 'aos/dist/aos.css'
function NavBar(props) {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })
    return (
        <div  className='Navbar'>
          <div  data-aos="fade-right"className='left-Nav'>
             <NavLinks  />
          </div>
          <div className='right-Nav'>
            
          </div>
        
        </div>
    );
}

export default NavBar;