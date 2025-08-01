import React,{useState} from 'react';
import Sachhata1 from '../../assets/NgriGallery/Swachhata-Pakhwada-2025-1.png';
import Sachhata2 from '../../assets/NgriGallery/Swachhata-Pakhwada-2025-2.jpg';
import WomensDay1 from '../../assets/NgriGallery/WomensDay-2025-1.jpg';
import WomensDay8 from '../../assets/NgriGallery/WomensDay-2025-8.jpg';
import Republicday76 from '../../assets/NgriGallery/76th-Republic-Day-of-India-2025-8.jpg';
import Jigyasa from '../../assets/NgriGallery/Jigyasa-Programme-July2025.png';
import DSC005 from '../../assets/NgriGallery/DSC_0005.jpg'
import DSC0083 from '../../assets/NgriGallery/DSC_0083.jpg';
import DSC9713 from '../../assets/NgriGallery/DSC_9713.jpg';




const Images=[{
    id:0,
    image:Sachhata1,
    description:'',
},{
    id:1,
    image:Sachhata2,
    description:'',
},{
    id:2,
    image:WomensDay1,
    description:'',
},{
    id:3,
    image:WomensDay8,
    description:'',
},{
    id:4,
    image:Jigyasa,
    description:'',
},{
    id:5,
    image:DSC005,
    description:'',
},{
    id:6,
    image:DSC0083,
    description:'',

},{
    id:7,
    image:DSC9713,
    description:'',
}]



const NgriGallery = () => {
const [active,setIsActive]=useState(0);

  return (
<section className='bg-white py-8 px-4 sm:px-4'>
<div className='max-w-7xl mx-auto'>
<h1 className='text-center text-2xl text-[#550000] font-bold '>NGRI GALLERY</h1>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
{Images.map((img)=>(
    <div key={img.id} className='max-w-xl'>
    <img src=
    {img.image} alt={img.description}/>
        
    </div>
))}

</div>
</div>    
    
    
</section>
  )
}

export default NgriGallery;

