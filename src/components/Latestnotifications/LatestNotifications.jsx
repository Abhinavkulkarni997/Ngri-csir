import  { useRef,useEffect } from 'react';
import { AiOutlineNotification } from "react-icons/ai";

const notifications=[{
    id:0,
    title:'Hindi Word of the Day',
    pageURL:'https://www.ngri.res.in/ngri-news/hindi-word-of-the-day.php',
},{
    id:1,
    title:'List of selected candidates for AcSIR Ph.D. August 2025 session  List of selected candidates for AcSIR Ph.D. August 2025 session',
    pageURL:'https://www.ngri.res.in/cms/AcSIR.php',
},{
    id:2,
    title:'Schedule of Proficiency in Computer Typing Test - Junior Secretariat Assistant Advertisement No. 02/2025 Dated  Schedule of Proficiency in Computer Typing Test - Junior Secretariat Assistant Advertisement No. 02/2025 Dated 01.04.2025',
    pageURL:'https://www.ngri.res.in/openings-at-ngri.php',
}




]

const LatestNotifications = () => {
  const scrollRef=useRef(null);
  useEffect(()=>{
    const scrollContainer=scrollRef.current;
    if(!scrollContainer) return;
    let scrollTop=0;
    const scrollSpeed=0.3;
    let animationId;
    const scroll=()=>{
      scrollTop+=scrollSpeed;

      const singleSetHeight=scrollContainer.scrollHeight/2;
      if(scrollTop>=singleSetHeight){
        scrollTop=0;
      }
      scrollContainer.scrollTop=scrollTop;
      animationId=requestAnimationFrame(scroll);
    };
  
   animationId=requestAnimationFrame(scroll)

    return ()=>{
      if(animationId){
        cancelAnimationFrame(animationId);
      }
    }
  },[])
  return (
    
    <section className='bg-white py-8 sm:py-12 sm:px-6 lg:py-16  px-3 lg:px-8'>
    <div className='max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto '>
    <div className='border border-blue-500 bg-white  rounded-lg shadow-lg  mx-auto overflow-hidden'>
     <div className='flex flex-col sm:flex-row sm:items-center px-3 sm:px-4 lg:px-6 py-3 sm:py-4 justify-between bg-blue-500'>
    <div className='flex items-center gap-2 sm:gap-3'>
    <span><AiOutlineNotification size={30} className='text-white sm:w-7 sm:h-7 lg:w-8 lg:h-8'/> </span>
    <span className=' text-lg sm:text-xl lg:text-2xl  text-white font-sans font-medium '>Latest Notifications</span>
    </div>
    <a href='https://www.ngri.res.in/openings-at-ngri.php'  
    className=' font-sans text-sm sm:text-lg lg:text-xl  text-white hover:text-blue-200 rounded-lg transition-colors duration-300 self-start sm:self-auto '>View All</a>
    </div>
    <div ref={scrollRef}  className='h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden relative'>
    <div className='py-3 sm:py-4 lg:py-6 px-3 sm:px-4 lg:px-6 '>
    {[...notifications,...notifications].map((notification,index)=>(
        <div className='mb-4 sm:mb-5 lg:mb-6 p-2 sm:p-3  lg:p-4' key={`${notification.id}-${index}`}>
        <a href={notification.pageURL} className=' text-blue-500 hover:text-blue-700 transition-colors duration-300' target='_blank' rel='noopener noreferrer'>
        <span className='text-sm sm:text-sm lg:text-base leading-relaxed hover:underline block'>{notification.title}</span>
        {index < (notifications.length*2)-1 &&(
       <hr className="h-px mt-2 sm:mt-3 lg:mt-4  bg-gray-200 border-0 "/>
    )}
           </a>
        </div>
    ))}
    </div>
    </div>
    </div>
    </div>
    
    
    </section>
  
  
  )
}

export default LatestNotifications