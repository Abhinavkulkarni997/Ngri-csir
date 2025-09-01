import renews from "../../assets/images/ResearchNews/re_news.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ResearchNewsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    className="bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl min-h-fit h-auto border border-gray-200 rounded-md shadow-lg py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8  mt-8 sm:mt-12 md:mt-16 mx-auto sm:ml-4 md:ml-6 lg:ml-8 border-t-4 border-b-4 border-t-[#2f6281] border-b-[#2f6281] hover:scale-105 ">
      <Link to="https://www.ngri.res.in/cms/rnews.php" target="_blank" rel="noopener noreferrer">
          <img src={renews} alt="ResearchNews" className="w-20 h-20 sm:h-24 sm:w-24 md:w-28 md:h-28 lg:h-32 mx-auto object-contain rounded-md " />
          {/* <hr className="w-full  mt-2 border-1 border-[#2f6281]"></hr> */}
          <a href="#" className="block text-center text-lg sm:text-xl md:text-2xl  text-blue-500 hover:text-blue-700 font-semibold mt-3 sm:mt-4 md:mt-6 transition-colors">Research News</a>
          </Link>
          <p className="text-xs sm:text-sm md:text-base  leading-relaxed text-center text-gray-700 font-serif mt-3 sm:mt-4 md:mt-6 ">Explore Monthly Research Papers for the Latest Insights</p>
      </motion.div>
  
  );
};
export default ResearchNewsCard;













// import React from "react";
// import researchnews from "../../assets/images/ResearchNews/re_news.png"; // Replace with your actual image
// import { Link } from "react-router-dom";

// const ResearchNewsCard = () => {
//   return (
//     <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 max-w-sm w-full border border-gray-100">
//       <div className="flex flex-col items-center text-center space-y-4">
//         {/* Image */}
//         <img
//           src={researchnews}
//           alt="Research News"
//           className="w-36 h-36 object-contain rounded-xl shadow-md border"
//         />

//         {/* Title */}
//         <Link
//           to="https://www.ngri.res.in/ngri-news/research-roundup.php"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-2xl font-bold text-blue-600 hover:underline transition-all duration-200"
//         >
//           Research News
//         </Link>

//         {/* Description */}
//         <p className="text-sm text-gray-600 leading-relaxed">
//           Explore monthly research papers for the latest insights.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ResearchNewsCard;