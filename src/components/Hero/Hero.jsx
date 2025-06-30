import React from 'react'
import video from '../../assets/videos/Herovideo.mp4';
const Banner = () => {
  return (
    <div className="bg-black mt-[129px]  ">
     <button className='absolute bottom-[-20px]  right-4 bg-sky-500 text-white px-4 py-2 rounded-lg'>Play</button>
      <button className='absolute bottom-[-20px] right-20 bg-sky-500 text-white px-4 py-2 rounded-lg'>unmute</button>
    <video src={video} className='w-full h-auto shadow-lg md:w-full '  autoPlay muted loop type="video/mp4">
     
    </video>
    </div>
  )
}

export default Banner