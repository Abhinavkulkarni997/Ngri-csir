import React from 'react'
import { SiFacebook } from "react-icons/si";
import { SiYoutube } from "react-icons/si";       
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';   
import { useRef } from 'react'; 

const SocialIconsFixed = () => {
    const iconContainer=useRef(null);

   
  return (
    <div ref={iconContainer} className=' group flex flex-col   right-0 top-1/3 z-50  space-y-3   fixed  md:flex'>
      <Link to="https://www.facebook.com/csirngrihyd/" className=' bg-[#0866FF] p-3 hover:transition-transform duration-300 hover:-translate-x-1 rounded-l group-hover:scale-105 text-white '><SiFacebook className='text-white' size={20}/></Link>
      <Link to="https://www.youtube.com/@csir-ngri" className=' bg-[#FF0000] p-3 hover:transition-transform duration-300 hover:-translate-x-1 rounded-l group-hover:scale-110  text-white '><SiYoutube className='text-white' size={20}/></Link>
      <Link to="https://twitter.com/csirngri" className=' bg-[#000000] p-3 hover:transition-transform duration-300 hover:-translate-x-1 rounded-l group-hover:scale-110  text-white '><FaXTwitter className='text-white' size={20}/></Link>
    </div>

  )
}

export default SocialIconsFixed