import React from 'react';
import { AiOutlineNotification } from "react-icons/ai";
import {Link} from 'react-router-dom';
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
  return (
    <section className='bg-teal-400 py-16 px-4 sm:px-8'>
    <div className='max-w-7xl mx-auto'>
    </div>
    
    <div className='flex flex-wrap gap-6 justify-center border border-white bg-white mx-auto '>
      <span><AiOutlineNotification size={30} /> </span>
    <span className=' text-2xl  font-sans'>Latest Notifications</span>
  
    <a href='https://www.ngri.res.in/openings-at-ngri.php'  className='items-end font-sans text-2xl'>View All</a>
    {notifications.map((notification)=>(
        <div className='flex flex-col mx-auto w-full' key={notification.id}>
        
        <Link to={notification.pageURL} className='text-blue text-blue-500'>
        <span >{notification.title}</span>
       <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
           </Link>
        </div>
    ))}

    </div>
    
    
    </section>
  )
}

export default LatestNotifications