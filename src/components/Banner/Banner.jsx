import React from 'react'
import video from '../../assets/videos/bannervideo.mp4';
const Banner = () => {
  return (
    <div className="bg-black mt-[129px] px-48 ">
    <video src={video} className='w-full h-auto shadow-lg'  autoPlay muted loop type="video/mp4"></video>
    </div>
  )
}

export default Banner