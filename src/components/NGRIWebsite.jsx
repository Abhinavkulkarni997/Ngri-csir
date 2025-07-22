import { useState } from 'react';
import { FaSearch, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaChevronDown } from 'react-icons/fa';

const NGRIWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  // Navigation items
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#", submenu: [
      { name: "Director's Message", href: "#" },
      { name: "History", href: "#" },
      { name: "Organization", href: "#" },
      { name: "CSIR-NGRI Act", href: "#" }
    ]},
    { name: "Research", href: "#", submenu: [
      { name: "Research Areas", href: "#" },
      { name: "Projects", href: "#" },
      { name: "Publications", href: "#" },
      { name: "Facilities", href: "#" }
    ]},
    { name: "Services", href: "#" },
    { name: "Academics", href: "#" },
    { name: "News & Events", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      {/* Top Announcement Bar */}
      <div className="bg-blue-800 text-white text-sm py-1 px-4 text-center">
        <p>CSIR-NGRI is organizing an International Conference on Geosciences from November 15-17, 2023</p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          {/* Top Header */}
          <div className="flex flex-col md:flex-row justify-between items-center py-3 border-b border-gray-200">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/ngri-logo.png" 
                alt="CSIR-NGRI Logo" 
                className="h-16 w-16 mr-4"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">CSIR-National Geophysical Research Institute</h1>
                <p className="text-sm text-gray-600">Ministry of Science & Technology, Government of India</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg flex items-center">
                <FaUser className="mr-2" /> Login
              </button>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="relative">
            <div className="md:hidden flex justify-end py-2">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            <ul className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex space-x-1`}>
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <a 
                    href={item.href} 
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium"
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault();
                        toggleDropdown(index);
                      }
                    }}
                  >
                    <div className="flex items-center">
                      {item.name}
                      {item.submenu && <FaChevronDown className="ml-1 text-xs" />}
                    </div>
                  </a>
                  
                  {item.submenu && (
                    <ul className={`${dropdownOpen === index ? 'block' : 'hidden'} md:group-hover:block absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md z-10 border border-gray-200`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a 
                            href={subItem.href} 
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Advancing Geophysical Research for National Development</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">CSIR-NGRI is India's premier research institute in geophysical sciences with a mandate to conduct research in multidisciplinary areas of geophysics.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Explore Our Research
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition duration-300">
                Latest Publications
              </button>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Research Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Seismic Hazard Assessment",
                  description: "Developing advanced models for earthquake risk evaluation in the Himalayan region.",
                  icon: "🌋"
                },
                {
                  title: "Groundwater Exploration",
                  description: "Innovative techniques for sustainable groundwater resource management.",
                  icon: "💧"
                },
                {
                  title: "Climate Change Studies",
                  description: "Understanding paleoclimate through geophysical proxies.",
                  icon: "🌍"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border-l-4 border-blue-600">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Latest News & Events</h2>
              <a href="#" className="text-blue-700 hover:underline font-medium">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                  <div className="h-48 bg-blue-100"></div>
                  <div className="p-6">
                    <div className="text-sm text-blue-700 mb-2">October 15, 2023</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">NGRI Scientists Discover New Mineral Deposits</h3>
                    <p className="text-gray-600 mb-4">A team of researchers from CSIR-NGRI has identified significant mineral deposits in Central India...</p>
                    <a href="#" className="text-blue-700 hover:underline font-medium">Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "E-Office", href: "#" },
                { name: "Tenders", href: "#" },
                { name: "RTI", href: "#" },
                { name: "Annual Report", href: "#" },
                { name: "Publications", href: "#" },
                { name: "Research Projects", href: "#" },
                { name: "Facilities", href: "#" },
                { name: "Contact Directory", href: "#" }
              ].map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className="bg-blue-700 hover:bg-blue-600 px-4 py-3 rounded-lg text-center transition duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">About NGRI</h3>
              <p className="text-gray-400 mb-4">CSIR-National Geophysical Research Institute (NGRI) is a premier research laboratory under the Council of Scientific & Industrial Research.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "CSIR Headquarters",
                  "CSIR-AMS",
                  "E-HRMS 2.0",
                  "AeBAS",
                  "Web Mail",
                  "SHE-BOX",
                  "Guest House"
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
              <address className="not-italic text-gray-400">
                <div className="flex items-start mb-3">
                  <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                  <span>Uppal Road, Hyderabad - 500007, Telangana, India</span>
                </div>
                <div className="flex items-center mb-3">
                  <FaPhone className="mr-3" />
                  <span>+91-40-2343-4600</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-3" />
                  <a href="mailto:director@ngri.res.in" className="hover:text-white transition duration-300">director@ngri.res.in</a>
                </div>
              </address>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and research news.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                />
                <button 
                  type="submit" 
                  className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded w-full transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} CSIR-NGRI. All Rights Reserved.</p>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition duration-300">Terms of Use</a>
                <a href="#" className="hover:text-white transition duration-300">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NGRIWebsite;