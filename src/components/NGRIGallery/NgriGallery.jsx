import React,{useEffect, useState} from 'react';
import Sachhata1 from '../../assets/images/NgriGallery/Swachhata-Pakhwada-2025-1.png';
import Sachhata2 from '../../assets/images/NgriGallery/Swachhata-Pakhwada-2025-2.jpg';
import Sachhata7 from '../../assets/images/NgriGallery/Swachhata-Pakhwada-2025-7.jpg';
import WomensDay8 from '../../assets/images/NgriGallery/WomensDay-2025-8.jpg';
import Republicday76 from '../../assets/images/NgriGallery/76th-Republic-Day-of-India-2025-8.jpg';
import Library from '../../assets/images/NgriGallery/Librabry1.jpeg';
import DSC005 from '../../assets/images/NgriGallery/DSC_0005.jpg';
import DSC0083 from '../../assets/images/NgriGallery/DSC_0083.jpg';
import DSC9713 from '../../assets/images/NgriGallery/DSC_9713.jpg';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
// import { MdArrowOutward } from 'react-icons/md';
import { FaRegImage } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
 import { FiArrowUpRight } from "react-icons/fi";


const Images=[{
    id:0,
    image:Sachhata2,
    description:'Swachhata Pakhwada 2025',
  
},{
    id:1,
    image:Sachhata1,
    description:'Swachhata Pakhwada 2025',
   
},{
  id:2,
  image:Sachhata7,
  description:'Swachhata Pakhwada 2025',  
 
},{
    id:3,
    image:WomensDay8,
    description:'Womens Day 2025',
    
},{
    id:4,
    image:Library,
    description:'HARI NARAIN KNOWLEDGE RESOURCE CENTRE AND MAPS & DRAWING',
    
},{
    id:5,
    image:DSC005,
    description:'Artificial Intelligence & Machine Learning for Geophysical Data Analysis',
   
},{
    id:6,
    image:DSC0083,
    description:'Artificial Intelligence & Machine Learning for Geophysical Data Analysis',
    

},{
    id:7,
    image:DSC9713,
    description:'Artificial Intelligence & Machine Learning for Geophysical Data Analysis',
    
},{
    id:8,
    image:Republicday76,
    description:'76th Republic Day of India - 2025',
    
}]

const Videos=[{
    id:0,
    URL:'https://www.youtube.com/embed/mp02ZQZbbU8?si=hOKVsh9MPh53Bg1e',
    description:'CSIR-NGRI Air Rock Museum'
},{
    id:1,
    URL:'https://www.youtube.com/embed/xnFvaP06TaA?si=-Ox50y8fS_OxW3RH',
    description:'Closing ceremony of Diamond Jubilee Year Celebrations'
},{
    id:2,
    URL:'https://www.youtube.com/embed/JRfv51J5N3M?si=gsXSpp3kKzvAXWmC',
    description:'Address by DG--CSIR',
},{
    id:3,
    URL:'https://www.youtube.com/embed/UzmBq2zbxeA?si=c5qbOiZ27lKJL7Wk',
    description:'CSIR NGRI Diamond Jubilee 2nd Lecture'
}]

const spansPattern=[
"col-span-2 row-span-2",
"col-spans-1 row-span-1",
"col-span-1 row-span-1",
"col-span-2 row-span-2",
"col-span-2 row-span-2",
"col-span-2 row-span-2",
]
 

//Fisher-yates shuffle algorithm
const shuffledImages=(imageArray)=>{
const shuffled=[...imageArray];
for (let imageIndex=shuffled.length-1;imageIndex>0;imageIndex--){
    const randomImages=Math.floor(Math.random()*(imageIndex+1));
    [shuffled[imageIndex],shuffled[randomImages]]=[shuffled[randomImages],shuffled[imageIndex]]
}
return shuffled;
}


const NgriGallery = () => {
const [activeTab,setActiveTab]=useState('image');
// const [videoActiveTab,setVideoActiveTab]=useState('video');

// const toggleImage=()=>{
//     setImageActiveTab(!imageActiveTab)
// }

// const toggleVideo=()=>{
//     setVideoActiveTab(!videoActiveTab)
// }
const [shuffledImage,setShuffledImage]=useState(Images);


useEffect(()=>{
    const interval=setInterval(()=>{
        setShuffledImage(shuffledImages(Images))
    },5000)
    return ()=>clearInterval(interval);
},[])


  return (
<section className='bg-[#E5F5FD]  py-4 sm:py-6 lg:py-8  px-2 sm:px-4 lg:px-6'>
   {/* <h1 className='text-center text-lg sm:text-xl lg:text-2xl text-[#455cc5] font-bold font-sans mb-4 sm:mb-6'>NGRI GALLERY</h1> */}
      <h1 className='text-center text-lg sm:text-xl lg:text-2xl text-[#2F6281] font-bold font-sans mb-4 sm:mb-6'>NGRI GALLERY</h1>
<div className='max-w-7xl mx-auto'>
    <div className='bg-white p-3 sm:p-4 lg:p-6   rounded-2xl shadow-md cursor-pointer'>
        <ul className='flex flex-col sm:flex-row  flex-wrap gap-2 sm:gap-4  mt-2 sm:mt-4  mb-4 sm:mb-8 font-sans font-semibold'>
        
   {/* <button onClick={()=>setActiveTab('image')} className='w-full sm:w-auto' ><li className={ `${activeTab==='image'? 'p-2 sm:p-3 bg-blue-800 rounded-lg text-white inline-flex gap-2 sm:gap-4 items-center justify-center w-full sm:w-auto':'inline-flex gap-2 sm:gap-4 items-center justify-center p-2 sm:p-3 rounded-lg border-2 border-blue-800 text-blue-800 hover:bg-blue-800  hover:text-white w-full sm:w-auto'}`}><FaRegImage size={16} className='sm:w-5 sm:h-5'></FaRegImage><span className='text-sm sm:text-base'> Photo Gallery</span></li></button>
   <button onClick={()=>setActiveTab('video')} className='w-full sm:w-auto'> <li className={`${activeTab==='video'? 'bg-blue-800 text-white  p-2 sm:p-3  xl:mx-4 border-l rounded-lg  inline-flex gap-2 sm:gap-4 items-center justify-center w-full sm:w-auto':'inline-flex p-2 sm:p-3 gap-2 sm:gap-4 items-center justify-center border-2 rounded-lg text-blue-800 hover:text-white hover:bg-blue-800 border-blue-800 w-full sm:w-auto'}`}><MdOutlineVideoLibrary size={16} className='sm:w-5 sm:h-5'></MdOutlineVideoLibrary><span className='text-sm sm:text-base'>Video Gallery</span></li> </button> */}
   <button onClick={()=>setActiveTab('image')} className='w-full sm:w-auto' ><li className={ `${activeTab==='image'? 'p-2 sm:p-3 bg-[#2F6281] rounded-lg text-white inline-flex gap-2 sm:gap-4 items-center justify-center w-full sm:w-auto':'inline-flex gap-2 sm:gap-4 items-center justify-center p-2 sm:p-3 rounded-lg border-2 border-[#2F6281] text-[#2F6281] hover:bg-[#2F6281]  hover:text-white w-full sm:w-auto'}`}><FaRegImage size={16} className='sm:w-5 sm:h-5'></FaRegImage><span className='text-sm sm:text-base'> Photo Gallery</span></li></button>
   <button onClick={()=>setActiveTab('video')} className='w-full sm:w-auto'> <li className={`${activeTab==='video'? 'bg-[#2F6281] text-white  p-2 sm:p-3  xl:mx-4 border-l rounded-lg  inline-flex gap-2 sm:gap-4 items-center justify-center w-full sm:w-auto':'inline-flex p-2 sm:p-3 gap-2 sm:gap-4 items-center justify-center border-2 rounded-lg text-[#2F6281] hover:text-white hover:bg-[#2F6281] border-[#2F6281] w-full sm:w-auto'}`}><MdOutlineVideoLibrary size={16} className='sm:w-5 sm:h-5'></MdOutlineVideoLibrary><span className='text-sm sm:text-base'>Video Gallery</span></li> </button>
      {
                   
        activeTab==='image' && (
             /* <li className='pt-2 w-full sm:w-auto sm:ml-auto flex justify-center sm:justify-end'><Link to="https://www.ngri.res.in/gallery.php" className='p-2 sm:p-4 rounded-full border-2 text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base'>View More <FiArrowUpRight size={16} className='sm:w-5 sm:h-5'/></Link></li>  */
            <li className='pt-2 w-full sm:w-auto sm:ml-auto flex justify-center sm:justify-end'><Link to="https://www.ngri.res.in/gallery.php" className='p-2 sm:p-4 rounded-full border-2 text-[#2F6281] border-[#2F6281] hover:bg-[#2F6281] hover:text-white inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base'>View More <FiArrowUpRight size={16} className='sm:w-5 sm:h-5'/></Link></li> 

        )
      }
      
      {
        activeTab==='video' && (
                        <li className='pt-2 w-full sm:w-auto sm:ml-auto flex justify-center sm:justify-end'><Link to="https://www.youtube.com/@csir-ngri" className='p-2 sm:p-4 rounded-full border-2 text-[#2F6281] border-[#2F6281] hover:bg-[#2F6281] hover:text-white inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base'>View More <FiArrowUpRight size={16} className='sm:w-5 sm:h-5'/></Link></li> 

            /* <li className='pt-2 w-full sm:w-auto sm:ml-auto flex justify-center sm:justify-end'><Link to="https://www.youtube.com/@csir-ngri" className='p-2 sm:p-4 rounded-full border-2 text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base'>View More <FiArrowUpRight size={16} className='sm:w-5 sm:h-5'/></Link></li>  */
        )
      }
        </ul>
        <hr className='w-full  pt-2 sm:pt-4 border-1 border-gray-400'></hr>
        {activeTab==='image' && (
  <ul className='cursor-pointer flex flex-wrap gap-2 sm:gap-3 p-2 sm:p-4 mb-2 sm:mb-4 justify-start items-center bg-sky-50  rounded-lg bg-no-repeat w-full sm:w-[250px]'>
        <li className='bg-[#2F6281] rounded-lg shadow-md px-2 sm:px-4 py-1 sm:py-2 font-sans text-white text-sm sm:text-base'>All</li>
<li className='px-2 sm:px-3 py-1 text-sm sm:text-base'>2025</li>
<li className='px-2 sm:px-3 py-1 text-sm sm:text-base'>2024</li>
        </ul>
        )}
      
{
    activeTab==='image' && (
        <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 p-2 sm:p-4 auto-rows-[120px] sm:auto-rows-[150px] lg:auto-rows-auto'>
   
{shuffledImage.map((img,index)=>{
    
   const span=spansPattern[index%spansPattern.length];
 
   return(
    <div key={img.id} 
    className= {`${span} relative cursor-pointer w-full h-full  overflow-hidden rounded-lg sm:rounded-xl group min-h-[120px] sm:min-h-[150px]`}>
  
    <img src=
    {img.image} alt={`Image ${img.description} `}
    className='w-full h-full transition-transform duration-300 object-cover group-hover:scale-105 '
    />
    {/* Overlay Effect */}
    <div className='absolute inset-0  flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
    <h1 className='text-[#FFFFFF]  text-xs sm:text-sm lg:text-base  font-bold text-center px-2 leading-tight'> {img.description}</h1>
    </div>
    
    </div>
   
    
 
)})}


</div>
    )
}
    
{
    activeTab==='video' && (
 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3  sm:gap-4 lg:gap-6'>
{Videos.map((video)=>(
    <div key={video.id} 
    className='relative border-4 sm:border-8 border-blue-200 cursor-pointer  w-full max-w-sm overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 '>
    <iframe src=
    {video.URL}
     alt={video.description}
    allowFullScreen
    allow="accelerometer; autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture; web-share"
    className='border-0 w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px] xl:h-[280px] object-cover'
    />     
    <h1 className='p-2 sm:p-3 lg:p-4 text-xs sm:text-sm lg:text-base   text-gray-600 font-bold   h-full leading-tight'>{video.description}</h1>
    </div>
))}
</div>
    )
}

</div>
</div>        
</section>
  )
}

export default NgriGallery;