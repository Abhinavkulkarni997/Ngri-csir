import React from 'react'
import enews from '../../assets/images/EnewsLetter/enews_letter.jpeg';
import { Link } from 'react-router-dom';
const EnewsLetter = () => {
  return (
    <div className='bg-white border border-gray-500'>
    <div className=''>
 <img src={enews} alt='enews' className='w-48 h-48 mx-auto'/>  
      <h1 className='text-2xl text-blue-500'>E-NewsLetter</h1>
      <p>English</p><p>Hindi</p> 
      <p>Volume 7, Issue 5,May2025</p>
    </div>
     
      
        </div>
  )
}

export default EnewsLetter