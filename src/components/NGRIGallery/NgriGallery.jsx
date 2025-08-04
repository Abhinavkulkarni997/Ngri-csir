import React,{useState} from 'react';
import Sachhata1 from '../../assets/images/NgriGallery/Swachhata-Pakhwada-2025-1.png';
import Sachhata2 from '../../assets/images/NgriGallery/Swachhata-Pakhwada-2025-2.jpg';
// import WomensDay1 from '../../assets/images/NgriGallery/WomensDay-2025-1.jpg';
import WomensDay8 from '../../assets/images/NgriGallery/WomensDay-2025-8.jpg';
import Republicday76 from '../../assets/images/NgriGallery/76th-Republic-Day-of-India-2025-8.jpg';
import DSC005 from '../../assets/images/NgriGallery/DSC_0005.jpg';
import DSC0083 from '../../assets/images/NgriGallery/DSC_0083.jpg';
import DSC9713 from '../../assets/images/NgriGallery/DSC_9713.jpg';

import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
// import { MdArrowOutward } from 'react-icons/md';



const Images=[{
    id:0,
    image:Sachhata2,
    description:'',
},{
    id:1,
    image:Sachhata1,
    description:'',
},{
    id:2,
    image:WomensDay8,
    description:'',
},{
    id:3,
    image:DSC005,
    description:'',
},{
    id:4,
    image:DSC0083,
    description:'',

},{
    id:5,
    image:DSC9713,
    description:'',
},{
    id:6,
    image:Republicday76,
    description:'',
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
const [activeTab,setActiveTab]=useState('tab1');






  return (
<section className='bg-[#E4F0FF] py-8 px-4 sm:px-4'>
   <h1 className='text-center text-xl text-[#455cc5] font-bold font-sans mb-4'>NGRI GALLERY</h1>
<div className='max-w-7xl mx-auto  '>
    <div className='bg-white p-6  rounded-lg shadow-md '>
        <ul className='flex flex-wrap gap-4  mt-4 mb-8 font-sans font-semibold '>
    <li className='  p-2 bg-blue-800 rounded-lg text-white'><Link to="">Photo Gallery</Link></li>
   <li className='ml-1 p-2  border-l mx-4 '><Link to="" >Video Gallery</Link></li> 
      <li className=' pb-2 ml-auto  '><Link to="" className='p-4 rounded-full  bg-blue-800 text-white '>View More </Link></li> 
      <hr className=''></hr>
        </ul>
        {/* <hr className='w-full pt-4 border-gray-100'></hr> */}
        <ul className='cursor-pointer flex flex-wrap gap-2 p-4 mb-4 justify-between items-center bg-sky-50  rounded-lg bg-no-repeat w-[250px]'>
        <li className='bg-blue-500 rounded-lg shadow-md px-4 font-sans text-white'>All</li>
<li>2025</li>
<li>2024</li>
        </ul>


    <div className='grid grid-cols-1  md:grid-cols-4 gap-4'>
{Images.map((img)=>(
    <div key={img.id} className='relative cursor-pointer max-w-sm overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 '>
  
    <img src=
    {img.image} alt={img.description}/>


        
    </div>
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