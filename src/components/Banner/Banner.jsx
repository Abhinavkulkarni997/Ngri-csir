import React from 'react'
import video from '../../assets/videos/bannervideo.mp4';
const Banner = () => {
  return (
    <div className="fixed left-0  w-full h-screen overflow-hidden">
    <video src={video} width="100%" controls autoPlay muted loop type="video/mp4"></video>
    </div>
  )
}

export default Banner