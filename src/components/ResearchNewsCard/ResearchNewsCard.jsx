// import React from "react";
// import renews from "../../assets/images/ResearchNews/re_news.png";
// const ResearchNewsCard = () => {
//   return (
//     <div className="bg-white  border border-gray-200 rounded-md shadow-lg py-16 px-8 sm:px-8 mt-8 ml-4 ">
            
//         <div className="">
//           <img src={renews} alt="enews" className="w-36 h-36 mx-auto " />
//           </div>
//           <a href="#" className="text-2xl text-blue-500 mt-4">Research News</a>
//           <p className="text-sm leading-relaxed mt-4">Explore Monthly Research Papers for the Latest Insights</p>
//       </div>
  
//   );
// };
// export default ResearchNewsCard;




import React from "react";
import researchnews from "../../assets/images/ResearchNews/re_news.png"; // Replace with your actual image
import { Link } from "react-router-dom";

const ResearchNewsCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 max-w-sm w-full border border-gray-100">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Image */}
        <img
          src={researchnews}
          alt="Research News"
          className="w-36 h-36 object-contain rounded-xl shadow-md border"
        />

        {/* Title */}
        <Link
          to="https://www.ngri.res.in/ngri-news/research-roundup.php"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold text-blue-600 hover:underline transition-all duration-200"
        >
          Research News
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          Explore monthly research papers for the latest insights.
        </p>
      </div>
    </div>
  );
};

export default ResearchNewsCard;
