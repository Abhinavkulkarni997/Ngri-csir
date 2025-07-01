import React, { useEffect, useState } from 'react'

const VisitorsCount = () => {
    const[visitorsCount,setVisitorsCount]=useState(0);

    // logic to fetch visitors count from the database

    useEffect(()=>{
        const getVisitorsCount=()=>{
            fetch()
            .then((response) => response.json())
            .then((data) => {
                setVisitorsCount(data.count);
            })
            .catch((error) => {
                console.error("Error fetching visitors count:", error);
            });
        };

        getVisitorsCount();
    },[]);

  return (


    <div>Visitors Count:{visitorsCount}</div>
  )
}

export default VisitorsCount;