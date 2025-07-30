import React from 'react'
import { SiFacebook } from "react-icons/si";
import { SiYoutube } from "react-icons/si";       
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';    
const SocialIconsFixed = () => {
  return (
    <div className='relative  left-0 top-1/3 z-50  space-x-2 p-2 '>
      <Link to="https://www.facebook.com/csirngrihyd/"><SiFacebook /></Link>
      <Link to="https://www.youtube.com/@csirngri"><SiYoutube /></Link>
      <Link to="https://twitter.com/csirngri"><FaXTwitter /></Link>
    </div>

  )
}

export default SocialIconsFixed