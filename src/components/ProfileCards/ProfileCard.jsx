import React from 'react';
import narendramodi from '../../assets/images/ProfileCard/narednra-modi.png';
import jitendrasingh from '../../assets/images/ProfileCard/jitendra-singh.png';
import kalaiselvi from '../../assets/images/ProfileCard/kalaiselvi.png';
import Prakashkumar from '../../assets/images/ProfileCard/PrakashKumar_Director_NGRI.jpg';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
// const ProfileCard = () => {

//     const profiles=[{
//         id:0,
//         name:"SHRI. NARENDRA MODI",
//         designation:"PRESIDENT, CSIR",
//         profileURL:"https://www.pmindia.gov.in/en/",
//         image:narendramodi
//     },{
//         id:1,
//         name:"DR. JITENDRA SINGH",
//         designation:"VICE PRESIDENT, CSIR",
//         profileURL:"https://www.csir.res.in/minister/dr-jitendra-singh",
//         image:jitendrasingh

//     },{
//         id:2,
//         name:"DR.(MRS.) N.KALAISELVI",
//         designation:"DG, CSIR",
//         profileURL:"https://www.csir.res.in/dgrcsir/dr-mrs-n-kalaiselvi",
//         image:kalaiselvi
//     },{
//         id:3,
//         name:"DR.PRAKASH KUMAR",
//         designation:"DIRECTOR, NGRI",
//         profileURL:"https://www.ngri.res.in/cms/our-director.php",
//         image:Prakashkumar
//     }]
//   return (
//   <section className=" p-4 rounded-md shadow-md  bg-gradient-to-br from-white via-white to-white py-12 px-6 ">
//   {/* React map function to map the profiles  */}
//         <h2 className="text-sky-500 text-3xl font-bold text-center mb-10 uppercase md:uppercase">Our Leadership</h2>
//       <div className='flex flex-wrap gap-6 justify-center ' >
//        {/*  card */}
//         {profiles.map((profile)=>(
//          <Link to={profile.profileURL} target='_blank' rel="noopener noreferrer"  key={profile.id}>
//       <motion.div className='bg-gradient-to-r from-blue-500 to-cyan-500 p-2 backdrop-blur-md border-t border-white/20 
//       transition-all duration-300 hover:scale-110 rounded-md shadow-lg hover:shadow-md hover:shadow-cyan-500 text-center'
//       initial={{opacity:0}}
//        animate={{opacity:1}}
//       transition={{duration:0.1,delay:profile.id*0.2}}
//       // whileHover={{scale:0.5}}
//     //   viewport={{once:true}}
//       >
//         <img loading="lazy" src={profile.image} alt={profile.name} className="w-48 h-48 rounded-full  object-center border-4 border-white mb-4 mx-auto" />
//           {/* <span className="text-white hover:underline flex items-end gap-x-2"> */}
//             <h1 className='text-cyan-900  font-serif bg-white rounded-xl p-2 text-sm sm:text-base'>{profile.name} <p className='text-center text-xs sm:text-sm'>{profile.designation}</p></h1>
//           {/* </span> */}
//         </motion.div>
//         </Link>
//           ))}
//       </div>
      
     
//     </section>

//   )
// }

// const ProfileCard = () => {
//   const profiles = [
//     {
//       id: 0,
//       name: "SHRI. NARENDRA MODI",
//       designation: "PRESIDENT, CSIR",
//       profileURL: "https://www.pmindia.gov.in/en/",
//       image: narendramodi
//     },
//     {
//       id: 1,
//       name: "DR. JITENDRA SINGH",
//       designation: "VICE PRESIDENT, CSIR",
//       profileURL: "https://www.csir.res.in/minister/dr-jitendra-singh",
//       image: jitendrasingh
//     },
//     {
//       id: 2,
//       name: "DR.(MRS.) N.KALAISELVI",
//       designation: "DG, CSIR",
//       profileURL: "https://www.csir.res.in/dgrcsir/dr-mrs-n-kalaiselvi",
//       image: kalaiselvi
//     },
//     {
//       id: 3,
//       name: "DR.PRAKASH KUMAR",
//       designation: "DIRECTOR, NGRI",
//       profileURL: "https://www.ngri.res.in/cms/our-director.php",
//       image: Prakashkumar
//     }
//   ];

//   return (
//     <section className="bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 py-10 px-6">
//       <div className="flex flex-wrap justify-center gap-8">
//         {profiles.map((profile) => (
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             key={profile.id}
//             className="relative p-[2px] rounded-xl w-72
//               bg-[length:200%_200%]
//               bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400
//               animate-border-animate shadow-xl"
//           >
//             <Link to={profile.profileURL} target="_blank" rel="noopener noreferrer">
//               <div className="bg-black/80 rounded-xl p-5 backdrop-blur-md h-full">
//                 <img
//                   src={profile.image}
//                   alt={profile.name}
//                   className="w-32 h-32 mx-auto rounded-full border-4 border-white object-cover mb-4"
//                 />
//                 <h2 className="text-white font-semibold text-center text-base">{profile.name}</h2>
//                 <p className="text-white text-xs text-center mt-1">{profile.designation}</p>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };



const ProfileCard = () => {
  const profiles = [
    {
      id: 0,
      name: "SHRI. NARENDRA MODI",
      designation: "PRESIDENT, CSIR",
      profileURL: "https://www.pmindia.gov.in/en/",
      image: narendramodi
    },
    {
      id: 1,
      name: "DR. JITENDRA SINGH",
      designation: "VICE PRESIDENT, CSIR",
      profileURL: "https://www.csir.res.in/minister/dr-jitendra-singh",
      image: jitendrasingh
    },
    {
      id: 2,
      name: "DR.(MRS.) N.KALAISELVI",
      designation: "DG, CSIR",
      profileURL: "https://www.csir.res.in/dgrcsir/dr-mrs-n-kalaiselvi",
      image: kalaiselvi
    },
    {
      id: 3,
      name: "DR.PRAKASH KUMAR",
      designation: "DIRECTOR, NGRI",
      profileURL: "https://www.ngri.res.in/cms/our-director.php",
      image: Prakashkumar
    }
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="flex flex-wrap justify-center gap-10">
        {profiles.map((profile) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: profile.id * 0.2 }}
            key={profile.id}
            className="w-[320px] h-[420px] rounded-[30px] border  p-6 shadow-lg backdrop-blur-md hover:shadow-xl transition-all duration-300"
          >
            <Link to={profile.profileURL} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center justify-center h-full text-blue-500 ">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-180 rounded-t-lg mb-4"
                />
                <h2 className="text-lg font-bold text-center leading-tight mb-2">
                  {profile.name}
                </h2>
                <p className="text-sm font-medium text-center opacity-80">
                  {profile.designation}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default ProfileCard;