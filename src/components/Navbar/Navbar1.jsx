import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/CSIR-logo.png"; 
import logo1 from "../../assets/images/ngri-logo.png"; 
import { FaBars} from 'react-icons/fa';
import {RiCloseFill} from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import {MdOutlineKeyboardArrowDown}  from "react-icons/md";
import Language from '../../assets/images/Navbar/Language.png';
import diff_abled from '../../assets/images/Navbar/diff_abled.png';


const Navbar1 = () => {
  const[isMenuOpen,setIsMenuOpen]=useState(false);
  const [hoverOpen,setHoverOpen]=useState(false);

  const toggleMenuOpen=()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
  // <nav className=" fixed top-0 left-0 bg-gradient-to-br from-purple-500 via-blue-700 to-indigo-700  bg-sky-500/40 backdrop-blur-md border-b border-white/20 w-full max-w-full opacity-80 overflow-x-clip shadow-md z-50">
  <nav className=" fixed top-0 left-0 bg-[#550000] border-b border-white/20 w-full max-w-full  overflow-x-clip shadow-md z-50">
  <div className="flex items-center justify-between ">
{/* Logo and Title Section */}
<div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
<Link to="/" className="flex items-center space-x-1 md:space-x-2">
<img src={logo} alt="logo" className="h-24 w-24 md:h-24 md:w-24"/>
<img src={logo1} alt="logo" className="h-24 w-24 md:h-24 md:w-24"/>
  <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
      <span className=" animate-text bg-clip-text text-transparent bg-gradient-to-br from-orange-400 via-white to-green-600">CSIR-NGRI</span><br/>
      <span className=" animate-text bg-clip-text text-transparent bg-gradient-to-br from-orange-400 via-white to-green-600 ">National Geophysical Research Institute</span>
  </h1>
</Link>

</div>


{/*Desktop view of Navigation */}
<ul className=" hidden  flex-wrap  sm:flex-wrap md:flex-wrap xl:flex-wrap 2xl:flex-wrap lg:flex justify-center space-x-4 xl:space-x-6">
  <li><a href="#home" className="font-bold  hover:border-b-2 border-b-white py-12  text-white  ">Home</a></li>
  <li className="relative group" onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}>
  <a href="#about" className="font-bold text-white hover:border-b-4 border-b-white py-12">About
   <MdOutlineKeyboardArrowDown  size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
   <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform ">
  <div className="relative top-6 p-6 bg-white  rounded-xl shadow-xl w-full border-t-blue-500 ">
    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-6 ">
    <ul className="mt-3 text-[15px] text-gray-600 space-y-4 font-poppins font-semibold ">

<li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/our-director.php">Our Director</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/introduction-ngri.php">Introduction</a></li>
  <li  className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/previous_dir.php">Previous Directors</a></li>
  <li  className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/research-council.php">Research Council</a></li>
  <li  className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/management-council.php" >Management Council</a></li>
    </ul>
    </div>
    </div>
  </div>
  </div>
  </a>
  </li>
  <li className="relative group" onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}>
  <a href="#R&DGroups" className="font-bold text-white hover:border-b-4 border-b-white  py-12">R & D Groups
  <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
       <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-6 font-semibold font-poppins ">
    <ul className="mt-3 text-[15px] text-gray-600 space-y-2">
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/airborne-geophysics.php">Airborne Geophysics</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/computational-electro-magnetics.php">Computational Electromagnetics</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/consource-seismics-and-gashydrates.php">Controlled Source Seismics and Gas Hydrates</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/earthprocess-modelling.php">Earth Process Modelling</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/electrical-and-heliborne-geophysics.php">Earth and Heliborne Geophysics</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/geo-chemistry.php">Geochemistry</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/geo-chronology.php">Geochronology</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/geological-planetary-sciences.php">Geological and Planetary Sciences</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/geomagnetism.php">Geomagnetism</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/gravitymagnetics.php">Gravity and Magnetics</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/instrumentation-and-engineering-geophysics.php">Instrumentation and Engineering Geophysics</a></li>
   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/magneto-tellurics.php">Magnetotellurics</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/paleo-seismology.php">Paleo-Seismology</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/seismology.php">Seismology</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/shallowseismics.php">Shallow Seismics</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/tectonic-geodesy.php">Tectonic Geodesy</a></li>
  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/thermalgeophysics-rockmechanics-paleomagnetism.php">Thermal Geophysics,Rock Mechanics and Paleomagnetism</a></li>
</ul>
    </div>
    </div>
  </div>
  </div>
  </a>
  </li>
<li className="relative group" onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}>
<a href="#People" className="font-bold text-white hover:border-b-4 border-b-white py-12">People<MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
   <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-6 ">
    <ul className="mt-3 text-[15px] text-gray-600 space-y-2 font-semibold font-poppins">
<li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/researcher.php">Researcher</a></li>
<li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/technical-staff.php">Technical</a></li>
<li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/administration.php">Administration</a></li>
<li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/technicians.php">Technicians</a></li>
</ul>
    </div>
    </div>
  </div>
  </div>
  </a>
  </li>
 <li className="relative group"><a href="#Resources" className="font-bold text-white hover:border-b-4 border-b-white py-12" >Resources
 <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
    <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
   <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-6 font-semibold font-poppins space-y-2 ">
    <ul className="mt-3 text-[15px] text-gray-600 font-semibold font-poppins space-y-2">
 <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/annual-report.php">Annual Report</a></li>
 <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/library.php">Library</a></li>
 <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/gallery.php">Gallery</a></li>
 <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href ="https://www.ngri.res.in/cms/brochures.php">Brochures</a></li>
</ul>
</div>
</div>
</div>
</div>
</a>
  </li>
 

 <li className="relative group " onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)} >
  <a href="#JoinUs" className="font-bold text-white hover:border-b-4 border-b-white py-12 ">Join Us<MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
    <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-6 ">
    <div className="mt-3 text-[15px] text-gray-600 font-poppins font-semibold space-y-10">
 <ul className="relative" onMouseEnter={()=>setIsMenuOpen(true)} onMouseLeave={()=>setIsMenuOpen(false)}>
 <li className="cursor-pointer font-semibold px-4 py-2 hover:bg-[#FFFFE3]">Careers<MdOutlineKeyboardArrowRight className="inline-flex"/></li>
 {isMenuOpen && (
   <div className="absolute top-0 right-0 bg-white shadow-lg rounded-lg p-4">
     <ul>
       <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/openings-at-ngri.php">Openings</a></li>
       <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/past-openings-at-ngri.php">Past Openings</a></li>
     </ul>
   </div>
 )}
 </ul>
 

 <ul className="relative" onMouseEnter={()=>setIsMenuOpen(true)} onMouseLeave={()=>setIsMenuOpen(false)}>
 <li className="cursor-pointer font-semibold px-4 py-2 font-poppins">HRDG<MdOutlineKeyboardArrowRight className="inline-flex"/></li>
 {isMenuOpen && (
  <div className="absolute top-0 right-0 bg-white shadow-lg rounded-lg p-4 font-poppins font-semibold space-y-2">
    <ul>
      <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/hrdg.php">Info</a></li>
      <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/training-for-csir-ngri-staff.php">Training For CSIR-NGRI Staff</a></li>
      <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/international-fellowships.php">International Fellowships</a></li>
      <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/postdoctoral.php">Post Doctoral Fellows</a></li>
      <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"> <a href="https://www.ngri.res.in/cms/doctoralfellows.php">Doctoral Fellows and Project Staff</a></li>
      <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/skill-development.php">Skills Development</a></li>
      <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/on-campus-accommodation.php">On Campus Regulations(temporary project/research staff)</a></li>
    </ul>
  </div>
 )}
</ul>
 
 <li className="hover:text-blue-600 hover:bg-[#FFFFE3]" ><a href="https://www.ngri.res.in/cms/AcSIR.php"></a>AcSIR</li>
 <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/sac.php"></a>Student Affairs Committee</li>
 <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://rectt.ngri.res.in/jigyasa/"></a>Jigyasa</li>
 </div>
 </div>
 </div>
 </div>
 </div>
 </a>
 </li>

 <li className="relative group">
 <img src={Language} alt={"Language"} className="h-8 w-8 rounded-full"/>
 <a href="#language" className="font-bold text-white hover:border-b-4 border-b-white py-12">
 
 
{/* <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/> */}
 <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10">
    <div className="grid grid-cols-1 gap-6 ">
    <ul className="mt-3 text-[15px] text-gray-600 font-poppins font-semibold space-y-2">
 <li className="hover:bg-[#FFFFE3]">English</li>
 <li className="hover:bg-[#FFFFE3]">Telugu</li>
 <li className="hover:bg-[#FFFFE3]">Hindi</li>
    </ul>
</div>
</div>
</div>
</div>
 </a></li>
 <li className="relative group">
 <img src={diff_abled} alt={diff_abled} className="h-8 w-8 rounded-full"/>
 <a href="#screenreaderaccess" className="font-bold text-white hover:border-b-4 border-b-white py-12">
 
{/* <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180 hover:rotate-180"/> */}
 
  <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-6 ">
    <ul className="mt-3 text-[15px] text-gray-600 font-bold font-poppins space-y-2">
 <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/sra.php">Screenreaderaccess</a></li>
</ul>
</div>
</div>
</div>
</div>
 </a></li>

 {/* <div className="flex items-center"> */}
 <li><a href="#staffCorner" className=" text-white font-bold transition-all duration-150 ease-in-out hover:bg-sky-500  hover:text-white rounded-xl px-4 py-4 ">Staff Corner</a></li>
 {/* </div> */}
</ul>


{/* Mobile Menu Button */}
<button onClick={toggleMenuOpen} className="lg:hidden text-white text-xl p-2 rounded-lg hover:bg-sky-500/50 transition-colors" aria-label="Toggle menu">
{isMenuOpen?<RiCloseFill size={20}/>:<FaBars size={20} />}

</button>
</div>
{/*Mobile view of Navigation Menu*/}
{isMenuOpen &&(
<div className="lg:hidden bg-sky-500/40 backdrop-blur-md border-t border-white/20">
<ul className="flex flex-col space-y-2 p-4">
  <li><a href="#home" className="font-bold  hover:border-b-4 border-b-indigo-700 py-12  text-white current" onClick={()=>setIsMenuOpen(false)} >Home</a></li>
  <li><a href="#about" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}>About Us </a></li>
  <li><a href="#R&DGroups" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}> R & D Groups</a></li>
  <li><a href="People" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}>People</a></li>
 <li><a href="#Resources" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}>Resources</a></li>
 <li> <a href="#JoinUs" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}>Join Us</a></li>
 <li> <img src={Language} alt={"Language"} className="h-8 w-8 rounded-full"/><a href="#language" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}>English</a></li>
 <li><img src={diff_abled} alt={diff_abled} className="h-8 w-8 rounded-full"/><a href="#screenreaderaccess" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}>Screenreaderaccess</a></li>
 {/* <div className="flex flex-col space-y-2 p-4"> */}
 <li><a href="#staffCorner" className=" text-white font-bold transition-all duration-150 ease-in-out hover:bg-sky-500 rounded-xl px-4 py-2">Staff Corner</a></li>
 {/* </div> */}
 </ul>
</div>
)}

</nav>

  );
};

export default Navbar1;