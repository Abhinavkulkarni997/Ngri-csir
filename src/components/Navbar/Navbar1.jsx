import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/CCMB-logo.png"; 
import logo1 from "../../assets/images/ngri-logo.png"; 
import { FaBars} from 'react-icons/fa';
import {RiCloseFill} from 'react-icons/ri';

const Navbar1 = () => {
  const[isMenuOpen,setIsMenuOpen]=useState(false);

  const toggleMenuOpen=()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
  <nav className="fixed top-0 left-0 bg-indigo-900/40 backdrop-blur-md border-b border-white/20 w-full shadow-md z-50 ">
  <div className="flex items-center justify-between p-4">
{/* Logo and Title Section */}
<div className="flex items-center space-x-2 md:space-x-4 shrink-0">
<Link to="/" className="flex items-center space-x-1 md:space-x-2">
<img src={logo} alt="logo" className="h-24 w-24 md:h-24 md:w-24"/>
<img src={logo1} alt="logo" className="h-24 w-24 md:h-24 md:w-24"/>
  <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
       <span className="text-white">CSIR-NGRI</span><br/>
        <span className="text-white">National Geophysical Research Institute</span>
  </h1>
</Link></div>

{/*Desktop view of Navigation */}
<ul className=" hidden gap-6 lg:flex items-center space-x-4 xl:space-x-6">
  <li><a href="#home" className="font-bold  hover:border-b-4 border-b-indigo-700 py-12  text-white  ">Home</a></li>
  <li><a href="#about" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">About Us </a></li>
  <li><a href="#R&DGroups" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">R & D Groups</a></li>
<li><a href="People" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">People</a></li>
 <li><a href="#Resources" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" >Resources</a></li>
 <li> <a href="#JoinUs" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">Join Us</a></li>
 <li><a href="#language" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">English</a></li>
 <li><a href="#screenreaderaccess" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">Screenreaderaccess</a></li>
 <div className="flex items-center">
 <li><a href="#staffCorner" className=" text-white font-bold transition-all duration-150 ease-in-out hover:bg-indigo-900 rounded-xl px-4 py-4 ">Staff Corner</a></li>
 </div>
</ul>


{/* Mobile Menu Button */}
<button onClick={toggleMenuOpen} className="rounded-lg">
{isMenuOpen?<RiCloseFill size={20}/>:<FaBars size={20} />}

</button>
{/*Mobile view of Navigation Menu*/}
{isMenuOpen &&(
<ul className="lg:hidden gap-6 items-center space-x-4 xl:space-x-6">
  <li><a href="#home" className="font-bold  hover:border-b-4 border-b-indigo-700 py-12  text-white  ">Home</a></li>
  <li><a href="#about" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">About Us </a></li>
  <li><a href="#R&DGroups" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">R & D Groups</a></li>
  <li><a href="People" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">People</a></li>
 <li><a href="#Resources" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" >Resources</a></li>
 <li> <a href="#JoinUs" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">Join Us</a></li>
 <li><a href="#language" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">English</a></li>
 <li><a href="#screenreaderaccess" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white">Screenreaderaccess</a></li>
 <div className="flex items-center">
 <li><a href="#staffCorner" className=" text-white font-bold transition-all duration-150 ease-in-out hover:bg-indigo-900 rounded-xl px-4 py-4 ">Staff Corner</a></li>
 </div>
</ul>
)}
</div>
</nav>

  );
};

export default Navbar1;
