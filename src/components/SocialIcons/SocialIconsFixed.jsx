import React, { useEffect } from 'react'
import { SiFacebook } from "react-icons/si";
import { SiYoutube } from "react-icons/si";       
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';   
import { useRef } from 'react'; 
import {gsap} from 'gsap';
const SocialIconsFixed = () => {
    const iconContainer=useRef(null);

    useEffect(()=>{
        gsap.set(iconContainer.current, {x:100,opacity: 0})
        gsap.to(iconContainer.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            
        })
    }, [])
  return (
    <div ref={iconContainer} className=' group flex flex-col   right-0 top-1/3 z-50  space-y-3 p-1  fixed  md:flex'>
      <Link to="https://www.facebook.com/csirngrihyd/" className=' bg-[#0866FF] p-3 hover:transition-transform duration-300 hover:-translate-x-1 rounded-l group-hover:scale-105 text-white inline-flex gap-2'><SiFacebook className='text-white' size={20}/>Facebook</Link>
      <Link to="https://www.youtube.com/@csir-ngri" className=' bg-[#FF0000] p-3 hover:transition-transform duration-300 hover:-translate-x-1 rounded-l group-hover:scale-110 group-hover:max-w-[400px] text-white inline-flex gap-2'><SiYoutube className='text-white' size={20}/>YouTube</Link>
      <Link to="https://twitter.com/csirngri" className=' bg-[#000000] p-3 hover:transition-transform duration-300 hover:-translate-x-1 rounded-l group-hover:scale-110 group-hover:max-w-[300px] text-white inline-flex gap-2'><FaXTwitter className='text-white' size={20}/>Twitter</Link>
    </div>

  )
}

export default SocialIconsFixed