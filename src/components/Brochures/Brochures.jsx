import {  FaChartLine } from "react-icons/fa";
import { GiVolcano, GiEarthAsiaOceania } from "react-icons/gi";
import { MdWhatshot } from "react-icons/md";
import { FaArrowUpFromGroundWater } from "react-icons/fa6";
import { motion } from "framer-motion";
const brochuresData = [
  {
    icon: <GiEarthAsiaOceania className="text-4xl text-blue-600 hover:text-pink-500" size={48} />,
    title: "Exploring Earth For 6 Decades"
  },
  {
    icon: <FaChartLine className="text-4xl text-blue-500 rounded-lg hover:text-pink-500"  size={48}/>,
    title: "Geophysics For Sustainable Development Goals (SDGs)"
  },
  {
    icon: <MdWhatshot className="text-4xl text-blue-500 hover:text-pink-500" size={48} />,
    title: "Geothermal Energy Research"
  },
  {
    icon: <FaArrowUpFromGroundWater className="text-4xl text-blue-500 hover:text-pink-500" size={48}/>,
    title: "Groundwater Exploration & Management"
  },
];

const Brochures = () => {
  return (
    <div className='bg-[#CAE9FB] px-6 py-12 sm:px-8'>
    <div className='max-w-8xl mx-auto'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-6  '>
      {brochuresData.map(brochure => (
        <motion.div key={brochure.id} 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 ,delay: 0.3 * brochuresData.indexOf(brochure) }}
        whileFocus={{ scale: 1.05 }}
        whileHover={{ scale: 1.05 }}
        className=" p-5 rounded-xl shadow-md hover:shadow-xl space-x-4 transition duration-300 flex font-medium items-center font-sans cursor-pointer w-full bg-white hover:scale-105 ">
          <div className="shrink-0">{brochure.icon} </div>
          <div className="text-base font-medium  break-words">{brochure.title}</div>
        </motion.div>
      ))}
      </div>
    </div>
    </div>
  )
}

export default Brochures