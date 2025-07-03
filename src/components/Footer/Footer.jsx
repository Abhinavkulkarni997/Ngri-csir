import logo1 from "../../assets/images/ngri-logo.png";
import { FaChevronRight, FaSquareFacebook,FaSquareXTwitter} from "react-icons/fa6";
import {  FaYoutubeSquare } from "react-icons/fa";
import VisitorsCount from "./visitorsCount";
import './meteors.css';

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-br from-purple-900 via-blue-600 to-sky-900 backdrop-blur-md border-t border-white/20 shadow-md  ">
<div className="meteors-container">
   {/* {Array.from({ length: 25 }).map((_, i) => (
    <div
      key={i}
      className="meteor"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * -100}%`,
        animationDuration: `${1.5 + Math.random() * 2}s`,
        animationDelay: `${Math.random() * 10}s`,
      }}
    />
  ))} */}
</div> 
      {/* Footer content */}
      <div className="grid grid-cols-1 justify-center max-w-[1240px] gap-6  mx-auto py-16 px-4 gap-x-1 md:grid-cols-4 sm:grid-cols-5 lg:grid-cols-5">
        <a href="#" className="flex mx-auto max-w-[1240px]">
          <img src={logo1} alt="logo" style={{height:150, width:150}} className="h-24 w-24 md:h-24 md:w-24" />
        </a>
      <div className="flex  max-w-[1241px]    md:text-left sm:text-left lg:text-left ">
     
        <ul className="space-y-2 mt-2 min-w-[200px]" role="list">
        <li className="flex items-center gap-x-2"> <FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">POSH</a></li>
         <li className="flex items-center gap-x-2"> <FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">LGC</a></li>
         <li className="flex items-center gap-x-2"> <FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">RTI</a></li>
         <li className="flex items-center gap-x-2"> <FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">Tenders</a></li>
        </ul>
        <ul className="space-y-2 mt-2 min-w-[200px]" role="list">
         <li className="flex items-center gap-x-2"> <FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">CSIR</a></li>
         <li className="flex items-center gap-x-2"> <FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">CSIR-AMS</a></li>
          <li className="flex items-center gap-x-2"> <FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">E-OFFICE</a></li>
          <li className="flex items-center gap-x-2"> <FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">E-HRMS 2.0</a></li>
        </ul>
          <ul className="space-y-2 mt-2 min-w-[200px]" role="list">
            <li className="flex items-center gap-x-2"> <FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">AeBAS</a></li>
            <li className="flex items-center gap-x-2"> <FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">WEB-MAIL</a></li>
            <li className="flex items-center gap-x-2"> <FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">SHE-BOX</a></li>
          </ul>
        <ul className="space-y-2 mt-2 min-w-[200px]" role="list">
          <li className="flex items-center gap-x-2"><FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">GUEST HOUSE</a></li>
          <li className="flex items-center gap-x-2"><FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">STAFF CLUB</a></li>
          <li className="flex items-center gap-x-2"><FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">INCOME TAX</a></li>

        </ul>
        <ul className="space-y-2 mt-2 min-w-[200px]" role="list">
          <li className="flex items-center gap-x-2"><FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">CONTACT US</a></li>
          <li className="flex items-center gap-x-2"><FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">WEBSITE POLICIES</a></li>
          <li className="flex items-center gap-x-2"><FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">DISCLAIMER</a></li>
          <li className="flex items-center gap-x-2"><FaChevronRight  size={10} className="text-white flex-shrink-0"/><a href="#" className="whitespace-nowrap font-semibold text-white hover:underline underline-offset-2 text-decoration:none flex-shrink-0">ARCHIVE</a></li>
        </ul>

        {/* Social Media section */}
<div className="flex flex-col space-y-4 ">
  <p className="text-2xl md:text-[30px] font-bold text-white text-right whitespace-nowrap">Find Us Online</p> 
<div className="flex flex-row space-x-4 ">
  {/* Facebook */}
  <a href="https://facebook.com/csirngrihyd" target="_blank" rel="noopener noreferrer"
     className="relative group w-12 h-12 flex items-center justify-center rounded-full overflow-hidden bg-transparent transition duration-500 shadow-md ">
    <span className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0 rounded-full "></span>
    <FaSquareFacebook size={30} className="text-white z-10 hover:animate-bounce group-hover:scale-125 transition-transform duration-300 " />
  </a> 

  {/* Twitter / X */}
 <a href="https://x.com/yourpage" target="_blank" rel="noopener noreferrer"
     className="relative group w-12 h-12 flex items-center justify-center rounded-full overflow-hidden bg-transparent transition duration-500 shadow-md ">
    <span className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0 rounded-full "></span>
    <FaSquareXTwitter size={30} className="text-white z-10 hover:animate-bounce  group-hover:scale-125 transition-transform duration-300" />
  </a> 

  {/* YouTube */}
  <a href="https://youtube.com/yourpage" target="_blank" rel="noopener noreferrer"
     className="relative group w-12 h-12 flex items-center justify-center rounded-full overflow-hidden bg-transparent transition duration-500 shadow-md">
    <span className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
    <FaYoutubeSquare size={30} className="text-white z-10 hover:animate-bounce group-hover:scale-125 transition-transform duration-300" />
  </a>
 
  </div>
     {/* Visitors Count Section */}
      <div className="flex items-center gap-x-2 mt-6 white-space-nowrap">
  <span className="text-white"><VisitorsCount /></span>
      </div>
</div>  

    </div>
</div>

    
      {/* Bottom section: All rights reserved*/}
       <div className="border-t   text-white py-8 px-4 border-white/20 ">
        <p className="text-xs sm:text-sm font-semibold max-w-4xl mx-auto loading-relaxed">
  © 2025 Crafted and maintained by CSIR-NGRI's IT Division, Hyderabad. All rights reserved.
</p>
  </div> 

  

      
    </footer>
  );
};

export default Footer;