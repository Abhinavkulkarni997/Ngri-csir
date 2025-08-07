import React,{useState} from 'react';
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
 





const NgriGallery = () => {
const [activeTab,setActiveTab]=useState('image');
// const [videoActiveTab,setVideoActiveTab]=useState('video');

// const toggleImage=()=>{
//     setImageActiveTab(!imageActiveTab)
// }

// const toggleVideo=()=>{
//     setVideoActiveTab(!videoActiveTab)
// }




  return (
<section className='bg-[#E5F5FD] py-8 px-4 sm:px-4'>
   <h1 className='text-center text-xl text-[#455cc5] font-bold font-sans mb-4'>NGRI GALLERY</h1>
<div className='max-w-7xl mx-auto'>
    <div className='bg-white p-6  rounded-lg shadow-md cursor-pointer'>
        <ul className='flex flex-wrap gap-4  mt-4 mb-8 font-sans font-semibold'>
        
   <button onClick={()=>setActiveTab('image')} ><li className={ `${activeTab==='image'? 'p-2 bg-blue-800 rounded-lg text-white inline-flex gap-4 ':'inline-flex gap-4 p-2 rounded-lg border-2 border-blue-800 text-blue-800 hover:bg-blue-800  hover:text-white'}`}><FaRegImage size={20} ></FaRegImage>Photo Gallery</li></button>
   <button onClick={()=>setActiveTab('video')}> <li className={`${activeTab==='video'? 'bg-blue-800 text-white ml-1 p-2  border-l rounded-lg mx-4 inline-flex gap-4':'inline-flex p-2 gap-4 border-2 rounded-lg text-blue-800 hover:text-white hover:bg-blue-800 border-blue-800'}`}><MdOutlineVideoLibrary size={20}></MdOutlineVideoLibrary>Video Gallery</li> </button>
      {
        activeTab==='image' && (
            <li className='pt-2 ml-auto  '><Link to="https://www.ngri.res.in/gallery.php" className='p-4 rounded-full border-2 text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white inline-flex '>View More <FiArrowUpRight size={20}/></Link></li> 
        )
      }
      
      {
        activeTab==='video' && (
            <li className='pt-2 ml-auto  '><Link to="https://www.youtube.com/@csir-ngri" className='p-4 rounded-full border-2 text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white inline-flex'>View More <FiArrowUpRight size={20}/></Link></li> 
        )
      }
      
      
        </ul>
        {/* <hr className='w-full pt-4 border-gray-100'></hr> */}
        <ul className='cursor-pointer flex flex-wrap gap-2 p-4 mb-4 justify-between items-center bg-sky-50  rounded-lg bg-no-repeat w-[250px]'>
        <li className='bg-blue-500 rounded-lg shadow-md px-4 font-sans text-white'>All</li>
<li>2025</li>
<li>2024</li>
        </ul>


{
    activeTab==='image' && (
        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 auto-cols-[150px]'>
   
{Images.map((img)=>{
    
   const span=spansPattern[img.id%spansPattern.length];
 
   return(
    <div key={img.id} 
    className= {`${span} relative cursor-pointer w-full h-full  overflow-hidden rounded-xl group`}>
  
    <img src=
    {img.image} alt={`Image ${img.description} `}
    className='w-full h-full transition-transform duration-300 object-cover group-hover:scale-105 '
    />
    {/* Overlay Effect */}
    <div className='absolute inset-0  flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
    <h1 className='text-[#FFFFFF]  md:hover:text-sm hover:text-sm lg:hover:text-sm font-bold text-center px-2 '> {img.description}</h1>
    </div>
    
    </div>
   
    
 
)})}


</div>
    )
}
    
{
    activeTab==='video' && (
 <div className='grid grid-cols-1  md:grid-cols-4 gap-4'>
{Videos.map((video)=>(
    <div key={video.id} 
    className='relative cursor-pointer max-w-sm overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 '>
    <iframe src=
    {video.URL}
     alt={video.description}
    allowFullScreen
    allow="accelerometer; autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture; web-share"
    className='border-8 border-sky-800 p-2 '
    />     
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