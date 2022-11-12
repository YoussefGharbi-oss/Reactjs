import React from 'react'
import { AiFillFacebook, AiFillTwitterCircle,AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp} from "react-icons/io";
import  { useEffect } from 'react';
import AOS from 'aos'
function SociaIcons() {
    useEffect(()=>{
        AOS.init({
          offset: 200,
          duration: 1400,
          easing: 'ease-in-sine',
          delay: 100,
        });
      })
  return (
    <div  className='Social-icons'>
    <AiFillFacebook data-aos="fade-left" style={{ color: " #fb6c4c" }} size={50} />
    <AiFillTwitterCircle data-aos="fade-left" style={{ color: " #fb6c4c" }} size={50} />
    <IoLogoWhatsapp data-aos="fade-left"  style={{ color: " #fb6c4c" }} size={50} />
    <AiFillGithub data-aos="fade-left"style={{ color: " #fb6c4c" }} size={50} /> 

</div>
  )
}

export default SociaIcons