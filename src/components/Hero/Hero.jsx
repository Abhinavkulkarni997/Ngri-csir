// import video from '../../assets/videos/Herovideo.mp4';
// import { FaPlay,FaVolumeMute } from "react-icons/fa";
// import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
// const Hero = () => {
//   // const scrollDownRef=useRef(null);
//   const handleScrollDown=()=>{
//     // scrollDownRef.current?.scrollIntoView({behavior:'smooth'})
//     window.scrollBy({top:window.innerHeight,behavior:'smooth'})
//     console.log('scrolling......')
//   }
//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-blue-600 to-sky-900  mt-[129px]  w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 relative overflow-hidden">
//      <button className='absolute bottom-4 sm:bottom-[30px]  right-2 sm:right-4 bg-sky-500 text-white px-2 py-2 sm:px-4 sm:py-4 rounded-md hover:bg-sky-600 transition-colors '><FaPlay className="hover:bg-black p-0 " size={16} /></button>
//       <button className='absolute bottom-4 sm:bottom-[30px] right-14 sm:right-20 bg-sky-500 text-white px-2 py-2 sm:px-4 sm:py-4 rounded-md hover:bg-sky-600 transition-colors'><FaVolumeMute className="hover:bg-black " size={16}/></button>
//       <div className='absolute bottom-4 sm:bottom-[30px] left-0 right-0 flex justify-center'>
//   <button onClick={handleScrollDown}className='text-white px-2 py-2 sm:px-4 sm:py-4 rounded-md animate-bounce hover:bg-gray-800 transition-colors'>
//     <MdOutlineKeyboardDoubleArrowDown className="" size={32} />
    
//   </button>
  
// </div>
//     <video src={video} className='w-full rounded-2xl h-auto shadow-lg object-cover min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]'  autoPlay muted loop type="video/mp4">
     
//     </video>

//     </div>

    
//   )
// }

// export default Hero

// import video from '../../assets/videos/Herovideo.mp4';
// import { FaPlay, FaVolumeMute } from "react-icons/fa";
// import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

// const Hero = () => {
//   const handleScrollDown = () => {
//     window.scrollBy({
//       top: window.innerHeight,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className="relative h-screen w-full mt-[129px] overflow-hidden">
//       {/* Background Video */}
//       <video
//         src={video}
//         autoPlay
//         muted
//         loop
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         type="video/mp4"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10" />

//       {/* Buttons over video */}
//       <div className="relative z-20 w-full h-full flex flex-col justify-end px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 pb-8">
//         {/* Control Buttons (Right corner) */}
//         <div className="absolute bottom-4 sm:bottom-[30px] right-2 sm:right-4 flex gap-4">
//           <button className="bg-sky-500 text-white p-3 rounded-md hover:bg-sky-600 transition-colors">
//             <FaPlay size={16} />
//           </button>
//           <button className="bg-sky-500 text-white p-3 rounded-md hover:bg-sky-600 transition-colors">
//             <FaVolumeMute size={16} />
//           </button>
//         </div>

//         {/* Scroll Down Button (Center bottom) */}
//         <div className="flex justify-center">
//           <button
//             onClick={handleScrollDown}
//             className="text-white p-4 rounded-full animate-bounce hover:bg-white hover:text-black transition-colors"
//           >
//             <MdOutlineKeyboardDoubleArrowDown size={32} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import { useRef, useState } from 'react';
import video from '../../assets/videos/Herovideo.mp4';
import { FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative h-screen w-full mt-[129px] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        src={video}
        autoPlay
        muted={isMuted}
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
        type="video/mp4"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10" />

      {/* Mobile Gradient Mask */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10 sm:hidden" />

      {/* Center Content */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to Our Research Portal
        </h1>
        <p className="text-sm sm:text-lg text-white max-w-xl mb-6 drop-shadow-md">
          Discover innovations, explore breakthroughs, and collaborate on futuristic research.
        </p>

       
      </div>

      {/* Play & Mute Buttons */}
      <div className="absolute bottom-4 sm:bottom-[30px] right-2 sm:right-4 flex gap-4 z-20">
        <button className="bg-sky-500 text-white p-3 rounded-md hover:bg-sky-600 transition-colors">
          <FaPlay size={16} />
        </button>
        <button
          onClick={toggleMute}
          className="bg-sky-500 text-white p-3 rounded-md hover:bg-sky-600 transition-colors"
        >
          {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
        </button>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-4 sm:bottom-[30px] left-0 right-0 flex justify-center z-20">
        <button
          onClick={handleScrollDown}
          className="text-white p-4 rounded-full animate-bounce hover:bg-gray-800 transition-colors"
        >
          <MdOutlineKeyboardDoubleArrowDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
