import React from "react";
import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer1 = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-500 via-blue-900 to-indigo-900 backdrop-blur-md border-t border-white/20 shadow-md">
      {/* Main Footer Content: Logo Left, Content Center, Social Media Right */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left: Logo */}
          <div className="flex justify-center lg:justify-start">
            <a href="#" className="block">
              <div className="h-20 w-20 md:h-24 md:w-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="h-16 w-16 md:h-20 md:w-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-2 border-2 border-white rounded-full"></div>
                  <div className="text-white font-bold text-sm md:text-base z-10">NGRI</div>
                </div>
              </div>
            </a>
          </div>

          {/* Center: Main Content Links */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-6 xl:gap-4">
              {/* Column 1 */}
              <div className="text-center lg:text-left space-y-1">
                <h4 className="text-purple-200 font-semibold text-sm uppercase tracking-wide mb-4">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      POSH
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      LGC
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      RTI
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      Tenders
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="text-center lg:text-left space-y-1">
                <h4 className="text-purple-200 font-semibold text-sm uppercase tracking-wide mb-4">CSIR Services</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      CSIR
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      CSIR-AMS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      E-OFFICE
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      E-HRMS 2.0
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="text-center lg:text-left space-y-1">
                <h4 className="text-purple-200 font-semibold text-sm uppercase tracking-wide mb-4">Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      AeBAS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      WEB-MAIL
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      SHE-BOX
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div className="text-center lg:text-left space-y-1">
                <h4 className="text-purple-200 font-semibold text-sm uppercase tracking-wide mb-4">Facilities</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      GUEST HOUSE
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      STAFF CLUB
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      INCOME TAX
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 5 */}
              <div className="text-center lg:text-left space-y-1">
                <h4 className="text-purple-200 font-semibold text-sm uppercase tracking-wide mb-4">Information</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      CONTACT US
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      WEBSITE POLICIES
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      DISCLAIMER
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block font-medium text-white hover:text-purple-200 hover:underline underline-offset-2 transition-colors duration-200 text-sm">
                      ARCHIVE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Social Media */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col items-center lg:items-end gap-6">
              <h3 className="text-xl md:text-2xl font-bold text-white">Find Us Online</h3>
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/csirngrihyd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group w-12 h-12 flex items-center justify-center rounded-full overflow-hidden bg-transparent transition duration-500 shadow-lg hover:shadow-xl"
                  aria-label="Visit our Facebook page"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
                  <Facebook 
                    size={24} 
                    className="text-white z-10 group-hover:scale-125 transition-transform duration-300" 
                  />
                </a>

                {/* Twitter / X */}
                <a 
                  href="https://x.com/csirngri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group w-12 h-12 flex items-center justify-center rounded-full overflow-hidden bg-transparent transition duration-500 shadow-lg hover:shadow-xl"
                  aria-label="Visit our X (Twitter) page"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
                  <Twitter 
                    size={24} 
                    className="text-white z-10 group-hover:scale-125 transition-transform duration-300" 
                  />
                </a>

                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@csir-ngri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group w-12 h-12 flex items-center justify-center rounded-full overflow-hidden bg-transparent transition duration-500 shadow-lg hover:shadow-xl"
                  aria-label="Visit our YouTube channel"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
                  <Youtube 
                    size={24} 
                    className="text-white z-10 group-hover:scale-125 transition-transform duration-300" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: All Rights Reserved */}
      <div className="border-t border-white/20 text-center text-white py-8 px-4">
        <p className="text-xs sm:text-sm font-semibold max-w-4xl mx-auto leading-relaxed">
          © 2025 Crafted and maintained by CSIR-NGRI's IT Division, Hyderabad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer1;