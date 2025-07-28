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
    
    className="bg-white max-w-sm  w-full h-full border border-bg-gray-200 rounded-md shadow-lg py-16 px-4 sm:px-8 mt-16    ">
      
      <Link to="https://www.ngri.res.in/ngri-news/archive-enewsletter.php">
      <img src={enews} alt="E-newsletter" className="w-28 h-28 mx-auto object-contain rounded-md " />
        <a href="#" className="text-xl text-blue-600 mt-2 font-semibold">E-NewsLetter</a>
      </Link>
        
        <div className="flex flex-row space-x-2 justify-center mt-4">
         <a href="https://www.ngri.res.in/upload/uploadfiles/newsletter/May2025-eng/"
         target="_blank"
          rel="noopener noreferrer"
         className=" text-blue-500 hover:text-blue-700 font-medium font-serif">English</a>

          <a href="#" className=" text-blue-500 hover:text-blue-700 font-medium font-serif"
          target="_blank"
          rel="noopener noreferrer"
          >Hindi</a>

        </div>
       
        <p className="text-sm leading-relaxed text-center text-gray-700 font-serif ">Volume 7, Issue 5, May 2025</p>
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
