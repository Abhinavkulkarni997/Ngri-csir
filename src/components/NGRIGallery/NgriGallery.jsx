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
 





const Images=[{
    id:0,
    image:Sachhata2,
    description:'Swachhata Pakhwada 2025',
    span:'col-span-2 row-span-2'
},{
    id:1,
    image:Sachhata1,
    description:'Swachhata Pakhwada 2025',
    span:'cols-span-1 row-span-1'
},{
  id:2,
  image:Sachhata7,
  description:'Swachhata Pakhwada 2025',  
  span:'col-span-1 row-span-2'
},{
    id:3,
    image:WomensDay8,
    description:'Womens Day 2025',
    span:'col-span-2 row-span-1'
},{
    id:4,
    image:Library,
    description:'HARI NARAIN KNOWLEDGE RESOURCE CENTRE AND MAPS & DRAWING',
    span:'col-span-1 row-span-1'
},{
    id:5,
    image:DSC005,
    description:'Artificial Intelligence & Machine Learning for Geophysical Data Analysis',
    span:'col-span-2 row-span-1'
},{
    id:6,
    image:DSC0083,
    description:'Artificial Intelligence & Machine Learning for Geophysical Data Analysis',
    span:'col-span-1 row-span-2'

},{
    id:7,
    image:DSC9713,
    description:'Artificial Intelligence & Machine Learning for Geophysical Data Analysis',
    span:'col-span-1 row-span-1'
},{
    id:8,
    image:Republicday76,
    description:'76th Republic Day of India - 2025',
    span:'col-span-2 row-span-2'
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

 





const NgriGallery = () => {
const [activeTab,setActiveTab]=useState(0);






  return (
<section className='bg-[#E4F0FF] py-8 px-4 sm:px-4'>
   <h1 className='text-center text-xl text-[#455cc5] font-bold font-sans mb-4'>NGRI GALLERY</h1>
<div className='max-w-7xl mx-auto'>
    <div className='bg-white p-6  rounded-lg shadow-md'>
        <ul className='flex flex-wrap gap-4  mt-4 mb-8 font-sans font-semibold'>
        
    <li className='  p-2 bg-blue-800 rounded-lg text-white inline-flex gap-4'><FaRegImage size={20} ></FaRegImage>Photo Gallery</li>
   <li className='ml-1 p-2  border-l rounded-lg mx-4 inline-flex gap-4'><MdOutlineVideoLibrary size={20}></MdOutlineVideoLibrary>Video Gallery</li> 
      <li className='pt-2 ml-auto  '><Link to="" className='p-4 rounded-full  bg-blue-800 text-white '>View More </Link></li> 
        </ul>
        {/* <hr className='w-full pt-4 border-gray-100'></hr> */}
        <ul className='cursor-pointer flex flex-wrap gap-2 p-4 mb-4 justify-between items-center bg-sky-50  rounded-lg bg-no-repeat w-[250px]'>
        <li className='bg-blue-500 rounded-lg shadow-md px-4 font-sans text-white'>All</li>
<li>2025</li>
<li>2024</li>
        </ul>


    <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-4 p-4'>
{Images.map((img)=>(
    <button onClick={()=>setActiveTab(img.id)}>
    <div key={img.id} className= {`${img.span} relative cursor-pointer max-w-sm overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105`}>
  
    <img src=
    {img.image} alt={`Image ${img.description} `}
    className='w-full h-full object-cover'
    />
    {/* Overlay Effect */}
    <div className='absolute inset-0 hover:bg-black hover:bg-opacity-40 group-hover:opacity-60 transition-transform duration-300'>
    <div className='absolute inset-0  text-lg flex items-center justify-center'>
    <h1 className='text-white hover:text-lg font-semibold text-center px-2'> {img.description}</h1>
    </div>
    </div>
    </div>
    </button>
))}


</div>



 <div className='grid grid-cols-1  md:grid-cols-4 gap-4'>
{Videos.map((video)=>(
    <div key={video.id} className='relative cursor-pointer max-w-sm overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 '>
  
    <iframe src=
    {video.URL}
     alt={video.description}
    allowFullScreen
    allow="accelerometer; autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture; web-share"
    />

        
    </div>
))}

</div>
       
    </div>
   


</div>    
    
    
</section>
  )
}

export default NgriGallery;