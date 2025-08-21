 <nav className=" fixed top-0 left-0 bg-[#4682B4] border-b border-white/20 w-full max-w-full  overflow-x-clip shadow-md z-50">
  <div className="flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8 py-2">
{/*--------------------------------------------------------------------------- Logo and Title Section------------------------------------------------------------------------ */}
<div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 flex-shrink-0">
<Link to="/" className="flex items-center space-x-1 md:space-x-2">
<img src={logo} alt="logo" className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"/>
<img src={logo1} alt="logo" className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"/>
<div className="min-w-0 flex-1">
  <h1 className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold leading-tight">
      <span className=" animate-text bg-clip-text text-transparent bg-gradient-to-br from-orange-400 via-white to-green-600 ">CSIR-NGRI</span><br/>
      <span className=" animate-text bg-clip-text text-transparent bg-gradient-to-br from-orange-400 via-white to-green-600  text-[0.5rem]  xs:text-[0.6rem] sm:text-xs md:text-sm lg:text-base">National Geophysical Research Institute</span>
  </h1>
  </div>
</Link>
</div>


{/*-----------------------------------------------------------------------------Desktop view of Navigation------------------------------------------------------------------- */}
<div className="hidden xl:flex  lg:flex space-x-2 lg:space-x-4 xl:space-x-6  2xl:space-x-8   ">
<ul className=" flex justify-center space-x-2 lg:space-x-4 xl:space-x-6 ">
  {/* Home */}
  <li><a href="#home" className="font-bold  hover:border-b-2 border-b-white py-8 lg:py-10 xl:py-12  text-sm lg:text-base  text-white">Home</a></li>
 
 {/* About dropdown */}
 <li className="relative group" onMouseEnter={()=>setHoverOpen(true)} onMouseLeave={()=>setHoverOpen(false)}>
  <a href="#about" className="font-bold text-white hover:border-b-4 border-b-white py-8 lg:py-10 xl:py-12 text-sm lg:text-base">About
   <MdOutlineKeyboardArrowDown  size={20} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
   <div className="absolute top-0 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[220px] transform ">
  <div className="relative top-6 p-6 bg-white  rounded-xl shadow-xl w-full border-t-blue-500 ">
    <div className="w-6 h-6 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-6 ">
    <ul className="mt-3 text-[15px] text-gray-600 space-y-4 font-poppins font-semibold text-start">

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
  <a href="#R&DGroups" className="font-bold text-white hover:border-b-4 border-b-white  py-8 lg:py-10 xl:py-12 text-sm lg:text-base">R & D Groups
  <MdOutlineKeyboardArrowDown size={20} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
       <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-6 font-semibold font-poppins text-start space-y-2">
    <ul className="mt-3 text-[15px] text-gray-600 space-y-2 font-semibold font-poppins">
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/airborne-geophysics.php">Airborne Geophysics</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/computational-electro-magnetics.php">Computational Electromagnetics</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/consource-seismics-and-gashydrates.php">Controlled Source Seismics and Gas Hydrates</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/earthprocess-modelling.php">Earth Process Modelling</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/electrical-and-heliborne-geophysics.php">Earth and Heliborne Geophysics</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/geo-chemistry.php">Geochemistry</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/geo-chronology.php">Geochronology</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/geological-planetary-sciences.php">Geological and Planetary Sciences</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/geomagnetism.php">Geomagnetism</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/gravitymagnetics.php">Gravity and Magnetics</a></li>
  <li className="w-full hover:text-white hover:bg-[#2F6281] hover:scale-105 px-1 py-1 hover:text-center"><a href="https://www.ngri.res.in/research/instrumentation-and-engineering-geophysics.php">Instrumentation and Engineering Geophysics</a></li>
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
<a href="#People" className="font-bold text-white hover:border-b-4 border-b-white py-8 lg:py-10 xl:py-12 text-sm lg:text-base">People
<MdOutlineKeyboardArrowDown size={20} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
   <div className="absolute top-0 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-6 ">
    <ul className="mt-3 text-[15px] text-gray-600 space-y-4 font-semibold font-poppins text-start">
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
    <a href="#Resources" className="font-bold text-white hover:border-b-4 border-b-white py-8 lg:py-10 xl:py-12 text-sm lg:text-base" >Resources
 <MdOutlineKeyboardArrowDown size={20} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
    <div className="absolute top-0 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
   <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-6 font-semibold font-poppins space-y-2 hover:cursor-pointer">
    <ul className="mt-3 text-[15px] text-gray-600 font-semibold font-poppins space-y-2 text-start">
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
<a className=" cursor-pointer font-bold text-white hover:border-b-4 border-b-white py-8 lg:py-10 xl:py-12 text-sm lg:text-base">
Join Us<MdOutlineKeyboardArrowDown size={20} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/>
    <div className="absolute top-0 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] transform text-nowrap">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className="w-6 h-6 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10 ">
    <div className="grid grid-cols-1 gap-6 ">
    <div className="mt-3 text-[15px] text-gray-600 font-poppins font-semibold space-y-2 text-start">
 <ul className="relative" onMouseEnter={()=>setIsCarrersMenuOpen(true)} onMouseLeave={()=>setIsCarrersMenuOpen(false)}>
 <li className="cursor-pointer font-semibold px-4 py-2 hover:bg-[#2F6281] flex items-center justify-between gap-2 text-start hover:scale-105 hover:text-center hover:text-white">Careers<MdOutlineKeyboardArrowRight  size={20}/></li>
 {carrersMenuOpen && (
   <div className="absolute top-0 right-full ml-2 bg-white shadow-lg rounded-lg p-4 cursor-pointer space-y-2 font-poppins font-semibold z-50 w-64">
     <ul >
       <li className="hover:text-white hover:bg-[#2F6281] block px-2 py-1 rounded hover:scale-105 hover:text-center"><a href="https://www.ngri.res.in/openings-at-ngri.php">Openings</a></li>
       <li className="hover:text-white hover:bg-[#2F6281] block px-3 py-1 rounded hover:scale-105 hover:text-center"><a href="https://www.ngri.res.in/past-openings-at-ngri.php">Past Openings</a></li>
     </ul>
   </div>
 )}
 </ul>
 

 <ul className="relative"  onMouseEnter={()=>setIsHrdgMenuOpen(true)} onMouseLeave={()=>setIsHrdgMenuOpen(false)}>
 <li className="cursor-pointer font-semibold px-4 py-2 font-poppins flex items-center justify-between gap-2 text-start hover:bg-[#2F6281] hover:text-white hover:scale-105 hover:text-center">HRDG<MdOutlineKeyboardArrowRight  size={20}/></li>
 {hrdgMenuOpen && (
  <div className="absolute top-0 right-full ml-2 bg-white shadow-lg rounded-lg p-4 font-poppins font-semibold space-y-2 mt-4 text-start ">
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
 <img src={Language} alt={"Language"} className="h-6 w-6 lg:h-8 lg:w-8 rounded-full"/>
 <a href="#language" className="font-bold text-white hover:border-b-4 border-b-white py-8 lg:py-10 xl:py-12">
 

{/* <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180"/> */}
 <div className="absolute top-0 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className="w-6 h-6 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[4rem] duration-500 ease-in-out rounded-sm">
    </div>
    <div className="relative z-10">
    <div className="grid grid-cols-1 gap-6 ">
    <ul className="mt-3 text-[15px] text-gray-600 font-poppins font-semibold space-y-2 text-start">
 <li className="hover:bg-[#2F6281] hover:text-white px-4 py-2 hover:scale-105 hover:text-center">English</li>
 <li className="hover:bg-[#2F6281] hover:text-white px-4 py-2 hover:scale-105 hover:text-center">Telugu</li>
 <li className="hover:bg-[#2F6281] hover:text-white px-4 py-2 hover:scale-105 hover:text-center">Hindi</li>
    </ul>
</div>
</div>
</div>
</div>
 </a></li>
 <li className="relative group">




 <img src={diff_abled} alt={diff_abled} className="h-6 w-6 lg:h-8 lg:w-8 rounded-full"/>
 <a href="#screenreaderaccess" className="font-bold text-white hover:border-b-4 border-b-white py-8 lg:py-10 xl:py-12">
 
{/* <MdOutlineKeyboardArrowDown size={24} className="inline-flex ml-1 transition-transform duration-300  group-hover:rotate-180 hover:rotate-180"/> */}
 
  <div className="absolute top-0 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
  group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className="w-6 h-6 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[4rem] duration-500 ease-in-out rounded-sm">
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
 <li><a href="#staffCorner" className=" text-white  font-bold transition-all duration-150 ease-in-out  hover:bg-[#FFFFE3]  hover:text-gray-600 rounded-xl px-3 lg:px-4 py-3 lg:py-4 text-sm lg:text-base ">Staff Corner</a></li>
 {/* </div> */}
</ul>
</div>