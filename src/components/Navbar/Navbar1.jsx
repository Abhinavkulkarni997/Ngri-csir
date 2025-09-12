// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/images/CSIR-logo.png"; 
// import logo1 from "../../assets/images/ngri-logo.png"; 
// import { FaBars} from 'react-icons/fa';
// import {RiCloseFill} from 'react-icons/ri';
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// import {MdOutlineKeyboardArrowDown}  from "react-icons/md";
// import Language from '../../assets/images/Navbar/Language.png';
// import diff_abled from '../../assets/images/Navbar/diff_abled.png';


// const Navbar1 = () => {
//   const [isMenuOpen,setIsMenuOpen]=useState(false);
//   const [hoverOpen,setHoverOpen]=useState(false);
//   const [carrersMenuOpen,setIsCarrersMenuOpen]=useState(false);
//   const [hrdgMenuOpen,setIsHrdgMenuOpen]=useState(false);

//   const toggleMenuOpen=()=>{
//     setIsMenuOpen(!isMenuOpen);
//   }

//   return (
//   // <nav className=" fixed top-0 left-0 bg-gradient-to-br from-purple-500 via-blue-700 to-indigo-700  bg-sky-500/40 backdrop-blur-md border-b border-white/20 w-full max-w-full opacity-80 overflow-x-clip shadow-md z-50">
// //  <nav className=" fixed top-0 left-0 bg-[#550000] border-b border-white/20 w-full max-w-full  overflow-x-clip shadow-md z-50"></nav>
//  <nav className=" fixed top-0 left-0 bg-[#4682B4] border-b border-white/20 w-full max-w-full  overflow-x-clip shadow-md z-50">
//   <div className="flex items-center justify-between ">
// {/* Logo and Title Section */}
// <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
// <Link to="/" className="flex items-center space-x-1 md:space-x-2">
// <img src={logo} alt="logo" className="h-24 w-24 md:h-24 md:w-24"/>
// <img src={logo1} alt="logo" className="h-24 w-24 md:h-24 md:w-24"/>
//   <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
//       <span className=" animate-text bg-clip-text text-transparent bg-gradient-to-br from-orange-400 via-white to-green-600">CSIR-NGRI</span><br/>
//       <span className=" animate-text bg-clip-text text-transparent bg-gradient-to-br from-orange-400 via-white to-green-600 ">National Geophysical Research Institute</span>
//   </h1>
// </Link>
// </div>


// {/*Desktop view of Navigation */}
// <div className="flex lg:flex space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-12 ">
// <ul className=" hidden  flex-wrap  sm:flex-wrap md:flex-wrap xl:flex-wrap 2xl:flex-wrap lg:flex justify-center space-x-4 xl:space-x-6">
//   <li><a href="#home" className="font-bold  hover:border-b-2 border-b-white py-12  text-white  ">Home</a></li>
//   {/* <li className="relative group" onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}>
//   <a href="#about" className="font-bold text-white hover:border-b-4 border-b-white py-12">About
//    <MdOutlineKeyboardArrowDown  size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
//    <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
//   group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform ">
//   <div className="relative top-6 p-6 bg-white  rounded-xl shadow-xl w-full border-t-blue-500 ">
//     <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
//     </div>
//     <div className="relative z-10 ">
//     <div className="grid grid-cols-1 gap-6 ">
//     <ul className="mt-3 text-[15px] text-gray-600 space-y-4 font-poppins font-semibold ">

// <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/our-director.php">Our Director</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/introduction-ngri.php">Introduction</a></li>
//   <li  className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/previous_dir.php">Previous Directors</a></li>
//   <li  className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/research-council.php">Research Council</a></li>
//   <li  className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/management-council.php" >Management Council</a></li>
//     </ul>
//     </div>
//     </div>
//   </div>
//   </div>
//   </a>
//   </li> */}


//  <li className="relative group" onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}>
//   <a href="#about" className="font-bold text-white hover:border-b-4 border-b-white py-12">About
//    <MdOutlineKeyboardArrowDown  size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
//    <div className="absolute top-0 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
//   group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform ">
//   <div className="relative top-6 p-6 bg-white  rounded-xl shadow-xl w-full border-t-blue-500 ">
//     <div className="w-6 h-6 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm">
//     </div>
//     <div className="relative z-10 ">
//     <div className="grid grid-cols-1 gap-6 ">
//     <ul className="mt-3 text-[15px] text-gray-600 space-y-4 font-poppins font-semibold text-start">

// <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/our-director.php">Our Director</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/introduction-ngri.php">Introduction</a></li>
//   <li  className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/previous_dir.php">Previous Directors</a></li>
//   <li  className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/research-council.php">Research Council</a></li>
//   <li  className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/management-council.php" >Management Council</a></li>
//     </ul>
//     </div>
//     </div>
//   </div>
//   </div>
//   </a>
//   </li>



//   <li className="relative group" onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}>
//   <a href="#R&DGroups" className="font-bold text-white hover:border-b-4 border-b-white  py-12">R & D Groups
//   <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
//        <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
//   group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
//   <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
//     <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
//     </div>
//     <div className="relative z-10 ">
//     <div className="grid grid-cols-1 gap-6 font-semibold font-poppins text-start space-y-2">
//     <ul className="mt-3 text-[15px] text-gray-600 space-y-2 font-semibold font-poppins">
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/airborne-geophysics.php">Airborne Geophysics</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/computational-electro-magnetics.php">Computational Electromagnetics</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/consource-seismics-and-gashydrates.php">Controlled Source Seismics and Gas Hydrates</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/earthprocess-modelling.php">Earth Process Modelling</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/electrical-and-heliborne-geophysics.php">Earth and Heliborne Geophysics</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/geo-chemistry.php">Geochemistry</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/geo-chronology.php">Geochronology</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/geological-planetary-sciences.php">Geological and Planetary Sciences</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/geomagnetism.php">Geomagnetism</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/gravitymagnetics.php">Gravity and Magnetics</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/instrumentation-and-engineering-geophysics.php">Instrumentation and Engineering Geophysics</a></li>
//    <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/magneto-tellurics.php">Magnetotellurics</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/paleo-seismology.php">Paleo-Seismology</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/seismology.php">Seismology</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/shallowseismics.php">Shallow Seismics</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/tectonic-geodesy.php">Tectonic Geodesy</a></li>
//   <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/research/thermalgeophysics-rockmechanics-paleomagnetism.php">Thermal Geophysics,Rock Mechanics and Paleomagnetism</a></li>
// </ul>
//     </div>
//     </div>
//   </div>
//   </div>
//   </a>
//   </li>
// {/* <li className="relative group" onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}>
// <a href="#People" className="font-bold text-white hover:border-b-4 border-b-white py-12">People<MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
//    <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
//   group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
//   <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
//     <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
//     </div>
//     <div className="relative z-10 ">
//     <div className="grid grid-cols-1 gap-6 ">
//     <ul className="mt-3 text-[15px] text-gray-600 space-y-2 font-semibold font-poppins">
// <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/researcher.php">Researcher</a></li>
// <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/technical-staff.php">Technical</a></li>
// <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/administration.php">Administration</a></li>
// <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/technicians.php">Technicians</a></li>
// </ul>
//     </div>
//     </div>
//   </div>
//   </div>
//   </a>
//   </li> */}

// <li className="relative group" onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}>
// <a href="#People" className="font-bold text-white hover:border-b-4 border-b-white py-12">People<MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
//    <div className="absolute top-0 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
//   group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
//   <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
//     <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm">
//     </div>
//     <div className="relative z-10 ">
//     <div className="grid grid-cols-1 gap-6 ">
//     <ul className="mt-3 text-[15px] text-gray-600 space-y-4 font-semibold font-poppins text-start">
// <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/researcher.php">Researcher</a></li>
// <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/technical-staff.php">Technical</a></li>
// <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/administration.php">Administration</a></li>
// <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/technicians.php">Technicians</a></li>
// </ul>
//     </div>
//     </div>
//   </div>
//   </div>
//   </a>
//   </li>




//  {/* <li className="relative group"><a href="#Resources" className="font-bold text-white hover:border-b-4 border-b-white py-12" >Resources
//  <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
//     <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
//   group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
//    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
//     <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
//     </div>
//     <div className="relative z-10 ">
//     <div className="grid grid-cols-1 gap-6 font-semibold font-poppins space-y-2 ">
//     <ul className="mt-3 text-[15px] text-gray-600 font-semibold font-poppins space-y-2">
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/annual-report.php">Annual Report</a></li>
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/library.php">Library</a></li>
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/gallery.php">Gallery</a></li>
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href ="https://www.ngri.res.in/cms/brochures.php">Brochures</a></li>
// </ul>
// </div>
// </div>
// </div>
// </div>
// </a>
//   </li> */}

//   <li className="relative group"><a href="#Resources" className="font-bold text-white hover:border-b-4 border-b-white py-12" >Resources
//  <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
//     <div className="absolute top-0 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
//   group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
//    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
//     <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm">
//     </div>
//     <div className="relative z-10 ">
//     <div className="grid grid-cols-1 gap-6 font-semibold font-poppins space-y-2 hover:cursor-pointer">
//     <ul className="mt-3 text-[15px] text-gray-600 font-semibold font-poppins space-y-2 text-start">
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block"><a href="https://www.ngri.res.in/annual-report.php">Annual Report</a></li>
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block"><a href="https://www.ngri.res.in/cms/library.php">Library</a></li>
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block"><a href="https://www.ngri.res.in/gallery.php">Gallery</a></li>
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block"><a href ="https://www.ngri.res.in/cms/brochures.php">Brochures</a></li>
// </ul>
// </div>
// </div>
// </div>
// </div>
// </a>
//   </li>
 

//  {/* <li className="relative group " onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)} >
// <a className="font-bold text-white hover:border-b-4 border-b-white py-12 ">Join Us<MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
//     <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
//   group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
//   <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
//     <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
//     </div>
//     <div className="relative z-10 ">
//     <div className="grid grid-cols-1 gap-6 ">
//     <div className="mt-3 text-[15px] text-gray-600 font-poppins font-semibold space-y-10">
//  <ul className="relative" onMouseEnter={()=>setIsMenuOpen(true)} onMouseLeave={()=>setIsMenuOpen(false)}>
//  <li className="cursor-pointer font-semibold px-4 py-2 hover:bg-[#FFFFE3]">Careers<MdOutlineKeyboardArrowRight className="inline-flex"/></li>
//  {isMenuOpen && (
//    <div className="absolute top-0 right-0 bg-white shadow-lg rounded-lg p-4">
//      <ul>
//        <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/openings-at-ngri.php">Openings</a></li>
//        <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/past-openings-at-ngri.php">Past Openings</a></li>
//      </ul>
//    </div>
//  )}
//  </ul>
 

//  <ul className="relative" onMouseEnter={()=>setIsMenuOpen(true)} onMouseLeave={()=>setIsMenuOpen(false)}>
//  <li className="cursor-pointer font-semibold px-4 py-2 font-poppins">HRDG<MdOutlineKeyboardArrowRight className="inline-flex"/></li>
//  {isMenuOpen && (
//   <div className="absolute top-0 right-0 bg-white shadow-lg rounded-lg p-4 font-poppins font-semibold space-y-2">
//     <ul>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/hrdg.php">Info</a></li>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/training-for-csir-ngri-staff.php">Training For CSIR-NGRI Staff</a></li>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/international-fellowships.php">International Fellowships</a></li>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/postdoctoral.php">Post Doctoral Fellows</a></li>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"> <a href="https://www.ngri.res.in/cms/doctoralfellows.php">Doctoral Fellows and Project Staff</a></li>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/skill-development.php">Skills Development</a></li>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/on-campus-accommodation.php">On Campus Regulations(temporary project/research staff)</a></li>
//     </ul>
//   </div>
//  )}
// </ul>
 
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]" ><a href="https://www.ngri.res.in/cms/AcSIR.php"></a>AcSIR</li>
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://www.ngri.res.in/cms/sac.php"></a>Student Affairs Committee</li>
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3]"><a href="https://rectt.ngri.res.in/jigyasa/"></a>Jigyasa</li>
//  </div>
//  </div>
//  </div>
//  </div>
//  </div>
//  </a>
//  </li> */}


//  <li className="relative group " onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)} >
// <a className="font-bold text-white hover:border-b-4 border-b-white py-12 ">Join Us<MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
//     <div className="absolute top-0 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
//   group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[240px] transform text-nowrap">
//   <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
//     <div className="w-6 h-6 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm">
//     </div>
//     <div className="relative z-10 ">
//     <div className="grid grid-cols-1 gap-6 ">
//     <div className="mt-3 text-[15px] text-gray-600 font-poppins font-semibold space-y-2 text-start">
//  <ul className="relative" onMouseEnter={()=>setIsCarrersMenuOpen(true)} onMouseLeave={()=>setIsCarrersMenuOpen(false)}>
//  <li className="cursor-pointer font-semibold px-4 py-2 hover:bg-[#FFFFE3] flex items-center justify-between gap-2 text-start">Careers<MdOutlineKeyboardArrowRight  size={20}/></li>
//  {carrersMenuOpen && (
//    <div className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-lg p-4 cursor-pointer space-y-2 font-poppins font-semibold z-50 w-64">
//      <ul >
//        <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block px-2 py-1 rounded"><a href="https://www.ngri.res.in/openings-at-ngri.php">Openings</a></li>
//        <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block px-3 py-1 rounded"><a href="https://www.ngri.res.in/past-openings-at-ngri.php">Past Openings</a></li>
//      </ul>
//    </div>
//  )}
//  </ul>
 

//  <ul className="relative"  onMouseEnter={()=>setIsHrdgMenuOpen(true)} onMouseLeave={()=>setIsHrdgMenuOpen(false)}>
//  <li className="cursor-pointer font-semibold px-4 py-2 font-poppins flex items-center justify-between gap-2 text-start">HRDG<MdOutlineKeyboardArrowRight  size={20}/></li>
//  {hrdgMenuOpen && (
//   <div className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-lg p-4 font-poppins font-semibold space-y-2 mt-4 text-start ">
//     <ul>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block px-2 py-2"><a href="https://www.ngri.res.in/cms/hrdg.php">Info</a></li>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block px-2 py-2"><a href="https://www.ngri.res.in/cms/training-for-csir-ngri-staff.php">Training For CSIR-NGRI Staff</a></li>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block px-2 py-2"><a href="https://www.ngri.res.in/cms/international-fellowships.php">International Fellowships</a></li>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block px-2 py-2"><a href="https://www.ngri.res.in/cms/postdoctoral.php">Post Doctoral Fellows</a></li>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block px-2 py-2"><a href="https://www.ngri.res.in/cms/doctoralfellows.php">Doctoral Fellows and Project Staff</a></li>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block px-2 py-2"><a href="https://www.ngri.res.in/cms/skill-development.php">Skills Development</a></li>
//       <li className="hover:text-blue-600 hover:bg-[#FFFFE3] block px-2 py-2"><a href="https://www.ngri.res.in/cms/on-campus-accommodation.php">On Campus Regulations(temporary project/research staff)</a></li>
//     </ul>
//   </div>
//  )}
// </ul>
 
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3] px-4 py-2 rounded" ><a href="https://www.ngri.res.in/cms/AcSIR.php"></a>AcSIR</li>
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3] px-4 py-2 rounded" ><a href="https://www.ngri.res.in/cms/sac.php"></a>Student Affairs Committee</li>
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3] px-4 py-2 rounded" ><a href="https://rectt.ngri.res.in/jigyasa/"></a>Jigyasa</li>
//  </div>
//  </div>
//  </div>
//  </div>
//  </div>
//  </a>
//  </li>


//  <li className="relative group">
//  <img src={Language} alt={"Language"} className="h-8 w-8 rounded-full"/>
//  <a href="#language" className="font-bold text-white hover:border-b-4 border-b-white py-12">
 
 
// {/* <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/> */}
//  <div className="absolute top-0 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
//   group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
//   <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
//     <div className="w-6 h-6 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[4rem] duration-500 ease-in-out rounded-sm">
//     </div>
//     <div className="relative z-10">
//     <div className="grid grid-cols-1 gap-6 ">
//     <ul className="mt-3 text-[15px] text-gray-600 font-poppins font-semibold space-y-2 text-start">
//  <li className="hover:bg-[#FFFFE3]">English</li>
//  <li className="hover:bg-[#FFFFE3]">Telugu</li>
//  <li className="hover:bg-[#FFFFE3]">Hindi</li>
//     </ul>
// </div>
// </div>
// </div>
// </div>
//  </a></li>
//  <li className="relative group">




//  <img src={diff_abled} alt={diff_abled} className="h-8 w-8 rounded-full"/>
//  <a href="#screenreaderaccess" className="font-bold text-white hover:border-b-4 border-b-white py-12">
 
// {/* <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180 hover:rotate-180"/> */}
 
//   <div className="absolute top-0 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
//   group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
//   <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
//     <div className="w-6 h-6 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[4rem] duration-500 ease-in-out rounded-sm">
//     </div>
//     <div className="relative z-10 ">
//     <div className="grid grid-cols-1 gap-6 ">
//     <ul className="mt-3 text-[15px] text-gray-600 font-bold font-poppins space-y-2">
//  <li className="hover:text-blue-600 hover:bg-[#FFFFE3] text-start"><a href="https://www.ngri.res.in/cms/sra.php">Screenreaderaccess</a></li>
// </ul>
// </div>
// </div>
// </div>
// </div>
//  </a></li>

//  {/* <div className="flex items-center"> */}
//  <li><a href="#staffCorner" className=" text-white font-bold transition-all duration-150 ease-in-out hover:bg-[#FFFFE3]  hover:text-gray-600 rounded-xl px-4 py-4 ">Staff Corner</a></li>
//  {/* </div> */}
// </ul>
// </div>

// {/* Mobile Menu Button */}
// <button onClick={toggleMenuOpen} className="lg:hidden text-white text-xl p-2 rounded-lg hover:bg-sky-500/50 transition-colors" aria-label="Toggle menu">
// {isMenuOpen?<RiCloseFill size={20}/>:<FaBars size={20} />}
// </button>
// </div>
// {/*Mobile view of Navigation Menu*/}
// {isMenuOpen &&(
// <div className="lg:hidden bg-sky-500/40 backdrop-blur-md border-t border-white/20">
// <ul className="flex flex-col space-y-2 p-4">
//   <li><a href="#home" className="font-bold  hover:border-b-4 border-b-indigo-700 py-12  text-white current" onClick={()=>setIsMenuOpen(false)} >Home</a></li>
//   <li><a href="#about" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}>About Us </a></li>
//   <li><a href="#R&DGroups" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}> R & D Groups</a></li>
//   <li><a href="People" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}>People</a></li>
//  <li><a href="#Resources" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}>Resources</a></li>
//  <li> <a href="#JoinUs" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}>Join Us</a></li>
//  <li> <img src={Language} alt={"Language"} className="h-8 w-8 rounded-full"/><a href="#language" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}>English</a></li>
//  <li><img src={diff_abled} alt={diff_abled} className="h-8 w-8 rounded-full"/><a href="#screenreaderaccess" className="font-bold text-white hover:underline underline-offset-4 decoration-2 decoration-white" onClick={()=>setIsMenuOpen(false)}>Screenreaderaccess</a></li>
//  {/* <div className="flex flex-col space-y-2 p-4"> */}
//  <li><a href="#staffCorner" className=" text-white font-bold transition-all duration-150 ease-in-out hover:bg-sky-500 rounded-xl px-4 py-2">Staff Corner</a></li>
//  {/* </div> */}
//  </ul>
// </div>
// )}

// </nav>

//   );
// };

// export default Navbar1;


import { useEffect, useState } from "react";
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
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const [hoverOpen,setHoverOpen]=useState(false);
  const [carrersMenuOpen,setIsCarrersMenuOpen]=useState(false);
  const [hrdgMenuOpen,setIsHrdgMenuOpen]=useState(false);

 const [aboutOpen, setAboutOpen] = useState(false);
const [rndOpen,setRndOpen]=useState(false);
const [peopleOpen,setPeopleOpen]=useState(false);
const [resourcesOpen,setResourcesOpen]=useState(false);
const [joinUsOpen,setJoinUsOpen]=useState(false);
const [carrersOpen,setCarrersOpen]=useState(false);
const [hrdgOpen,setHrdgOpen]=useState(false);
const [languageOpen,setLanguageOpen]=useState(false);
const [screenReaderOpen,setScreenReaderOpen]=useState(false);


  const toggleMenuOpen=()=>{
    setIsMenuOpen(!isMenuOpen);
  }

useEffect(()=>{
  if(isMenuOpen){
 document.body.style.overflow='hidden';
  }else{
    document.body.style.overflow='auto';
  }

return ()=>{
  document.body.style.overflow='unset'
}
 
},[isMenuOpen]);


  return (
  // <nav className=" fixed top-0 left-0 bg-gradient-to-br from-purple-500 via-blue-700 to-indigo-700  bg-sky-500/40 backdrop-blur-md border-b border-white/20 w-full max-w-full opacity-80 overflow-x-clip shadow-md z-50">
//  <nav className=" fixed top-0 left-0 bg-[#550000] border-b border-white/20 w-full max-w-full  overflow-x-clip shadow-md z-50"></nav>
 <nav className=" fixed top-0 left-0 bg-[#4682B4] border-b border-white/20 w-full max-w-full  overflow-x-clip shadow-md z-50">
  <div className="flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8 xl:px-4 2xl:px-8 py-2">
{/*--------------------------------------------------------------------------- Logo and Title Section------------------------------------------------------------------------ */}
<div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 xl:space-x-2 2xl:space-x-4 flex-shrink-0">
<Link to="/" className="flex items-center space-x-1 md:space-x-2 xl:space-x-1 2xl:space-x-2">
<img src={logo} alt="logo" className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-20 lg:w-20 xl:h-24 xl:w-24 2xl:h-24 2xl:w-24 object-contain"/>
<img src={logo1} alt="logo" className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-20 lg:w-20 xl:h-24 xl:w-24 2xl:h-24 2xl:w-24 object-contain"/>
<div className="min-w-0 flex-1">
  <h1 className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-medium 2xl:text-xl font-bold leading-tight">
      <span className=" animate-text bg-clip-text text-transparent bg-gradient-to-br from-orange-400 via-white to-green-600 ">CSIR-NGRI</span><br/>
      <span className=" animate-text bg-clip-text text-transparent bg-gradient-to-br from-orange-400 via-white to-green-600  text-[0.5rem]  xs:text-[0.6rem] sm:text-xs md:text-sm lg:text-base">National Geophysical Research Institute</span>
  </h1>
  </div>
</Link>
</div>


{/*-----------------------------------------------------------------------------Desktop view of Navigation------------------------------------------------------------------- */}
<div className="hidden xl:flex  lg:flex space-x-1 lg:space-x-2 xl:space-x-3  2xl:space-x-8   ">
<ul className=" flex  justify-center space-x-1 lg:space-x-2 xl:space-x-3 2xl:space-x-6 ">
  {/* Home */}
  <li><a href="/" className="font-bold  hover:border-b-4 border-b-white py-8 lg:py-10 xl:py-12 2xl:py-12  text-xs lg:text-base xl:text-xs 2xl:text-base text-white px-1 xl:px-2 2xl:px-3 font-poppins">Home</a></li>
 
 {/* About dropdown */}
 <li className="relative group" onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}>
  <a  className="font-bold text-white hover:border-b-4 border-b-white py-8 lg:py-10 xl:py-8 2xl:py-12 text-xs lg:text-sm xl:text-xs 2xl:text-base px-1 xl:px-2 2xl:px-3 font-poppins cursor-pointer">About
   <MdOutlineKeyboardArrowDown  size={16} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5"/>
   <div className="absolute top-8 -left-16 xl:-left-12 2xl:-left-20 transition-all group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[220px] xl:min-w-[220px] 2xl:min-w-[220px] transform ">
  <div className="relative top-6 p-4 xl:p-3 2xl:p-6  bg-white  rounded-xl shadow-xl w-full border-t-[#2F6281] border-t-4 border-b-[#2F6281] border-b-4 ">
    <div className="w-5 h-5 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[4rem] xl:group-hover:translate-x-[3rem] 2xl:group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-4 xl:gap-3 2xl:gap-6 ">
    <ul className="mt-2 xl:mt-1 2xl:mt-3 text-sm xl:text-xs 2xl:text-[15px] text-gray-600 space-y-3 xl:space-y-2 2xl:space-y-4 font-poppins font-semibold text-start">

<li className="w-full hover:text-white hover:bg-[#2F6281]  hover:scale-105 px-1 py-1  hover:text-center"><a href="https://www.ngri.res.in/cms/our-director.php">Our Director</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281]  hover:scale-105 px-1 py-1  hover:text-center"><a href="https://www.ngri.res.in/cms/introduction-ngri.php">Introduction</a></li>
  <li  className="w-full hover:text-white hover:bg-[#2F6281]  hover:scale-105 px-1 py-1  hover:text-center"><a href="https://www.ngri.res.in/previous_dir.php">Previous Directors</a></li>
  <li  className="w-full hover:text-white hover:bg-[#2F6281]  hover:scale-105 px-1 py-1  hover:text-center"><a href="https://www.ngri.res.in/cms/research-council.php">Research Council</a></li>
  <li  className="w-full hover:text-white hover:bg-[#2F6281]  hover:scale-105 px-1 py-1  hover:text-center"><a href="https://www.ngri.res.in/cms/management-council.php" >Management Council</a></li>
    </ul>
    </div>
    </div>
  </div>
  </div>
  </a>
  </li>


{/* R & D Groups DropDown */}
  <li className="relative group" onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}>
  <a  className="font-bold text-white hover:border-b-4 border-b-white  py-8 lg:py-10 xl:py-8 2xl:py-12 text-xs lg:text-sm xl:text-xs 2xl:text-base px-1 xl:px-2 2xl:px-3 cursor-pointer">R & D Groups
  <MdOutlineKeyboardArrowDown size={16} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5"/>
       <div className="absolute top-8 -left-32 xl:-left-32 2xl:-left-48 transition-all group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[400px] xl:min-w-[560px] 2xl:min-w-[560px] transform">
  <div className="relative top-6 p-4 xl:p-3 2xl:p-6 bg-white rounded-xl shadow-xl w-full border-t-[#2F6281] border-t-4 border-b-[#2F6281] border-b-4">
    <div className="w-8 h-8 xl:w-6 xl:h-6 2xl:w-10 2xl:h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[10rem] xl:group-hover:translate-x-[8rem] 2xl:group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-4 xl:gap-3 2xl:gap-6 font-semibold  text-start space-y-1 xl:space-y-0 2xl:space-y-2 font-poppins">
    <ul className="mt-2 xl:mt-1 2xl:mt-3 text-sm xl:text-xs 2xl:text-[15px] text-gray-600 space-y-1 xl:space-y-1 2xl:space-y-2 font-semibold font-poppins">
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/instrumentation-airborne-engineering-geophysics.php">Instrumentation, Airborne and Engineering Geophysics</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/computational-electro-magnetics.php">Computational Electromagnetics</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/consource-seismics-and-gashydrates.php">Controlled Source Seismics and Gas Hydrates</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/earthprocess-modelling.php">Earth Process Modelling</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/electrical-and-heliborne-geophysics.php">Earth and Heliborne Geophysics</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/geo-chemistry.php">Geochemistry</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/geo-chronology.php">Geochronology</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/geological-planetary-sciences.php">Geological and Planetary Sciences</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/geomagnetism.php">Geomagnetism</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/gravitymagnetics.php">Gravity and Magnetics</a></li>
  {/* <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/instrumentation-and-engineering-geophysics.php">Instrumentation and Engineering Geophysics</a></li> */}
   <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/magneto-tellurics.php">Magnetotellurics</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/paleo-seismology.php">Paleo-Seismology</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/seismology.php">Seismology</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/shallowseismics.php">Shallow Seismics</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/tectonic-geodesy.php">Tectonic Geodesy</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/thermalgeophysics-rockmechanics-paleomagnetism.php">Thermal Geophysics,Rock Mechanics and Paleomagnetism</a></li>
</ul>
    </div>
    </div>
  </div>
  </div>
  </a>
  </li>

{/* People DropDown */}
<li className="relative group" onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}>
<a  className="font-bold text-white hover:border-b-4 border-b-white py-8 lg:py-10 xl:py-8 2xl:py-12  text-xs lg:text-sm xl:text-xs 2xl:text-base px-1 xl:px-2 2xl:px-3 cursor-pointer">People
<MdOutlineKeyboardArrowDown size={16} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5"/>
   <div className="absolute top-8 -left-16 xl:-left-12 2xl:-left-20 transition-all group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[160px] xl:min-w-[200px] 2xl:min-w-[200px] transform">
  <div className="relative top-6 p-4 xl:p-3 2xl:p-6  bg-white rounded-xl shadow-xl w-full border-t-[#2F6281] border-t-4 border-b-[#2F6281] border-b-4">
    <div className="w-8 h-8 xl:w-6 xl:h-6 2xl:w-10 2xl:h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[4rem] xl:group-hover:translate-x-[3rem] 2xl:group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-4 xl:gap-3 2xl:gap-6 ">
    <ul className="mt-2 xl:mt-1 2xl:mt-3 text-sm xl:text-xs 2xl:text-[15px] text-gray-600 space-y-3 xl:space-y-2 2xl:space-y-4 font-semibold font-poppins text-start">
<li className="hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/researcher.php">Researcher</a></li>
<li className="hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/technical-staff.php">Technical</a></li>
<li className="hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/cms/administration.php">Administration</a></li>
<li className="hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/technicians.php">Technicians</a></li>
</ul>
    </div>
    </div>
  </div> 
  </div>
  </a>
  </li>


{/* Resources Dropdown */}
  <li className="relative group">
    <a  className="font-bold text-white hover:border-b-4 border-b-white py-8 lg:py-10 xl:py-8 2xl:py-12 text-xs lg:text-sm xl:text-xs 2xl:text-base px-1 xl:px-2 2xl:px-3 cursor-pointer" >Resources
 <MdOutlineKeyboardArrowDown size={20} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5"/>
    <div className="absolute top-8 -left-16 xl:-left-10 2xl:-left-20 transition-all group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[160px] xl:min-w-[160px] 2xl:min-w-[200px] transform">
   <div className="relative top-6 p-4 xl:p-3 2xl:p-6 bg-white rounded-xl shadow-xl w-full border-t-[#2F6281] border-t-4 border-b-[#2F6281] border-b-4">
    <div className="w-8 h-8 xl:w-6 xl:h-6 2xl:w-10 2xl:h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[4rem] xl:group-hover:translate-x-[3rem] 2xl:group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-4 xl:gap-3 2xl:gap-6 font-semibold font-poppins space-y-1 xl:space-y-0 2xl:space-y-2 hover:cursor-pointer">
    <ul className="mt-2 xl:mt-1 2xl:mt-3 text-sm xl:text-xs 2xl:text-[15px] text-gray-600 font-semibold font-poppins space-y-1 xl:space-y-1 2xl:space-y-2 text-start">
 <li className="hover:text-white hover:bg-[#2F6281] block hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/annual-report.php">Annual Report</a>

 </li>
 <li className="hover:text-white hover:bg-[#2F6281] block hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/cms/library.php">Library</a></li>
 <li className="hover:text-white hover:bg-[#2F6281] block hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/gallery.php">Gallery</a></li>
 <li className="hover:text-white hover:bg-[#2F6281] block hover:scale-105 px-1 py-1 hover:text-center"><a href ="https://www.ngri.res.in/cms/brochures.php">Brochures</a></li>
</ul>
</div>
</div>
</div>
</div>
</a>
  </li>
 

{/* Join Us dropdown */}

 <li className="relative group " onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)} >
<a className=" cursor-pointer font-bold text-white hover:border-b-4 border-b-white py-8 lg:py-10  xl:py-8 2xl:py-12 text-xs lg:text-sm xl:text-xs 2xl:text-base px-1 xl:px-2 2xl:px-3">
Join Us<MdOutlineKeyboardArrowDown size={16} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5"/>
    <div className="absolute top-8 -left-20 xl:-left-24 2xl:-left-20 transition-all group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] xl:min-w-[250px] 2xl:min-w-[250px] transform text-nowrap">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full border-t-[#2F6281] border-t-4 border-b-[#2F6281] border-b-4">
    <div className="w-6 h-6 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-4 xl:gap-3 2xl:gap-6 font-semibold font-poppins space-y-1 xl:space-y-0 2xl:space-y-2 hover:cursor-pointer">
    <div className="mt-3 text-[15px] text-gray-600 font-poppins font-semibold space-y-2 text-start">
 <ul className="relative" onMouseEnter={()=>setIsCarrersMenuOpen(true)} onMouseLeave={()=>setIsCarrersMenuOpen(false)}>
 <li className="cursor-pointer font-semibold px-4 py-2 hover:bg-[#2F6281] flex items-center justify-between gap-2 text-start hover:scale-105 hover:text-center hover:text-white">Careers<MdOutlineKeyboardArrowRight  size={20}/></li>
 {carrersMenuOpen && (
   <div className="absolute top-0 right-full ml-2 bg-white shadow-lg rounded-lg p-4 cursor-pointer space-y-2 font-poppins font-semibold z-50 w-64 border-t-[#2F6281] border-t-4 border-b-[#2F6281] border-b-4 ">
     <ul >
       <li className="hover:text-white hover:bg-[#2F6281] block px-2 py-1 rounded hover:scale-105 hover:text-center text-start"><a href="https://www.ngri.res.in/openings-at-ngri.php">Openings</a></li>
       <li className="hover:text-white hover:bg-[#2F6281] block px-3 py-1 rounded hover:scale-105 hover:text-center text-start"><a href="https://www.ngri.res.in/past-openings-at-ngri.php">Past Openings</a></li>
     </ul>
   </div>
 )}
 </ul>
 

 <ul className="relative"  onMouseEnter={()=>setIsHrdgMenuOpen(true)} onMouseLeave={()=>setIsHrdgMenuOpen(false)}>
 <li className="cursor-pointer font-semibold px-4 py-2 font-poppins flex items-center justify-between gap-2 text-start hover:bg-[#2F6281] hover:text-white hover:scale-105 hover:text-center">HRDG<MdOutlineKeyboardArrowRight  size={20}/></li>
 {hrdgMenuOpen && (
  <div className="absolute top-0 right-full ml-2 bg-white shadow-lg rounded-lg p-4 font-poppins font-semibold space-y-2 mt-4 text-start border-t-[#2F6281] border-t-4 border-b-[#2F6281] border-b-4">
    <ul>
      <li className="hover:text-white hover:bg-[#2F6281]  block px-2 py-2 hover:scale-105 hover:text-center"><a href="https://www.ngri.res.in/cms/hrdg.php">Info</a></li>
      <li className="hover:text-white hover:bg-[#2F6281] block px-2 py-2 hover:scale-105 hover:text-center"><a href="https://www.ngri.res.in/cms/training-for-csir-ngri-staff.php">Training For CSIR-NGRI Staff</a></li>
      <li className="hover:text-white hover:bg-[#2F6281] block px-2 py-2 hover:scale-105 hover:text-center"><a href="https://www.ngri.res.in/cms/international-fellowships.php">International Fellowships</a></li>
      <li className="hover:text-white hover:bg-[#2F6281] block px-2 py-2 hover:scale-105 hover:text-center"><a href="https://www.ngri.res.in/cms/postdoctoral.php">Post Doctoral Fellows</a></li>
      <li className="hover:text-white hover:bg-[#2F6281] block px-2 py-2 hover:scale-105 hover:text-center"><a href="https://www.ngri.res.in/cms/doctoralfellows.php">Doctoral Fellows and Project Staff</a></li>
      <li className="hover:text-white hover:bg-[#2F6281] block px-2 py-2 hover:scale-105 hover:text-center"><a href="https://www.ngri.res.in/cms/skill-development.php">Skills Development</a></li>
      <li className="hover:text-white hover:bg-[#2F6281] block px-2 py-2 hover:scale-105 hover:text-center"><a href="https://www.ngri.res.in/cms/on-campus-accommodation.php">On Campus Regulations(temporary project/research staff)</a></li>
    </ul>
  </div>
 )}
</ul>
 
 <li className="hover:text-white hover:bg-[#2F6281] px-4 py-2 hover:scale-105 hover:text-center" ><a href="https://www.ngri.res.in/cms/AcSIR.php"></a>AcSIR</li>
 <li className="hover:text-white hover:bg-[#2F6281] px-4 py-2 hover:scale-105 hover:text-center" ><a href="https://www.ngri.res.in/cms/sac.php"></a>Student Affairs Committee</li>
 <li className="hover:text-white hover:bg-[#2F6281] px-4 py-2 hover:scale-105 hover:text-center" ><a href="https://rectt.ngri.res.in/jigyasa/"></a>Jigyasa</li>
 </div>
 </div>
 </div>
 </div>
 </div>
 </a>
 </li>


{/* Language dropdown */}
 <li className="relative group">
 <img src={Language} alt={"Language"} className="h-5 w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8 lg:w-6 lg:h-6 rounded-full cursor-pointer"/>
 <a href="#language" className="font-bold text-white hover:border-b-4 border-b-white py-8 lg:py-10 xl:py-8 2xl:py-12">
 

{/* <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/> */}
 <div className="absolute top-8 -left-20 transition-all group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full border-t-[#2F6281] border-t-4 border-b-[#2F6281] border-b-4">
    <div className="w-6 h-6 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[4rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10">
    <div className="grid grid-cols-1 gap-6 ">
    <ul className="mt-3 text-[15px] text-gray-600 font-poppins font-semibold space-y-2 text-start">
 <li className="hover:bg-[#2F6281] hover:text-white px-4 py-2 hover:scale-105 hover:text-center ">English</li>
 <li className="hover:bg-[#2F6281] hover:text-white px-4 py-2 hover:scale-105 hover:text-center">Telugu</li>
 <li className="hover:bg-[#2F6281] hover:text-white px-4 py-2 hover:scale-105 hover:text-center">Hindi</li>
    </ul>
</div>
</div>
</div>
</div>
 </a></li>

 {/* Screenreader access dropdown */}
 <li className="relative group ">
 <img src={diff_abled} alt={diff_abled} className="h-5 w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8 lg:h-6 lg:w-6 rounded-full cursor-pointer "/>
 <a href="#screenreaderaccess" className="font-bold text-white ">
 
{/* <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180 hover:rotate-180"/> */}

  <div className="absolute top-8 -left-20 transition-all group-hover:translate-y-5 translate-y-0 opacity-0 invisible
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px]">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full border-t-[#2F6281] border-t-4 border-b-[#2F6281] border-b-4 pointer-events-auto">
    <div className="w-6 h-6 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[4rem] duration-500  ease-in-out rounded-sm pointer-events-none hover:pointer-events-auto">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-6 ">
    <ul className="mt-3 text-[15px] text-gray-600 font-bold font-poppins space-y-2">
 <li className="hover:text-white hover:bg-[#2F6281] text-start px-1 py-1 hover:scale:105 hover:text-center"><a href="https://www.ngri.res.in/cms/sra.php">Screenreaderaccess</a></li>
</ul>
</div>
</div>
</div>
</div>
 </a></li>

 {/* <div className="flex items-center"> */}
 <li><a href="https://www.ngri.res.in/staff_corner.php" className=" text-white  font-bold transition-all duration-150 ease-in-out  hover:bg-[#FFFFE3]  hover:text-gray-600 rounded-xl px-2 xl:px-3 2xl:px-4 xl:py-3 2xl:py-4 text-xs lg:px-4 py-2 lg:py-4 lg:text-sm xl:text-xs 2xl:text-base ">Staff Corner</a></li>
 {/* </div> */}
</ul>
</div>



{/* -----------------------------------------------------------------Mobile view of Navigation Menu----------------------------------------------------- */}
{/* Mobile Menu Button */}
<button onClick={toggleMenuOpen} className="lg:hidden text-white text-xl p-2 rounded-lg hover:bg-sky-500/50 transition-colors " aria-label="Toggle menu">
{isMenuOpen?<RiCloseFill size={20}/>:<FaBars size={20} />}
</button>
</div>

{isMenuOpen &&(
  
<div className="lg:hidden bg-white/10  border-t border-white/20 overflow-y-auto    max-h-[80vh] scrollbar-hide">
<ul className="flex flex-col space-y-2 p-4 text-white font-bold text-start ">
  <li><a href="#home" className="font-bold  hover:border-b-4 border-b-indigo-700 py-12  text-white current" onClick={()=>setIsMenuOpen(false)} >Home</a></li>
 
{/* About us dropdown  */}
<li>
  <button onClick={()=>setAboutOpen(!aboutOpen)} className="flex justify-between w-full  items-center">
    About Us<MdOutlineKeyboardArrowDown className={`transition-transform ${aboutOpen?"rotate-180":""}`} size={24} />
  </button>
  {aboutOpen &&(
    <ul className="space-y-2  text-white text-sm pl-4 font-normal text-start mt-4 mb-4">
      <li><Link to="https://www.ngri.res.in/cms/our-director.php">Our Director</Link></li>
      <li><Link to="https://www.ngri.res.in/cms/introduction-ngri.php">Introduction</Link></li>
      <li><Link to="https://www.ngri.res.in/previous_dir.php">Previous Directors</Link></li>
      <li><Link to="https://www.ngri.res.in/cms/research-council.php">Research Council</Link></li>
      <li><Link to="https://www.ngri.res.in/cms/management-council.php">Management Council</Link></li>


    </ul>
  )}
</li>

{/* Rand D */}
 <li>
  <button onClick={()=>setRndOpen(!rndOpen)} className="flex justify-between w-full items-center" > 
    R & D Groups<MdOutlineKeyboardArrowDown className={`transition-transform ${rndOpen?"rotate-180":""}`} size={24} />
  </button>
  {rndOpen &&(

  <ul className="space-y-2 text-white text-sm pl-4 font-normal mt-4 mb-4">
  <li><Link to="https://www.ngri.res.in/research/instrumentation-airborne-engineering-geophysics.php">Instrumentation,Airborne and Engineering Geophysics</Link></li>
  <li><Link to="https://www.ngri.res.in/research/computational-electro-magnetics.php">Computational Electromagnetics</Link></li>
  <li><Link to="https://www.ngri.res.in/research/consource-seismics-and-gashydrates.php">Controlled Source Seismics and Gas Hydrates</Link></li>
  <li><Link to="https://www.ngri.res.in/research/earthprocess-modelling.php">Earth Process Modelling</Link></li>
  <li><Link to="https://www.ngri.res.in/research/electrical-and-heliborne-geophysics.php">Electrical and Heliborne Geophysics</Link></li>
  <li><Link to="https://www.ngri.res.in/research/geo-chemistry.php">Geochemistry</Link></li>
  <li><Link to="https://www.ngri.res.in/research/geo-chronology.php">Geochronology</Link></li>
  <li><Link to="https://www.ngri.res.in/research/geological-planetary-sciences.php">Geological and Planetary Sciences</Link></li>
  <li><Link to="https://www.ngri.res.in/research/geomagnetism.php">Geomagnetism</Link></li>
  <li><Link to="https://www.ngri.res.in/research/gravitymagnetics.php">Gravity and Magnetics</Link></li>
  {/* <li><Link to="https://www.ngri.res.in/research/instrumentation-and-engineering-geophysics.php">Instrumentation and Engineering Geophysics</Link></li> */}
  <li><Link to="https://www.ngri.res.in/research/magneto-tellurics.php">Magnetotellurics</Link></li>
  <li><Link to="https://www.ngri.res.in/research/paleo-seismology.php">Paleo-Seismology</Link></li>
  <li><Link to="https://www.ngri.res.in/research/seismology.php">Seismology</Link></li>
  <li><Link to="https://www.ngri.res.in/research/shallowseismics.php">Shallow Seismics</Link></li>
  <li><Link to="https://www.ngri.res.in/research/tectonic-geodesy.php">Tectonic Geodesy</Link></li>
  <li><Link to="https://www.ngri.res.in/research/thermalgeophysics-rockmechanics-paleomagnetism.php">Thermal Geophysics, Rock Mechanics and Paleomagnetism</Link></li>
  </ul>
  )}
  
  </li>


{/* People */}
  <li>
    <button  className="flex items-center w-full justify-between" onClick={()=>setPeopleOpen(!peopleOpen)}>
      People<MdOutlineKeyboardArrowDown className={`transition-transform ${peopleOpen?"rotate-180":""}`} size={24} />
      </button>
      {peopleOpen&& (
      <ul className="space-y-2 text-white text-sm pl-4 font-normal mt-4 mb-4">
      <li><Link to="https://www.ngri.res.in/researcher.php">Researcher</Link></li>
      <li><Link to="https://www.ngri.res.in/technical-staff.php">Technical</Link></li>
      <li><Link to="https://www.ngri.res.in/cms/administration.php">Administration</Link></li>
      <li><Link to="https://www.ngri.res.in/technicians.php">Technicians</Link></li>
      </ul>
      
      )}
      </li>

      {/* Resources */}
 <li>
  <button className="flex justify-between items-center w-full" onClick={()=>setResourcesOpen(!resourcesOpen)}>
    Resources<MdOutlineKeyboardArrowDown className={`transition-transform ${resourcesOpen?"rotate-180":""}`} size={24}/>
    </button>
    {resourcesOpen&&(
    <ul className="space-y-2 text-white text-sm pl-4 font-normal mt-4 mb-4">
      <li><Link to="https://www.ngri.res.in/annual-report.php">Annual Report</Link></li>
      <li><Link to="https://www.ngri.res.in/cms/library.php">Library</Link></li>
      <li><Link to="https://www.ngri.res.in/gallery.php">Gallery</Link></li>
      <li><Link to="https://www.ngri.res.in/cms/brochures.php">Brochures</Link></li>
      </ul>
    )}
    </li>
    {/* Join Us */}
 <li>
   <button className="flex justify-between items-center w-full" onClick={()=>setJoinUsOpen(!joinUsOpen)}>Join Us
    <MdOutlineKeyboardArrowDown className={`transition-transform ${joinUsOpen?"rotate-180":""}`} size={24}/>
   </button>
   {joinUsOpen &&(
    <ul className="space-y-2 text-white text-sm pl-4 font-normal mt-4 mb-4" >
      <li><button className="flex justify-between items-center w-full" onClick={()=>setCarrersOpen(!carrersOpen)}>
        Careers<MdOutlineKeyboardArrowDown className={`transition-transform ${carrersOpen?"rotate-180":""}`} size={24}/>
        </button>
        {carrersOpen &&(
        <ul className="space-y-2 pl-4 font-normal text-white mt-4 mb-4">
          <li><Link to="https://www.ngri.res.in/openings-at-ngri.php">Openings</Link></li>
          <li><Link to="https://www.ngri.res.in/past-openings-at-ngri.php">Past Openings</Link></li>
        </ul>
        )}
        </li>

            <li>
        <button onClick={()=>setHrdgOpen(!hrdgOpen)} className="flex items-center justify-between w-full">
          HRDG<MdOutlineKeyboardArrowDown  className={`transition-transform ${hrdgOpen?"rotate-180":""}`} size={24}/></button>
        {hrdgOpen &&(
        <ul className="space-y-2 text-white text-sm pl-4 font-normal mt-4 mb-4">
          <li><Link to="https://www.ngri.res.in/cms/hrdg.php">Info</Link></li>
          <li><Link to="https://www.ngri.res.in/cms/training-for-csir-ngri-staff.php">Training For CSIR-NGRI Staff</Link></li>
          <li><Link to="https://www.ngri.res.in/cms/postdoctoral.php">Post-Doctoral Fellows</Link></li>
          <li><Link to="https://www.ngri.res.in/cms/doctoralfellows.php">Doctoral Fellows and Project Staff</Link></li>
          <li><Link to="https://www.ngri.res.in/cms/skill-development.php">Skills Development</Link></li>
          <li><Link to="https://www.ngri.res.in/cms/on-campus-accommodation.php">On campus regulations(temporary project/research staff)</Link></li>
          </ul>
        )}  
          </li>
       <li><Link to="https://www.ngri.res.in/cms/AcSIR.php">AcSIR</Link></li>
      <li><Link to="https://www.ngri.res.in/cms/sac.php">Student Affairs Committee</Link></li>
      <li><Link to="https://rectt.ngri.res.in/jigyasa/">Jigyasa</Link></li>


    </ul>
   )}
   </li>

   {/* language dropdown */}
 <li>
 
    <button  className="flex justify-between items-center w-full " onClick={()=>setLanguageOpen(!languageOpen)}>
   <img src={Language} alt={"Language"} className="h-8 w-8 rounded-full "/>
 <MdOutlineKeyboardArrowDown  className={`transition-transform ${languageOpen?"rotate-180":""}`} size={24}/></button></li>
    {languageOpen &&(
    <ul className="space-y-2 text-white text-sm pl-4 font-normal mt-4 mb-4">
      <li>English</li>
      <li>Telugu</li>
      <li>Hindi</li>
    </ul>
    )}
    {/* Screen Reader Access */}
 <li>
 <button className="flex justify-between items-center w-full" onClick={()=>setScreenReaderOpen(!screenReaderOpen)}>
 <img src={diff_abled} alt={diff_abled} className="h-8 w-8 rounded-full"/> 
 <MdOutlineKeyboardArrowDown className={`transition-transform ${screenReaderOpen?"rotate-180":""}`} size={24}/>
 </button>
 {screenReaderOpen &&(
  <ul className="space-y-2 text-white text-sm pl-4 font-normal mt-4 mb-4">
    <li><Link to="https://www.ngri.res.in/cms/sra.php" className="block w-full">Screenreaderaccess</Link></li>
  </ul>
 )}
 </li>
 {/* <div className="flex flex-col space-y-2 p-4"> */}
 <li><Link to="https://www.ngri.res.in/staff_corner.php"><button className="text-white hover:text-gray-600 font-bold transition-all duration-150 ease-in-out hover:bg-[#FFFFE3] rounded-xl px-4 py-2 w-full">
 Staff Corner</button></Link></li>
 {/* </div> */}
 </ul>
</div>

)}

</nav>

  );
};

export default Navbar1;