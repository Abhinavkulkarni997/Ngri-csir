import enews from "../../assets/images/EnewsLetter/enews_letter.jpeg";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
const EnewsLetter = () => {
  return (
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    
    className="bg-white  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto  min-h-fit border border-bg-gray-200 rounded-md shadow-lg py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8  mt-8 sm:mt-12 md:mt-16   mx-auto  border-t-4 border-b-4 border-t-[#2f6281] border-b-[#2F6281]">
      
      <Link to="https://www.ngri.res.in/ngri-news/archive-enewsletter.php">
      <img src={enews} alt="E-newsletter" className="w-20 h-20 sm:w-24 sm:h-24 md:h-28 md:w-28 lg:w-32 lg:h-32  mx-auto object-contain rounded-md " />
        <a href="#" className="block text-center text-lg sm:text-xl md:text-2xl  text-blue-600 mt-2 sm:mt-3 md:mt-4 font-semibold hover:text-blue-700 transition-colors text-nowrap font-serif">E-NewsLetter</a>
      </Link>
        
        <div className="flex flex-row space-x-3 sm:space-x-4 md:space-x-6 justify-center mt-3 sm:mt-4 md:mt-6">
         <a href="https://www.ngri.res.in/upload/uploadfiles/newsletter/May2025-eng/"
         target="_blank"
          rel="noopener noreferrer"
         className="text-sm sm:text-base md:text-lg text-blue-500 hover:text-blue-700 font-medium font-serif transit duration-colors">English</a>

          <a href="#" className="text-sm sm:text-base md:text-lg text-blue-500 hover:text-blue-700 font-medium font-serif transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          >Hindi</a>

        </div>
       
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-center text-gray-700 font-serif mt-3 sm:mt-4 md:mt-6 ">Volume 7, Issue 5, May 2025</p>
      </motion.div>
    
  );
};

export default EnewsLetter;


// import React from "react";
// import enews from "../../assets/images/EnewsLetter/enews_letter.jpeg";
// import { Link } from "react-router-dom";

// const EnewsLetter = () => {
//   return (
//     <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 max-w-sm w-full border border-gray-100">
//       <div className="flex flex-col items-center text-center space-y-4">
//         {/* Image */}
//         <img
//           src={enews}
//           alt="E-newsletter"
//           className="w-36 h-36 object-contain rounded-xl shadow-md border"
//         />

//         {/* Title Link */}
//         <Link
//           to="https://www.ngri.res.in/ngri-news/archive-enewsletter.php"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-2xl font-bold text-blue-600 hover:underline transition-all duration-200"
//         >
//           e-Newsletter
//         </Link>

//         {/* Language Links */}
//         <div className="flex justify-center gap-4">
//           <a
//             href="https://www.ngri.res.in/upload/uploadfiles/newsletter/May2025-eng/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm text-blue-500 hover:text-blue-700 font-medium"
//           >
//             English
//           </a>
//           <a
//             href="#"
//             className="text-sm text-blue-500 hover:text-blue-700 font-medium"
//           >
//             Hindi
//           </a>
//         </div>

//         {/* Volume Text */}
//         <p className="text-sm text-gray-600">
//           Volume 7, Issue 5, <span className="font-medium">May 2025</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default EnewsLetter;