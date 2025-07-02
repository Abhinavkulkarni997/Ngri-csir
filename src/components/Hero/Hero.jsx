import video from '../../assets/videos/Herovideo.mp4';
import { FaPlay } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
const Hero = () => {
  return (
    <div className="bg-black mt-[129px]  px-48 relative overflow-hidden">
     <button className='absolute bottom-[30px]  right-4 bg-sky-500 text-white px-4 py-4 rounded-md '><FaPlay className="hover:bg-black p-0 " size={20} /></button>
      <button className='absolute bottom-[30px] right-20 bg-sky-500 text-white px-4 py-4 rounded-md'><FaVolumeMute className="hover:bg-black " size={20}/></button>
      <button className='absolute  bottom-[30px] left-15 text-white px-4 py-4 rounded-md animate-bounce'><MdOutlineKeyboardDoubleArrowDown className="hover:bg-black" size={40}/></button>
    <video src={video} className='w-full h-auto shadow-lg md:w-full '  autoPlay muted loop type="video/mp4">
     
    </video>
    </div>
  )
}

export default Hero