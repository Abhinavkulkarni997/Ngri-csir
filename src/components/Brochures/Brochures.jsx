import React from 'react'

const BrochuresData=[{
  id: 1,
  title: "Exploring Earth For Six Decades",
  image:''
},
{
  id: 2,
  title: "Geophysics for Sustainable Development Goals",
  image:''
},
{
  id: 3,
  title: "Geothermal Energy Research",
  image:''
},{
    id:4,
    title:'Groundwater Exploration and Management Research',
    image:''
}]

const Brochures = () => {
  return (
    <div>
      {BrochuresData.map(brochure => (
        <div key={brochure.id}>
          <h2>{brochure.title}</h2>
          <img src={brochure.image} alt={brochure.title} />
        </div>
      ))}
    </div>
  )
}

export default Brochures