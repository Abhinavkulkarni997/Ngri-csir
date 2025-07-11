import React from 'react'
import renews from '../../assets/images/ResearchNews/re_news.png'
const ResearchNewsCard = () => {
  return (
       <div className='bg-white border border-gray-500'>
       <div className='max-w-7xl mx-auto'>
       <div className='max-w-xl mx-auto flex flex-col justify-center'>
       <img src={renews} alt='enews' className='w-36 h-36 mx-auto '/>  
         <h1 className='text-2xl text-blue-500'>Research News</h1>
         <span className='block gap-x-4 '>English</span><span className='block'>Hindi</span> 
         <p>Explore Monthly Research Papers for the Latest Insights</p>


       </div>
    
       </div>
        
         
           </div>
  )
}
export default ResearchNewsCard