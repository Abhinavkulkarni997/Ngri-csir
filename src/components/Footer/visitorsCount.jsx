import React, { useEffect, useState } from 'react'

const VisitorsCount = () => {
    const[visitorsCount,setVisitorsCount]=useState(0);

    // logic to fetch visitors count from the database

    useEffect(()=>{
        const initialCount = Number(localStorage.getItem('visitorsCount')) || 0;
        setVisitorsCount(initialCount+1);
    },[]);
    useEffect(()=>{
        localStorage.setItem('visitorsCount', visitorsCount);
    },[visitorsCount]);

  return (


    <div>Visitors Count : <br/>
    Total: <span className='text-white'>{visitorsCount}</span> | Today: <span className='text-white'>{visitorsCount}</span></div>
  )
}

export default VisitorsCount;