import { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import  CSIRONEDAY from '../../assets/images/ImageGallery/CSIR’s-OneDay-as-a-Scientist-Programme-21-25July.png';
import  JIGYASA  from '../../assets/images/ImageGallery/Jigyasa-Programme-July2025.png';
import NGA2024 from '../../assets/images/ImageGallery/National-Geoscience-Award-2024.png';
import CDU from "../../assets/images/ImageGallery/inauguration-Central-Display -Unit-CSIR-at-NGRI.jpeg";
import TT from "../../assets/images/ImageGallery/Estimation-Near-Surface-Seismic-Characterisation-Twin-Towers.png";
import Swachh from "../../assets/images/ImageGallery/Swachhata-Pakhwada-2025.png";
import SEG from "../../assets/images/ImageGallery/SEG_Strategic-Partnership-Award.png";
import StartupConclave2 from "../../assets/images/ImageGallery/Startup_Conclave2.jpeg";
import StartupConclave1 from "../../assets/images/ImageGallery/Startup_Conclave1.jpeg";
import CSIRGU from "../../assets/images/ImageGallery/German-Academic-Exchange-Service1.png";


const Imagegallery = [
  {
    id:0,
    image:CSIRONEDAY,
    description:'CSIR’s One Day as a Scientist Programme',
    pageURL:'https://jigyasa-csir.in/ods-2025/',
  },
  {
    id:1,
    image:JIGYASA,
    description:'JIGYASA Program organised by CSIR-NGRI on 9th July 2025',
    pageURL:'',

  },
  {
    id:2,
    image:NGA2024,
    description:'National Geoscience Award 2024 - Basic Geosciences',
    pageURL:'https://www.ngri.res.in/ngri-news/national-geoscience-award-2024.php'
  },
  {
    id: 3,
    image: CDU,
    description: "Central Display Unit of CSIR was inaugurated by the esteemed Padma Shri Dr. Shailesh Nayak JI at CSIR-NGRI",
    pageURL: "",
  },
  {
    id: 4,
    image: TT,
    description: "Estimation of Near-Surface Seismic Characterisation - Twin Towers",
    pageURL: "https://www.ngri.res.in/ngri-news/seismic-twin-towers.php",
  },
  {
    id: 5,
    image: Swachh,
    description: "Swachhata Pakhwada 2025",
    pageURL: "",
  },
  {
    id: 6,
    image: SEG,
    description: "SEG Strategic Partnership Award",
    pageURL: "https://www.ngri.res.in/ngri-news/seg-strategic-partnership-award.php",
  },
  {
    id: 7,
    image: StartupConclave2,
    description: "Future on show at startup conclave",
    pageURL: "https://www.ngri.res.in/ngri-news/future-startup-conclave.php",
  },
  {
    id: 8,
    image: StartupConclave1,
    description: "Startup Conclave - CSIR-NGRI and NPCIL signed an MoU",
    pageURL: "https://www.ngri.res.in/ngri-news/startup-conclave-mou.php",
  },
  {
    id: 9,
    image: CSIRGU,
    description: "Hyderabad CSIR Labs Host German University Leaders to Explore Research Collaborations",
    pageURL: "https://www.ngri.res.in/ngri-news/indo-german-collaboration.php",
  },
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCard = (index) => {
    setCurrentIndex(index);
  };

  const handleLeftClick = () => {
    setCurrentIndex((prev) => (prev - 1 + Imagegallery.length) % Imagegallery.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => (prev + 1) % Imagegallery.length);
  };

  useEffect(() => {
    let timer;
    if (hoveredIndex === null) {
      timer = setInterval(handleRightClick, 4000);
    }
    return () => clearInterval(timer);
  }, [hoveredIndex]);

//   const getCardStyle = (index) => {
//     const difference = index - currentIndex;
//     const totalCards = Imagegallery.length;

//     let normalDifference = difference;
//     if (difference > totalCards / 2) {
//       normalDifference = difference - totalCards;
//     } else if (difference < -totalCards / 2) {
//       normalDifference = difference + totalCards;
//     }

//     let zIndex = 1;
//     let scale = 0.6;
//     let opacity = 0.3;
//     let transform = "";
//     let blur = "blur(3px)";
//     if (typeof window !== "undefined" && window.innerWidth < 768) {
//   blur = "blur(0px)";
// }

//     if (normalDifference === 0) {
//       transform = "translateX(0) translateZ(0) rotateY(0deg)";
//       zIndex = 10;
//       opacity = 1;
//       scale = 1;
//       blur = "blur(0px)";
//     } else if (normalDifference === -1) {
//       transform = "translateX(-180px) translateZ(-50px) rotateY(35deg)";
//       zIndex = 8;
//       opacity = 0.8;
//       scale = 0.85;
//       blur = "blur(1px)";
//     } else if (normalDifference === -2) {
//       transform = "translateX(-300px) translateZ(-100px) rotateY(50deg)";
//       zIndex = 6;
//       opacity = 0.6;
//       scale = 0.7;
//       blur = "blur(2px)";
//     } else if (normalDifference < -2) {
//       transform = "translateX(-400px) translateZ(-150px) rotateY(65deg)";
//       zIndex = 4;
//       opacity = 0.4;
//       scale = 0.6;
//       blur = "blur(3px)";
//     } else if (normalDifference === 1) {
//       transform = "translateX(180px) translateZ(-50px) rotateY(-35deg)";
//       zIndex = 8;
//       opacity = 0.8;
//       scale = 0.85;
//       blur = "blur(1px)";
//     } else if (normalDifference === 2) {
//       transform = "translateX(300px) translateZ(-100px) rotateY(-50deg)";
//       zIndex = 6;
//       opacity = 0.6;
//       scale = 0.7;
//       blur = "blur(2px)";
//     } else if (normalDifference > 2) {
//       transform = "translateX(400px) translateZ(-150px) rotateY(-65deg)";
//       zIndex = 4;
//       opacity = 0.4;
//       scale = 0.6;
//       blur = "blur(3px)";
//     }

//     return {
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       zIndex,
//       opacity,
//       filter: blur,
//       transform: `translate(-50%,-50%) ${transform} scale(${scale})`,
//       transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
//       transformOrigin: "center center",
//       boxShadow: normalDifference === 0 ? "0 0 80px rgba(0,0,0,0.3)" : "none",
//       willChange: "transform, opacity",
//   backfaceVisibility: "hidden",
//     };
//   };

  const getCardStyle = (index) => {
  const difference = index - currentIndex;
  const totalCards = Imagegallery.length;

  let normalDifference = difference;
  if (difference > totalCards / 2) {
    normalDifference = difference - totalCards;
  } else if (difference < -totalCards / 2) {
    normalDifference = difference + totalCards;
  }

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  let zIndex = 1;
  let scale = isMobile ? 0.8 : 0.6;
  let opacity = 0.3;
  let transform = "";
  let blur = "blur(3px)";

  if (normalDifference === 0) {
    transform = "translateX(0) translateZ(0) rotateY(0deg)";
    zIndex = 10;
    opacity = 1;
    scale = 1;
    blur = "blur(0px)";
  } else if (normalDifference === -1) {
    transform = isMobile
      ? "translateX(-100px) translateZ(-30px) rotateY(15deg)"
      : "translateX(-150px) translateZ(-50px) rotateY(35deg)";
    zIndex = 8;
    opacity = 0.8;
    scale = isMobile ? 0.9 : 0.85;
    blur = "blur(1px)";
  } else if (normalDifference === -2) {
    transform = isMobile
      ? "translateX(-180px) translateZ(-60px) rotateY(25deg)"
      : "translateX(-250px) translateZ(-100px) rotateY(50deg)";
    zIndex = 6;
    opacity = 0.6;
    scale = isMobile ? 0.85 : 0.7;
    blur = "blur(2px)";
  } else if (normalDifference < -2) {
    transform = isMobile
      ? "translateX(-250px) translateZ(-80px) rotateY(30deg)"
      : "translateX(-350px) translateZ(-150px) rotateY(65deg)";
    zIndex = 4;
    opacity = 0.4;
    scale = isMobile ? 0.8 : 0.6;
    blur = "blur(3px)";
  } else if (normalDifference === 1) {
    transform = isMobile
      ? "translateX(100px) translateZ(-30px) rotateY(-15deg)"
      : "translateX(150px) translateZ(-50px) rotateY(-35deg)";
    zIndex = 8;
    opacity = 0.8;
    scale = isMobile ? 0.9 : 0.85;
    blur = "blur(1px)";
  } else if (normalDifference === 2) {
    transform = isMobile
      ? "translateX(180px) translateZ(-60px) rotateY(-25deg)"
      : "translateX(250px) translateZ(-100px) rotateY(-50deg)";
    zIndex = 6;
    opacity = 0.6;
    scale = isMobile ? 0.85 : 0.7;
    blur = "blur(2px)";
  } else if (normalDifference > 2) {
    transform = isMobile
      ? "translateX(250px) translateZ(-80px) rotateY(-30deg)"
      : "translateX(350px) translateZ(-150px) rotateY(-65deg)";
    zIndex = 4;
    opacity = 0.4;
    scale = isMobile ? 0.8 : 0.6;
    blur = "blur(3px)";
  }

  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex,
    opacity,
    filter: blur,
    transform: `translate(-50%, -50%) ${transform} scale(${scale})`,
    transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
    transformOrigin: "center center",
    willChange: "transform, opacity",
    backfaceVisibility: "hidden",
  };
};

  

  return (
    // <section className="bg-[#FFFFE3] py-8 px-4 sm:px-8"></section>
    <section className="bg-[#CAE9FB] py-8 px-4 sm:px-8 rounded-full">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-red-500 font-bold text-center text-3xl lg:text-4xl mb-12">Image Gallery</h1> */}
        <div className="relative w-full h-[420px] sm:h-[440px] md:h-[460px] lg:h-[480px] xl:h-[500px] overflow-hidden mb-10">
          <div className="relative flex items-center justify-center w-full h-full" style={{ perspective: "1200px" }}>
            {Imagegallery.map((imageItem, index) => (
              <div
                key={imageItem.id}
                style={getCardStyle(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                }}
              
                className="cursor-pointer"
                onClick={() => handleCard(index)}
              >
              
              {/* height and width of the image, change here for responsiveness  */}

                {/* <div
              className={`w-[90vw] h-[200px]
              sm:w-[600px] sm:h-[280px]
              md:w-[750px] md:h-[320px]
              lg:w-[900px] lg:h-[400px]
              bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300 ${
                hoveredIndex === index ? "ring-2 ring-blue-500" : ""
              } hover:shadow-3xl transition-shadow duration-300`}
> */}

<div
  className={`w-[300px] h-[180px]
              sm:w-[600px] sm:h-[300px]
              md:w-[700px] md:h-[330px]
              lg:w-[800px] lg:h-[350px]
              xl:w-[850px] xl:h-[380px]
              bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300 ${
                hoveredIndex === index ? "ring-2 ring-blue-500" : ""
              } hover:shadow-3xl transition-shadow duration-300`}
>


                  <div className="h-full overflow-hidden">
                    <a href={imageItem.pageURL}>
                    <img
                    
                      src={imageItem.image}
                      alt={imageItem.description}
                      className="w-full h-full object-fill drop-shadow-md transition-transform duration-300 hover:scale-105"
                    />
                    {/* object contain to retain original size of image and object-fill to fit the image in container */}
                    </a>
                  
                  </div>
    

                  {/* <div className="p-2 sm:p-3 h-1/4 flex flex-col items-center justify-center">
                    <a
                      href={imageItem.pageURL || "#"}
                      target={imageItem.pageURL ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-base text-blue-500 hover:text-blue-700 text-center line-clamp-2 font-medium transition-colors duration-200"
                    >
                      {imageItem.description}
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={handleLeftClick}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-blue-500 cursor-pointer p-3 bg-black bg-opacity-50 rounded-full"
          >
            <MdKeyboardArrowLeft size={28}/>
          </button>
          <button
            onClick={handleRightClick}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-blue-500 cursor-pointer p-3 bg-black bg-opacity-50 rounded-full"
          >
            <MdKeyboardArrowRight size={28} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mb-6">
          {Imagegallery.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Description */}
        <div className="text-center px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
              {Imagegallery[currentIndex].description}
            </p>
            {Imagegallery[currentIndex].pageURL && (
              <a
                href={Imagegallery[currentIndex].pageURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
              >
                Read Full Article
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;




// import { useEffect, useState } from "react";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { MdKeyboardArrowLeft } from "react-icons/md";
// import CDU from "../../assets/images/ImageGallery/inauguration-Central-Display -Unit-CSIR-at-NGRI.jpeg";
// import TT from "../../assets/images/ImageGallery/Estimation-Near-Surface-Seismic-Characterisation-Twin-Towers.png";
// import Swachh from "../../assets/images/ImageGallery/Swachhata-Pakhwada-2025.png";
// import SEG from "../../assets/images/ImageGallery/SEG_Strategic-Partnership-Award.png";
// import StartupConclave2 from "../../assets/images/ImageGallery/Startup_Conclave2.jpeg";
// import StartupConclave1 from "../../assets/images/ImageGallery/Startup_Conclave1.jpeg";
// import CSIRGU from "../../assets/images/ImageGallery/German-Academic-Exchange-Service1.png";

// const Imagegallery = [
//   {
//     id: 0,
//     image: CDU,
//     description:
//       "Central Display Unit of CSIR was inaugurated by the esteemed Padma Shri Dr. Shailesh Nayak JI at CSIR-NGRI",
//     pageURL: "",
//   },
//   {
//     id: 1,
//     image: TT,
//     description:
//       "Estimation of Near-Surface Seismic Characterisation - Twin Towers",
//     pageURL: "https://www.ngri.res.in/ngri-news/seismic-twin-towers.php",
//   },
//   {
//     id: 2,
//     image: Swachh,
//     description: "Swachhata Pakhwada 2025",
//     pageURL: "",
//   },
//   {
//     id: 3,
//     image: SEG,
//     description: "SEG Strategic Partnership Award",
//     pageURL:
//       "https://www.ngri.res.in/ngri-news/seg-strategic-partnership-award.php",
//   },
//   {
//     id: 4,
//     image: StartupConclave2,
//     description: "Future on show at startup conclave",
//     pageURL: "https://www.ngri.res.in/ngri-news/future-startup-conclave.php",
//   },
//   {
//     id: 5,
//     image: StartupConclave1,
//     description: "Startup Conclave - CSIR-NGRI and NPCIL signed an MoU",
//     pageURL: "https://www.ngri.res.in/ngri-news/startup-conclave-mou.php",
//   },
//   {
//     id: 6,
//     image: CSIRGU,
//     description:
//       "Hyderabad CSIR Labs Host German University Leaders to Explore Research Collaborations",
//     pageURL: "https://www.ngri.res.in/ngri-news/indo-german-collaboration.php",
//   },
// ];

// const ImageGallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(2);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleCard = (index) => {
//     setCurrentIndex(index);
//   };
//   const handleLeftClick = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + Imagegallery.length) % Imagegallery.length
//     );
//   };

//   const handleRightClick = () => {
//     setCurrentIndex((prev) => (prev + 1) % Imagegallery.length);
//   };

//   useEffect(() => {
//     let timer;
//     if(hoveredIndex===null){
//        timer = setInterval(handleRightClick, 4000);
//     }
   
//     return () => clearInterval(timer);
//   }, [hoveredIndex]);
// const getCardStyle = (index) => {
//   const total = Imagegallery.length;
//   const diff = index - currentIndex;
//   const half = Math.floor(total / 2);

//   let adjustedDiff = diff;
//   if (diff > half) adjustedDiff = diff - total;
//   if (diff < -half) adjustedDiff = diff + total;

//   const translateX = adjustedDiff * 320;
//   const translateZ = -Math.abs(adjustedDiff) * 200;
//   const rotateY = adjustedDiff * 35;
//   const scale = 1 - Math.abs(adjustedDiff) * 0.12;
//   const opacity = Math.max(0.2, 1 - Math.abs(adjustedDiff) * 0.25);
//   const blur = `blur(${Math.min(3, Math.abs(adjustedDiff))}px)`;

//   return {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     zIndex: 10 - Math.abs(adjustedDiff),
//     opacity,
//     filter: blur,
//     transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
//     transition: 'all 0.6s ease',
//     transformOrigin: 'center center',
//   };
// };

//   // const getCardStyle = (index) => {
//   //   const difference = index - currentIndex;
//   //   const totalCards = Imagegallery.length;

//   //   let normalDifference = difference;
//   //   if(difference>totalCards/2){
//   //     normalDifference = difference - totalCards;
//   //   }else if(difference<-totalCards/2){
//   //     normalDifference = difference + totalCards;
//   //   }

//   //   let zIndex = 1;
//   //   let scale = 0.6;
//   //   let opacity = 0.3;
//   //   let transform = "";
//   //   let blur = "blur(3px)";

//   //   if (normalDifference === 0) {
//   //     transform = "translateX(0) translateZ(0) rotateY(0deg)";
//   //     zIndex = 10;
//   //     opacity = 1;
//   //     scale = 1;
//   //     blur = "blur(0px)";
//   //   } else if (normalDifference === -1) {
//   //     transform = "translateX(-150px) translateZ(-50px) rotateY(35deg)";
//   //     zIndex = 8;
//   //     opacity = 0.8;
//   //     scale = 0.85;
//   //     blur = "blur(1px)";
//   //   } else if (normalDifference === -2) {
//   //     transform = "translateX(-250px) translateZ(-100px) rotateY(50deg)";
//   //     zIndex = 6;
//   //     opacity = 0.6;
//   //     scale = 0.7;
//   //     blur = "blur(2px)";
//   //   } else if (normalDifference <-2) {
//   //     transform = "translateX(-350px) translateZ(-150px) rotateY(65deg)";
//   //     zIndex = 4;
//   //     opacity = 0.4;
//   //     scale = 0.6;
//   //     blur = "blur(3px)";
//   //   } else if (normalDifference === 1) {
//   //     transform = "translateX(150px) translateZ(-50px) rotateY(-35deg)";
//   //     zIndex = 8;
//   //     opacity = 0.8;
//   //     scale = 0.85;
//   //     blur = "blur(1px)";
//   //   } else if (normalDifference === 2) {
//   //     opacity = 0.6;
//   //     transform = "translateX(250px) translateZ(-100px) rotateY(-50deg)";
//   //     zIndex=6;
//   //     opacity=0.6;
//   //     scale=0.7;
//   //     blur = "blur(2px)";
//   //   }else if (normalDifference > 2) {
//   //     transform = "translateX(350px) translateZ(-150px) rotateY(-65deg)";
//   //     zIndex = 4; 
//   //     opacity = 0.4;
//   //     scale = 0.6;
//   //     blur = "blur(3px)";
//   //   }

//   //   return {
//   //     position:'absolute',
//   //     top:'50%',
//   //     left:'50%',
//   //     zIndex,
//   //     opacity,
//   //     filter: blur,
//   //     transform: `translate(-50%,-50%) ${transform} scale(${scale})`,
//   //     transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
//   //     transformOrigin:"center center"
//   //   };
//   // };

//   return (
//     <section className="bg-[#EDE8D0]  py-8 px-4 sm:px-8">
//       <div className="max-w-xl mx-auto">
//         <h1 className="text-red-500 font-bold text-center text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12">
//           Image Gallery
//         </h1>
//        <div className="relative w-full h-[24rem] sm:h-[26rem] md:h-[28rem] lg:h-[30rem] xl:h-[32rem] mb-8 overflow-visible">

//           <div
//             className="relative  flex items-center justify-center w-full h-full"
//             style={{ perspective: "1200px" }}
//           >
//             {Imagegallery.map((imageItem, index) => (
//               <div
//                 className=" cursor-pointer   "
//                 key={imageItem.id}
//                 style={getCardStyle(index)}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 onClick={() => handleCard(index)}
//               >
//                 {/* height and width of image */}
//                <div
//   className={`w-[800px] h-[350px]
//               sm:w-[820px] sm:h-[360px]
//               md:w-[850px] md:h-[380px]
//               lg:w-[900px] lg:h-[400px]
//               bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300 ${
//                 hoveredIndex === index ? "ring-2 ring-blue-500" : ""
//               } hover:shadow-3xl transition-shadow duration-300`}
// >


//                   {/* image description text  */}
//                   <div className="h-4/5 overflow-hidden">
//                     <img
//                       src={imageItem.image}
//                       alt={imageItem.description}
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                   </div>
//                   <div className="p-2 sm:p-3  h-1/4 flex flex-col items-center justify-center">
//                     <a
//                       href={imageItem.pageURL || "#"}
//                       target={imageItem.pageURL?"_blank":"_self"}
//                       rel="noopener noreferrer"
//                       className="text-xs sm:text-sm md:text-base text-blue-500  hover:text-blue-700 text-center line-clamp-2 font-medium transition-colors duration-200 "
//                     >
//                       {imageItem.description}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* left navigation arrow */}
         
//             <button
              
//               onClick={handleLeftClick}
//               className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-blue-500 hover:rounded-full hover:text-white   cursor-pointer p-2 sm:p-3 transition-all duration-300 bg-black bg-opacity-50 rounded-full hover:scale-110 "
//             ><MdKeyboardArrowLeft size={24}/></button>
          
//           {/* right navigation arrow */}
        
//             <button
              
//               onClick={handleRightClick}
//               className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20
//               text-white hover:bg-blue-500 hover:rounded-full hover:text-white  cursor-pointer p-2 sm:p-3 transition-all duration-300 bg-black bg-opacity-50 rounded-full hover:scale-105"
//             ><MdKeyboardArrowRight size={24}/></button>
          
//         </div>
//         {/* DOts Indicator */}
//         <div className="flex justify-center space-x-2 mb-8 sm:space-x-3">
//           {Imagegallery.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleCard(index)}
//               className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex
//                   ? "bg-blue-500 scale-125"
//                   : "bg-gray-400 hover:bg-gray-600"
//               }`}
//             />
//           ))}
//         </div>

//         <div className="text-center  px-4 sm:px-8">
//           <div className="max-w-3xl mx-auto">
//             <p className="text-lg sm:text-xl md:text-2xl text-blue-500 hover:text-blue-700 font-semibold mb-4">
//               {Imagegallery[currentIndex].description}
//             </p>
//             {Imagegallery[currentIndex].pageURL && (
//               <a
//                 href={Imagegallery[currentIndex].pageURL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block  bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
//               >
//                 Read Full Article
//               </a>
              
              
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageGallery;


