import React from "react";
import logo1 from "../../assets/images/ngri-logo.png";
import { FaArrowPointer, FaArrowRight, FaArrowRotateRight, FaChevronRight, FaSquareFacebook,FaSquareXTwitter} from "react-icons/fa6";
import { FaArrowCircleRight, FaYoutubeSquare } from "react-icons/fa";
import VisitorsCount from "./visitorsCount";

const Footer = () => {
  return (
    <footer className=" relative bg-gradient-to-br from-purple-600 via-blue-900 to-sky-600 backdrop-blur-md border-t border-white/20 shadow-md  ">
      {/* Footer content */}
      <div className="grid grid-cols-1 max-w-[1240px] mx-auto py-16 px-4 gap-8 md:grid-cols-5 sm:grid-cols-5 lg:grid-cols-5">
        <a href="#" className="flex mx-auto max-w-[1240px]">
          <img src={logo1} alt="logo" className="h-24 w-24 md:h-24 md:w-24" />
        </a>
      

      <div className="flex  max-w-[1241px]  mx-auto justify-center gap-x-4 text-center md:text-left sm:text-left lg:text-left">
    
        <ul className="space-y-3">
        <li> <FaChevronRight  size={20} className="text-white">

        </FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">POSH</a></li>

         <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">LGC</a></li>
         <li> <FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">RTI</a></li>
         <li> <FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">Tenders</a></li>
        </ul>

        <ul className="space-y-3 mt-5">
         <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">CSIR</a></li>
         <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">CSIR-AMS</a></li>
          <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">E-OFFICE</a></li>
          <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">E-HRMS 2.0</a></li>
        </ul>
          <ul className="space-y-3 mt-5">
            <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">AeBAS</a></li>
            <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">WEB-MAIL</a></li>
            <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">SHE-BOX</a></li>
          </ul>
        <ul className="space-y-3 mt-5">
          <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">GUEST HOUSE</a></li>
          <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">STAFF CLUB</a></li>
          <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">INCOME TAX</a></li>

        </ul>
        <ul className="space-y-3 mt-5">
          <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">CONTACT US</a></li>
          <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">WEBSITE POLICIES</a></li>
          <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">DISCLAIMER</a></li>
          <li><FaChevronRight  size={20} className="text-white"></FaChevronRight><a href="#" className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">ARCHIVE</a></li>
        </ul>
      
      </div>

    </div>


<div className="flex flex-col items-end mr-20 mb-20">
  <p className="text-[30px] font-bold text-white">Find Us Online</p> 

  {/* Facebook */}
  <a href="https://facebook.com/csirngrihyd" target="_blank" rel="noopener noreferrer"
     className="relative group w-14 h-14 flex items-center justify-center rounded-full overflow-hidden bg-transparent transition duration-500 shadow-md">
    <span className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
    <FaSquareFacebook size={28} className="text-white z-10 group-hover:scale-125 transition-transform duration-300 " />
  </a> 

  {/* Twitter / X */}
 <a href="https://x.com/yourpage" target="_blank" rel="noopener noreferrer"
     className="relative group w-14 h-14 flex items-center justify-center rounded-full overflow-hidden bg-transparent transition duration-500 shadow-md">
    <span className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
    <FaSquareXTwitter size={28} className="text-white z-10 group-hover:scale-125 transition-transform duration-300" />
  </a> 

  {/* YouTube */}
  <a href="https://youtube.com/yourpage" target="_blank" rel="noopener noreferrer"
     className="relative group w-14 h-14 flex items-center justify-center rounded-full overflow-hidden bg-transparent transition duration-500 shadow-md">
    <span className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
    <FaYoutubeSquare size={28} className="text-white z-10 group-hover:scale-125 transition-transform duration-300" />
  </a>

  
</div>  


      {/* Visitors Count Section */}
      <div className="flex justify-center items-center mt-6">
  <span className="text-white"><VisitorsCount size={30} /></span>
      </div>



      {/* Bottom section: All rights reserved*/}
      <div className="border-t  text-center text-white py-8 px-4 border-white/20 ">
        <p className="text-xs sm:text-sm font-semibold max-w-4xl mx-auto loading-relaxed">
  © 2025 Crafted and maintained by CSIR-NGRI's IT Division, Hyderabad. All rights reserved.
</p>
  </div>
      
    </footer>
  );
};

export default Footer;
