import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/CCMB-logo.png"; 

const Navbar = () => {


  return (
    // <nav className="bg-blue-900 shadow-md sticky fixed top-0 z-50 w-full">
    //   <div className="flex items-center justify-between px-6 py-4 w-full">
    //     {/* Logo */}
    //     <div className="flex items-center space-x-3">
    //       <img src={logo} alt="Logo" className="h-10 w-10" />
    //          <h1 className="text-sm md:text-lg font-bold">
    //     <span className="text-orange-500">CSIR-NGRI</span>
    //     <span className="text-white"> - National</span>{" "}
    //     <span className="text-green-600">Geophysical Research Institute</span>
    //   </h1>


      
          
    //     </div>

    //     {/* Desktop Menu */}
    //     <div className="hidden md:flex space-x-6">
    //       <Link to="/" className="text-white hover:text-blue-700 font-medium ">About
    //       </Link>
    //       <Link to="/about" className="text-white hover:text-blue-700 font-medium">R & D Groups</Link>
    //       <Link to="/research" className="text-white hover:text-blue-700 font-medium">People</Link>
    //       <Link to="/contact" className="text-white hover:text-blue-700 font-medium">Resources</Link>
    //       <Link to="/Join Us" className="text-white hover:text-blue-700 font-medium">Join Us</Link>
    //     </div>

    //   </div>

   
      
    // </nav>

    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
  <div className="flex items-center justify-between px-6 py-4 w-full">
    {/* Left: Logo + Title */}
    <div className="flex items-center gap-3">
      <img src={logo} alt="Logo" className="h-10 w-10" />
      <h1 className="text-sm md:text-lg font-bold">
        <span className="text-orange-500">CSIR-NGRI</span>
        <span className="text-black"> - National</span>{" "}
        <span className="text-green-600">Geophysical Research Institute</span>
      </h1>
    </div>

    {/* Right: Navigation Links */}
    <div className="hidden md:flex gap-6 font-medium">
      <Link to="/" className="hover:text-blue-600">Home</Link>
      <Link to="/rnd" className="hover:text-blue-600">R & D Groups</Link>
      <Link to="/people" className="hover:text-blue-600">People</Link>
      <Link to="/resources" className="hover:text-blue-600">Resources</Link>
      <Link to="/join" className="hover:text-blue-600">Join Us</Link>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
