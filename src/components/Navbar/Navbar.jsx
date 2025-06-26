import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/CCMB-logo.png"; 
import logo1 from "../../assets/images/ngri-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-sky-400 shadow-md z-50">
      <div className="flex items-center justify-between p-4">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link to="/" className="flex items-center space-x-1 md:space-x-2">
            <img src={logo} alt="logo" className="h-8 w-8 md:h-12 md:w-12" />
            <img src={logo1} alt="logo" className="h-8 w-8 md:h-12 md:w-12" />
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
              <span className="text-orange-400">CSIR-NGRI</span>
              <span className="text-white"> - National</span>{" "}
              <span className="text-green-600">Geophysical Research Institute</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <li><a href="#home" className="font-medium text-white hover:text-orange-200 transition-colors text-sm xl:text-base">Home</a></li>
          <li><a href="#about" className="font-medium text-white hover:text-orange-200 transition-colors text-sm xl:text-base">About Us</a></li>
          <li><a href="#R&DGroups" className="font-medium text-white hover:text-orange-200 transition-colors text-sm xl:text-base">R & D Groups</a></li>
          <li><a href="#People" className="font-medium text-white hover:text-orange-200 transition-colors text-sm xl:text-base">People</a></li>
          <li><a href="#Resources" className="font-medium text-white hover:text-orange-200 transition-colors text-sm xl:text-base">Resources</a></li>
          <li><a href="#JoinUs" className="font-medium text-white hover:text-orange-200 transition-colors text-sm xl:text-base">Join Us</a></li>
          <li>
            <button className="bg-sky-600 hover:bg-sky-700 px-3 py-2 rounded-lg text-white font-medium transition-colors text-sm xl:text-base">
              Staff Corner
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden bg-sky-400 border-t border-sky-300 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col space-y-2 p-4">
          <li><a href="#home" className="block font-medium text-white hover:text-orange-200 transition-colors py-2" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" className="block font-medium text-white hover:text-orange-200 transition-colors py-2" onClick={toggleMenu}>About Us</a></li>
          <li><a href="#R&DGroups" className="block font-medium text-white hover:text-orange-200 transition-colors py-2" onClick={toggleMenu}>R & D Groups</a></li>
          <li><a href="#People" className="block font-medium text-white hover:text-orange-200 transition-colors py-2" onClick={toggleMenu}>People</a></li>
          <li><a href="#Resources" className="block font-medium text-white hover:text-orange-200 transition-colors py-2" onClick={toggleMenu}>Resources</a></li>
          <li><a href="#JoinUs" className="block font-medium text-white hover:text-orange-200 transition-colors py-2" onClick={toggleMenu}>Join Us</a></li>
          <li className="pt-2">
            <button className="w-full bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-lg text-white font-medium transition-colors" onClick={toggleMenu}>
              Staff Corner
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;