import {useEffect, useState} from 'react'
import { FcGlobe } from "react-icons/fc";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible,setIsVisible]=useState(false);

    const toggleVisible=()=>{
        window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    }

    const ScrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })}

        useEffect(()=>{
            window.addEventListener('scroll',toggleVisible);
            return ()=>{
                window.removeEventListener('scroll',toggleVisible);
            }
        },[]);
  return (
    <div className='fixed bottom-5 right-10 '>
    {isVisible &&(
        <button onClick={ScrollToTop}>
         {/* <FcGlobe className='cursor-pointer bg-white p-2 rounded-lg'size={48}/> */}
         <FaArrowCircleUp className='text-amber-600 cursor-pointer p-2 rounded-lg absolute bottom-2 bg-white right-2' size={48} />
        </button>
       
    )}
    </div>
  )
}

export default ScrollToTop