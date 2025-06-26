import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/CCMB-logo.png"; 
import logo1 from "../../assets/images/ngri-logo.png"; // Import the second logo

const Navbar1 = () => {
  const[isMenuOpen,setIsMenuOpen]=useState(false);
  return (
  <nav className="fixed top-0 left-0 bg-indigo-900/40 background-blur-md border-b border-white/20 w-full shadow-md z-50 ">
  <div className="flex items-center justify-between p-4">
{/* Logo and Title Section */}
<div className="flex items-center space-x-2 md:space-x-4">
<Link to="/" className="flex items-center space-x-1 md:space-x-2">
<img src={logo} alt="logo" className="h-24 w-24 md:h-24 md:w-24"/>
<img src={logo1} alt="logo" className="h-24 w-24 md:h-24 md:w-24"/>
  <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
       <span className="text-white">CSIR-NGRI</span><br/>
        <span className="text-white">National Geophysical Research Institute</span>
  </h1>
</Link></div>

{/*Desktop view of Navigation Menu*/}
<ul className=" hidden gap-6  lg:flex items-center space-x-4 xl:space-x-6">
  <li><a href="#home" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">Home</a></li>
  <li><a href="#about" className="font-bold text-white">About Us </a></li>
  <li><a href="#R&DGroups" className="font-bold text-white">R & D Groups</a></li>
<li><a href="People" className="font-bold text-white">People</a></li>
 <li><a href="#Resources" className="font-bold text-white">Resources</a></li>
 <li> <a href="#JoinUs" className="font-bold text-white">Join Us</a></li>
 <li><a href="#language" className="font-bold text-white">English</a></li>
 <li><a href="#screenreaderaccess" className="font-bold text-white">Screenreaderaccess</a></li>

 <div className="flex items-center">
 <li><button className="rounded-lg bg-blue-700 text-white font-bold transition-all duration-700 ease-in-out hover:bg-blue-900 px-4 py-4 ">Staff Corner</button></li>
 </div>

  
</ul>
</div>
</nav>

  );
};

export default Navbar1;
