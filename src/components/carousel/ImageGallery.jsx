import {useEffect, useState} from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import CDU from '../../assets/images/ImageGallery/inauguration-Central-Display -Unit-CSIR-at-NGRI.jpeg';
import TT from '../../assets/images/ImageGallery/Estimation-Near-Surface-Seismic-Characterisation-Twin-Towers.png';
import Swachh from '../../assets/images/ImageGallery/Swachhata-Pakhwada-2025.png';
import SEG from '../../assets/images/ImageGallery/SEG_Strategic-Partnership-Award.png';
import  StartupConclave2 from'../../assets/images/ImageGallery/Startup_Conclave2.jpeg'
import StartupConclave1 from '../../assets/images/ImageGallery/Startup_Conclave1.jpeg';
import CSIRGU from '../../assets/images/ImageGallery/German-Academic-Exchange-Service1.png';
import { time } from 'framer-motion';
const Imagegallery=[{
  id:0,
  image:CDU,
  description:'Central Display Unit of CSIR was inaugurated by the esteemed Padma Shri Dr. Shailesh Nayak JI at CSIR-NGRI',
  pageURL:'',
},
{
  id:1,
  image:TT,
  description:'Estimation of Near-Surface Seismic Characterisation - Twin Towers',
  pageURL:'https://www.ngri.res.in/ngri-news/seismic-twin-towers.php'

},
{
id:2,
image:Swachh,
description:'Swachhata Pakhwada 2025',
pageURL:''
},
{
  id:3,
  image:SEG,
  description:'SEG Strategic Partnership Award',
  pageURL:'https://www.ngri.res.in/ngri-news/seg-strategic-partnership-award.php',
},
{
id:4,
image:StartupConclave2,
description:'Future on show at startup conclave',
pageURL:'https://www.ngri.res.in/ngri-news/future-startup-conclave.php',
},
{
  id:5,
  image:StartupConclave1,
  description:'Startup Conclave - CSIR-NGRI and NPCIL signed an MoU',
  pageURL:'https://www.ngri.res.in/ngri-news/startup-conclave-mou.php',
},{
  id:6,
  image:CSIRGU,
  description:'Hyderabad CSIR Labs Host German University Leaders to Explore Research Collaborations',
  pageURL:'https://www.ngri.res.in/ngri-news/indo-german-collaboration.php'
}]


const ImageGallery = () => {
const [currentIndex,setCurrentIndex]=useState(2);


const handleCard=(index)=>{
  setCurrentIndex(index);
}
const handleLeftClick=()=>{
  setCurrentIndex((prev)=>(prev-1+Imagegallery.length)%Imagegallery.length)
}

  const handleRightClick=()=>{
    setCurrentIndex((prev)=>(prev+1)%Imagegallery.length);
  }

  useEffect(()=>{
    const timer=setInterval(handleRightClick,3000);
    return clearInterval(timer)
  },[]);
  return (
    <section className='bg-[#EDE8D0]  py-18 px-8 sm:py-8'>
    <div className='max-w-7x mx-auto'>
    <h1>Image Gallery</h1>
  <div className='flex flex-inline justify-center flex-shrink-0 gap-2'>
  <div className='flex items-center space-x-4'>
<MdKeyboardArrowLeft size={60} onClick={handleLeftClick} className='text-slate-500 hover:bg-blue-500 hover:rounded-full hover:text-white flex items-center space-x-4 justify-between'/>
  </div>
   
    {Imagegallery.map((imageItem,index)=>(
      <div className='flex flex-col items-center gap-3' key={imageItem.id}>
      <img src={imageItem.image} alt={imageItem.description} className='w-96 h-96 rounded-md shadow-lg'/>
     <a href={imageItem.pageURL} className='text-sm font-semibold text-blue-500 hove:text-blue-700'
     target="_blank"
     rel="noopener noreferrer">
     {imageItem.description}</a>
      </div>
    ))}
    <div className='flex items-center space-x-4'>
 <MdKeyboardArrowRight size={60} onClick={handleRightClick} className='text-slate-500 hover:bg-blue-500 hover:rounded-full hover:text-white'/>
    </div>
    
    </div>
    </div>
    </section>
  )
}

export default ImageGallery;