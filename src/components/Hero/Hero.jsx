import video from '../../assets/videos/Herovideo.mp4';
import { FaPlay } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-600 to-sky-900  mt-[129px]  w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 relative overflow-hidden ">
     <button className='absolute bottom-4 sm:bottom-[30px]  right-2 sm:right-4 bg-sky-500 text-white px-2 py-2 sm:px-4 sm:py-4 rounded-md hover:bg-sky-600 transition-colors '><FaPlay className="hover:bg-black p-0 " size={16} /></button>
      <button className='absolute bottom-4 sm:bottom-[30px] right-14 sm:right-20 bg-sky-500 text-white px-2 py-2 sm:px-4 sm:py-4 rounded-md hover:bg-sky-600 transition-colors'><FaVolumeMute className="hover:bg-black " size={16}/></button>
      <div className='absolute bottom-4 sm:bottom-[30px] left-0 right-0 flex justify-center'>
  <button className='text-white px-2 py-2 sm:px-4 sm:py-4 rounded-md animate-bounce hover:bg-gray-800 transition-colors'>
    <MdOutlineKeyboardDoubleArrowDown className="hover:bg-black" size={32} />
  </button>
</div>
    <video src={video} className='w-full rounded-2xl h-auto shadow-lg object-cover min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]'  autoPlay muted loop type="video/mp4">
     
    </video>
    </div>
  )
}

export default Hero