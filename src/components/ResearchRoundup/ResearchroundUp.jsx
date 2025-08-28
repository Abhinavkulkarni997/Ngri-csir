import RNMay1 from '../../assets/images/ResearchRoundUp/RN-May-1.jpeg';
import RNMay2 from '../../assets/images/ResearchRoundUp/RN-May-2.jpeg';
import RNMay3 from '../../assets/images/ResearchRoundUp/RN-May-3.jpeg';
import RNMay4 from '../../assets/images/ResearchRoundUp/RN-May-4.jpeg';
import RNMay5 from '../../assets/images/ResearchRoundUp/RN-May-5.png';
import RNMay6 from '../../assets/images/ResearchRoundUp/RN-May-6-1.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const ResearchroundUp = () => {
    const ResearchroundUp=[{
      id:0,
        image:RNMay1,
        description:'Microtremor Activity and Its Seismic Insights: A Focus on the Nagavalli and Vamshadara River Basin, Eastern Ghats,India.',
        pageURL:'https://www.ngri.res.in/ngri-news/may2025-research-roundup-1.php'

    },
    {
      id:1,
      image:RNMay2,
      description:'Fault Geometry Control on Earthquake Segmentation and Locking Transition on Mid-Crustal Ramp in Kumaun-Garhwal, Central Himalaya: Implications for Regional Tectonics and Seismic Hazard.',
      pageURL:'https://www.ngri.res.in/ngri-news/may2025-research-roundup-2.php',
    },
    {
      id:2,
      image:RNMay3,
      description:'Geological heterogeneity and hydrological dynamics impact on triggered earthquake genesis in Deccan basaltic terrain of western India.',
      pageURL:'https://www.ngri.res.in/ngri-news/may2025-research-roundup-3.php'
    },{
      id:3,
      image:RNMay4,
      description:'Mapping structural geometry and tectonics of the Central continental margin of Vietnam and adjacent areas using an enhanced horizontal gradient of gravity data.',
      pageURL:'https://www.ngri.res.in/ngri-news/may2025-research-roundup-4.php'

    },{
      id:4,
      image:RNMay5,
      description:'Ground Penetrating Radar (GPR) Investigation to Uncover Fossil-Bearing Strata of Archaeological Significance in the Late Quaternary Pediplain Deposits of Motravulapadu, South India.',
      pageURL:'https://www.ngri.res.in/ngri-news/may2025-research-roundup-5.php'
    },
    {
      id:5,
      image:RNMay6,
      description:'Hydrogeochemical process, multivariate statistical, geospatial and index approach for evaluation of groundwater quality for irrigation purposes at Visakhapatnam region, Southern India.',
      pageURL:'https://www.ngri.res.in/ngri-news/may2025-research-roundup-6.php'
    }
  
  ]
  const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

  return (
    <section className=' bg-white  py-16 px-4 sm:px-8'>
    <div className='max-w-7xl mx-auto'>
     <h1 className='text-[#2F6281] text-2xl md:text-5xl  uppercase  mb-12 font-bold text-center font-serif '>Research RoundUP</h1>
    <div className='flex  flex-wrap gap-6 justify-center'>
    {ResearchroundUp.map((researchItem,index)=>(
      <motion.div className='group w-full sm:w-[300px] perspective border-4 border-transparent' key={researchItem.id}
      variants={cardVariants}
      initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
               whileHover={{ rotateY: 5, rotateX: 5, scale: 1.03 }}
               style={{ transformStyle: "preserve-3d" }}
      
      >
      
 <Link to={researchItem.pageURL} target="_blank" rel="noopener noreferrer"
 className='block bg-white shadow-2xl rounded-2xl hover:shadow-sky-500/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ' >
    <div className=" relative overflow-hidden">
      <motion.img src={researchItem.image} alt={researchItem.description} 
      whileHover={{scale:1.05}}
      transition={{duration:0.4}}
      className='h-64 w-full   object-cover rounded-t-2xl mb-4 border-4 transition-transform duration-300 group-hover:scale-105' />

         <motion.div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'
         whileHover={{scale:1.05}}
         transition={{duration:0.3}}
         ></motion.div>
      </div>
      {/*Description  */}
            <motion.div className='p-6 border-t border-gray-200 mx-auto overflow-hidden z-10 group '
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:0.2,duration:0.6}}
            > 
 <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#2f6281] rounded-tl-lg transition-all duration-300 group-hover:w-full group-hover:h-[170px] z-0" />

           <div className='relative z-10'>
        <h2 className='text-lg font-semibold  text-gray-900  line-clamp-3 loading-relaxed  transition-colors duration-200 group-hover:text-white text-start'>
          {researchItem.description}</h2>
          
      {/* Read More */}
      
          <motion.div className='mt-4 flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-white cursor-pointer'
          whileHover={{x:4}}
          transition={{duration:0.3}}
          >Read More
          
        <svg className='w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:translate-x-1' fill= 'none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
        </svg>
        
      </motion.div>      
            </div>



      </motion.div>
      </Link> 

    </motion.div>
    
  
    ))}
    </div>
    
    </div>
    </section>
    )
    
  }










//   <section className='bg-gray-50 py-16 px-4 sm:px-8'>
//       <div className='max-w-7xl mx-auto'>
//         <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center'>
//           Research RoundUp
//         </h1>
        
//         {/* Grid Container - 3 cards per row on desktop, 2 on tablet, 1 on mobile */}
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//           {ResearchroundUp.map(researchItem => (
//             <div key={researchItem.id} className='group'>
//               <a 
//                 href={researchItem.pageURL}
//                 className='block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden'
//               >
//                 {/* Image Container */}
//                 <div className='relative overflow-hidden'>
//                   <img 
//                     src={researchItem.image} 
//                     alt={researchItem.description} 
//                     className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
//                   />
//                   {/* Subtle gradient overlay */}
//                   <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
//                 </div>
                
//                 {/* Content Container */}
//                 <div className='p-6'>
//                   <h2 className='text-lg font-semibold text-gray-900 line-clamp-3 leading-relaxed group-hover:text-blue-600 transition-colors duration-200'>
//                     {researchItem.description}
//                   </h2>
                  
//                   {/* Read More Indicator */}
//                   <div className='mt-4 flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
//                     Read More
//                     <svg className='w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                       <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
//                     </svg>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

export default ResearchroundUp;