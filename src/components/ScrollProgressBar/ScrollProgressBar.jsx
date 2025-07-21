import React from 'react'
import {useState,useEffect} from 'react';
const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(()=>{
const handleScroll = () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrollY = window.scrollY;
        const progress = (scrollY / totalHeight) * 100;
        setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
     <div className="fixed top-[95px] left-0 w-full h-1  z-50">
      <div
        className="h-full bg-[#FFFFE3] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  )
}

export default ScrollProgressBar