import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import CDU from "../../assets/images/ImageGallery/inauguration-Central-Display -Unit-CSIR-at-NGRI.jpeg";
import TT from "../../assets/images/ImageGallery/Estimation-Near-Surface-Seismic-Characterisation-Twin-Towers.png";
import Swachh from "../../assets/images/ImageGallery/Swachhata-Pakhwada-2025.png";
import SEG from "../../assets/images/ImageGallery/SEG_Strategic-Partnership-Award.png";
import StartupConclave2 from "../../assets/images/ImageGallery/Startup_Conclave2.jpeg";
import StartupConclave1 from "../../assets/images/ImageGallery/Startup_Conclave1.jpeg";
import CSIRGU from "../../assets/images/ImageGallery/German-Academic-Exchange-Service1.png";

const Imagegallery = [
  {
    id: 0,
    image: CDU,
    description:
      "Central Display Unit of CSIR was inaugurated by the esteemed Padma Shri Dr. Shailesh Nayak JI at CSIR-NGRI",
    pageURL: "",
  },
  {
    id: 1,
    image: TT,
    description:
      "Estimation of Near-Surface Seismic Characterisation - Twin Towers",
    pageURL: "https://www.ngri.res.in/ngri-news/seismic-twin-towers.php",
  },
  {
    id: 2,
    image: Swachh,
    description: "Swachhata Pakhwada 2025",
    pageURL: "",
  },
  {
    id: 3,
    image: SEG,
    description: "SEG Strategic Partnership Award",
    pageURL:
      "https://www.ngri.res.in/ngri-news/seg-strategic-partnership-award.php",
  },
  {
    id: 4,
    image: StartupConclave2,
    description: "Future on show at startup conclave",
    pageURL: "https://www.ngri.res.in/ngri-news/future-startup-conclave.php",
  },
  {
    id: 5,
    image: StartupConclave1,
    description: "Startup Conclave - CSIR-NGRI and NPCIL signed an MoU",
    pageURL: "https://www.ngri.res.in/ngri-news/startup-conclave-mou.php",
  },
  {
    id: 6,
    image: CSIRGU,
    description:
      "Hyderabad CSIR Labs Host German University Leaders to Explore Research Collaborations",
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
    setCurrentIndex(
      (prev) => (prev - 1 + Imagegallery.length) % Imagegallery.length
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => (prev + 1) % Imagegallery.length);
  };

  useEffect(() => {
    const timer = setInterval(handleRightClick, 3000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index) => {
    const difference = index - currentIndex;
    let zIndex = 1;
    let scale = 0.7;
    let opacity = 0.4;
    let transform = "";
    let blur = "blur(2px)";

    if (difference === 0) {
      transform = "translateX(0) translateZ(0) rotateY(0deg)";
      zIndex = 10;
      opacity = 1;
      scale = 1;
      blur = "blur(0px)";
    } else if (difference === -1 || difference === Imagegallery.length - 1) {
      transform = "translateX(-120px) translateZ(-100px) rotateY(25deg)";
      zIndex = 5;
      opacity = 0.7;
      scale = 0.85;
      blur = "blur(1px)";
    } else if (difference === 1 || difference === -(Imagegallery.length - 1)) {
      transform = "translateX(120px) translateZ(-100px) rotateY(-25deg)";
      zIndex = 5;
      opacity = 0.7;
      scale = 0.85;
      blur = "blur(1px)";
    } else if (difference === -2 || difference === Imagegallery.length - 2) {
      transform = "translateX(-200px) translateZ(-200px) rotateY(45deg)";
      zIndex = 2;
      opacity = 0.4;
      scale = 0.7;
      blur = "blur(3px)";
    } else if (difference === 2 || difference === -(Imagegallery.length - 2)) {
      transform = "translateX(200px) translateZ(-200px) rotateY(-45deg)";
      zIndex = 2;
      opacity = 0.4;
      scale = 0.7;
      blur = "blur(3px)";
    } else {
      opacity = 0;
      transform = "translateX(300px) translateZ(-300px) rotateY(-60deg)";
    }

    return {
      zIndex,
      opacity,
      filter: blur,
      transform: `${transform} scale(${scale})`,
      transition: "all 0.8 cubic-bezier(0.25,0.46,0.45,0.94)",
    };
  };

  return (
    <section className="bg-[#EDE8D0]  py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-red-500 font-bold text-center text-4xl mb-12">
          Image Gallery
        </h1>
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-96   mb-8 flex items-center justify-center">
          <div
            className="relative flex items-center justify-center w-full h-full"
            style={{ perspective: "1000px" }}
          >
            {Imagegallery.map((imageItem, index) => (
              <div
                className=" cursor-pointer relative w-80 h-80 "
                key={imageItem.id}
                style={getCardStyle(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCard(index)}
              >
                {/* height and width of image */}
                <div
                  className={`w-[800px] h-[450px] sm: md: lg: xl:w-[28rem] bg-white rounded-lg shadow-2xl overflow-hidden relative border border-gray-300 ${
                    hoveredIndex === index ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  {/* <div className='h-2/3 overflow-hidden'>
      <img src={imageItem.image}
       alt={imageItem.description} 
       className='w-full h-full object-cover rounded-md shadow-lg'/>
       </div>

     <a href={imageItem.pageURL} className='text-sm font-semibold text-blue-500 hover:text-blue-700'
     target="_blank"
     rel="noopener noreferrer">
     {imageItem.description}
     </a>
     </div>
     </div>
    
    ))}
    </div> */}

                  {/* image description text  */}
                  <div className="h-3/4 overflow-hidden">
                    <img
                      src={imageItem.image}
                      alt={imageItem.description}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 h-1/4 flex flex-col justify-center">
                    <a
                      href={imageItem.pageURL || "#"}
                      target={imageItem.pageURL?"_blank":"_self"}
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-base text-blue-500  hover:text-blue-700 text-center line-clamp-2 transition-colors duration-200 "
                    >
                      {imageItem.description}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* left navigation arrow */}
          <div className="absolute left-2 sm:left-4 md:left-8 z-20">
            <MdKeyboardArrowLeft
              size={60}
              onClick={handleLeftClick}
              className="text-white hover:bg-blue-500 hover:rounded-full hover:text-white left-8  cursor-pointer p-2 transition-all duration-200 bg-black bg-opacity-50 rounded-full sm:w-12 sm:h-12 md:w-14 md:h-14 "
            />
          </div>
          {/* right navigation arrow */}
          <div className="absolute right-2 sm:right-4 md:right-8 z-20">
            <MdKeyboardArrowRight
              size={60}
              onClick={handleRightClick}
              className="text-white hover:bg-blue-500 hover:rounded-full hover:text-white right-8 cursor-pointer p-2 transition-all duration-200 bg-black bg-opacity-50 rounded-full sm:w-12 sm:h-12 md:w-14 md:h-14"
            />
          </div>
        </div>
        {/* DOts Indicator */}
        <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 space-x-2 md:space-x-3">
          {Imagegallery.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCard(index)}
              className={`w-2 h-2 sm:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-8 px-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-blue-500 hover:text-blue-700">
              {Imagegallery[currentIndex].description}
            </p>
            {Imagegallery[currentIndex].pageURL && (
              <a
                href={Imagegallery[currentIndex].pageURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
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
