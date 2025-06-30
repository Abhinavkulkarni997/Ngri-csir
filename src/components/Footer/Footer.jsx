import React from "react";
import logo1 from "../../assets/images/ngri-logo.png";
import { FaSquareFacebook,FaSquareXTwitter} from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-br from-purple-500 via-blue-900 to indigo-900 bg-sky-500 backdrop-blur-md border-t border-white/20 shadow-md  ">
      {/* Footer content */}
      <div className="grid grid-cols-1">
        <a href="#">
          <img src={logo1} alt="logo" className="h-24 w-24 md:h-24 md:w-24" />
        </a>
      </div>

      <div className="grid grid-cols-5 gap-x-5  md:grid-cols-5">
        <ul>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">POSH</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">LGC</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">RTI</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">Tenders</li></a>
        </ul>

        <ul>
         <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">CSIR</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">CSIR-AMS</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">E-OFFICE</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">E-HRMS 2.0</li></a>
        </ul>
          <ul>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">AeBAS</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">WEB-MAIL</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">SHE-BOX</li></a>
        </ul>
        <ul>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">GUEST HOUSE</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">STAFF CLUB</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">INCOME TAX</li></a>
        
        </ul>
        <ul>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">CONTACT US</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">WEBSITE POLICIES</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">DISCLAIMER</li></a>
          <a href="#"><li className="font-semibold text-white hover:underline underline-offset-2 text-decoration:none">ARCHIVE</li></a>
        </ul>
      
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center  mt-10">
        <p className="text-[30px] font-bold text-white w-full text-center mb-4">Find Us Online</p>
       <a href="https://www.facebook.com/csirngrihyd/"> 
       <FaSquareFacebook size={30} className="text-white text-2xl rounded-4xl hover:bg-sky-500 bg-transparent transition duration-500 shadow-md" />
       </a>
       <a href="https://x.com/csirngri"> <FaSquareXTwitter size={30} className="text-white text-2xl rounded-lg hover:bg-black bg-transparent transition duration-500 shadow-md" /></a>
       <a href="https://www.youtube.com/@csir-ngri"> <FaYoutubeSquare size={30} className="text-white text-2xl rounded-lg hover:bg-red-500 bg-transparent transition duration-500 shadow-md" /></a>
      </div>


<div className="flex justify-center items-center gap-5 mt-10 flex-wrap">
  <p className="text-[30px] font-bold text-white w-full text-center mb-4">Find Us Online</p>

  {/* Facebook */}
  <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer"
     className="relative group w-14 h-14 flex items-center justify-center rounded-full overflow-hidden bg-transparent transition duration-500 shadow-md">
    <span className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
    <FaSquareFacebook size={28} className="text-white z-10 group-hover:scale-125 transition-transform duration-300" />
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



      
      <div className="text-center text-white py-4 mt-40">
        <p className="text-sm font-semibold">
  © 2025 Crafted and maintained by CSIR-NGRI's IT Division, Hyderabad. All rights reserved.
</p>
  </div>
      
    </footer>
  );
};

export default Footer;
