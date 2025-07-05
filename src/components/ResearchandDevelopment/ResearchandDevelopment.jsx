import React from "react";
import { Link } from "react-router-dom";
import c1 from "../../assets/images/ResearchandDevelopment/c1.jpg";
import c3 from "../../assets/images/ResearchandDevelopment/c3.jpg";
import c2 from "../../assets/images/ResearchandDevelopment/c2.jpg";
import c8 from "../../assets/images/ResearchandDevelopment/c8.jpg";
import c9 from "../../assets/images/ResearchandDevelopment/c9.jpg";
import c5 from "../../assets/images/ResearchandDevelopment/c5.jpg";
import c4 from "../../assets/images/ResearchandDevelopment/c4.jpg";
import c7 from "../../assets/images/ResearchandDevelopment/c7.jpg";
import c6 from "../../assets/images/ResearchandDevelopment/c6.jpg";
import c10 from "../../assets/images/ResearchandDevelopment/c10.jpg";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";


const ResearchData = [
  {
    id: 0,
    title: "Geodynamics and Geo-Hazard of Active Plate Margin",
    image: c1,
    researchPageURL:
      "https://www.ngri.res.in/cms/geodynamics-and-geo-hazard-of-active-plate-margin.php",
    description:
      "The Indian Subcontinent is a mosaic of various geological units, such as - ancient cratons, mobile belts, sedimentary basins, active rift, and collision zones, that formed over a geological time period from the Hadean to the current geological epoch. These geological units preserve signatures of sustained time-bound geological events and factors that affected the origin and evolution of this continent. These include, multiple breakup, subduction and collisional events related to Columbia, Rodinia and Gondwana supercontinent assembly periods, besides extraordinary movement of Indian plate and its interaction with four mantle plumes between 130 and 90 Ma.",
  },
  {
    id: 1,
    title: "Structure and Evolution of the Indian Shield",
    image: c3,
    researchPageURL:
      "https://www.ngri.res.in/cms/structure-and-evolution-of-the-indian-shield.php",
    description:
      "The Indian Peninsular Shield is an assembly of several Archaean to Early Proterozoic cratons separated by high-grade granulite facies mobile belts that evolved over a protracted geological history. These cratons also act as basements to several mid- to late Proterozoic platformal intracratonic basins. Dharwar, Bastar, Bundelkhand, Singhbhum and Aravalli cratons are some of the major cratonic blocks of the Indian Shield. Godavari rift separates the Dharwar and Bastar Cratons while the Mahanadi Rift separates the Bastar and Singhbhum cratons. Dharwar craton of the southern Indian shield is also bounded by the Southern Granulite Terrain to the south and the Eastern Ghats Granulite Terrain to the East. Central Indian Tectonic Zone is another major geological unit that separates the Bastar and Singhbhum cratons from the Bundelkhand and Aravalli Cratons.",
  },
  {
    id: 2,
    title: "Geo-resources (Hydrocarbon, Minerals, Water)",
    image: c2,
    researchPageURL: "https://www.ngri.res.in/cms/georesources.php",
    description: "Magnetotelluric (MT) is a passive EM technique that uses variations in the naturally occurring Electromagnetic fields to model the subsurface resistivity structure. Due to the broad range of frequency (104 – 10-4 Hz) utilized in MT, this tool can give subsurface information of the order of a few 10’s meters to a few 100’s kms. Therefore, MT finds applications in shallow exploration studies for various earth resources and deep crustal and upper mantle imaging to understand the dynamics and evolution of the lithosphere. Since resistivity of earth materials shows a huge range of variation (10-2 to 106) as compared to other physical properties, measurement of resistivity property helps to distinguish between different rock formations and in-situ physical conditions. In hydrocarbon studies, the generally conductive sedimentary formation can be easily mapped from the encompassing resistive formations. Therefore, MT is used as a complementary tool along with seismic data to de-risk exploration. In seismically poor geological settings, such as volcanic or basaltic covered and complex overthrust settings, MT is more effective and provides better constraints on the target structure.",
  },
  {
    id: 3,
    title: "Earth Process Modelling",
    image: c8,
    researchPageURL: "https://www.ngri.res.in/cms/earth-process-modelling.php",
    description:'The earth is a natural, dynamic and evolving system which includes the atmosphere, hydrosphere, lithosphere and biosphere. Some fundamental internal and external processes are the consequences of the dynamic nature of the earth; namely, tectonic activity and earthquakes (geodynamic process); weathering, mass wasting and erosion (surface process); movement of water above, on and below the surface of the earth (hydrological process). '

  },
  {
    id: 4,
    title: "Carbon Capture, Utilization and Storage",
    image: c9,
    researchPageURL: "https://www.ngri.res.in/cms/carbon-capture-utilization-and-storage.php",
    description:'Geological Carbon Sequestration (GCS) is a critical technology for mitigating climate change by capturing and storing carbon dioxide (CO2) in underground geological formations. Geophysical techniques are indispensable in the lifecycle of Geological Carbon Sequestration projects, from initial site selection and characterization to ongoing monitoring and ensuring long-term storage integrity. By providing detailed subsurface information and continuous monitoring capabilities, these techniques help to mitigate risks, ensure regulatory compliance, and build public confidence in the safety and effectiveness of GCS as a critical tool in the fight against climate change.'
  },
  {
    id: 5,
    title: "Airborne Geophysics",
    image: c5,
    researchPageURL: "",
    description:''
  },
  {
    id: 6,
    title: "Instrumentation and Geotechnical Services",
    image: c4,
    researchPageURL: "",
    description:''
  },
  {
    id: 7,
    title: "Geothermal Research",
    image: c7,
    researchPageURL: "https://www.ngri.res.in/cms/geothermal-research.php",
    description:'Geothermal energy is a clean and renewable resource that can be economically extracted from the heat sources beneath the Earth. This form of energy has a wide range of applications, from generating electricity to providing space heating. As we delve deeper into the Earth, temperatures rise significantly. However, for geothermal energy exploration, we focus on accessible temperatures at shallower depths, indicated by surface manifestation, like hot springs or geysers, and a higher geothermal gradient. Exploring geothermal reservoirs is crucial for efficient electricity production.'
  },
  {
    id: 8,
    title: "Planetary Sciences",
    image: c6,
    researchPageURL: "https://www.ngri.res.in/cms/planetary-sciences.php",
    description:'Planetary Sciences Division carries out advanced research on geology & geophysics of terrestrial planets (Mercury, Venus, Earth and Mars) and the Moon for understanding the origin and evolution of the inner Solar System planets and the Moon. Our research includes understanding of impact cratering, tectonics, volcanism, sedimentary and geodynamic processes that shaped the terrestrial planets and the Moon. Geophysical research involving state-of-the-art seismology, gravity, and magnetic studies are performed for understanding the interior structure of the Moon and Mars. Our ongoing and future research covers two major areas: (1) the study of planetary geological records, deciphering geologic history, and geodynamic processes; (2) the study of planetary interiors – composition, geophysical properties and the nature of internal layers using geophysical methods, including theoretical simulations. We undertake study of terrestrial analog sites on Earth that have important implications for planetary exploration. We aim at establishing a geophysical laboratory on the Moon in the future.'
  },
  {
    id: 9,
    title: "Geophysical Mapping Ladakh",
    image: c10,
    researchPageURL:"https://www.ngri.res.in/cms/geophysical-mapping-ladakh.php",
    description:'The Ladakh sector of the Himalaya is geologically significant as it preserves the imprints of the evolutionary history of the subduction-collision front between the Indian and the Eurasian plates in the Indian sector of the Himalayan arc. The region is also important for its geothermal potential. However, only a few geophysical studies have been conducted in Eastern Ladakh to delineate the underlying crustal/lithospheric structure and add the depth extent to surface tectonic features. We have taken up a magnetotelluric study in Eastern Ladakh to map its geoelectric crustal structure. Such a study shall also be helpful in assessing the geothermal potential as well as identification of deep reservoir(s), if any, present in this region. In this endeavor, we have covered a profile between Ukdungle and Fukche in eastern Ladakh.'
  },
];

const ResearchDevelopment = () => {
  const [activeId, setActiveId] = useState(0);
  const activeResearch = ResearchData.find((research) => (research.id === activeId));

  return (
    <section className="text-white bg-blue-900 py-12 px-4 sm:px-8">
      <h2 className=" text-5xl font-bold text-center mb-14  uppercase md:uppercase animate-text bg-clip-text text-transparent bg-gradient-to-br from-orange-400 via-white to-green-500 ">
        Research and Development
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full flex flex-col  lg:w-1/3  gap-4">
          {ResearchData.map((research) => (
            <button
              key={research.id}
              onClick={() => setActiveId(research.id)}
              className={`flex justify-between items-center px-6 py-3 rounded-full rounded-r-lg text-left transition-all duration-700 
            hover:text-white hover:shadow-[inset_40rem_0_0_0] hover:shadow-yellow-500 
            ${
              activeId === research.id
                ? "bg-yellow-500 text-black font-bold shadow-md"
                : "bg-white text-blue-900 "
            } hover:text-white hover:shadow-[inset_40rem_0_0_0] hover:shadow-yellow-500`}
            >
              <span className="font-bold text-blue-900 uppercase p-3">
                {research.title}
              </span>
              {activeId === research.id && (
              <span className="bg-white rounded-full p-4">
                <FiArrowUpRight size={18} />
              </span>)}
            </button>
          ))}
        </div>

        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="  text-2xl sm:text-3xl font-semibold text-white">  {activeResearch.title}
          </h2>
         {activeResearch.image &&(
          <img
            src={activeResearch.image}
            alt={activeResearch.title}
            className="rounded-xl shadow-xl max-w-full max-h-[400px]  mx-auto object-cover lg:max-0 p-6 bg-blue-900"
          />
          )}
        
          

          {activeResearch.description &&(
          <p className=" text-gray-100 leading-relaxed p-12">
            {activeResearch.description}
            
          </p>)}

          {activeResearch.researchPageURL &&(
          <a
            href={activeResearch.researchPageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-semibold px-5 py-2 rounded-full
            transition-all duration-700 
            hover:text-white hover:shadow-[inset_8rem_0_0_0] hover:shadow-yellow-500 "
          >
            Read More
          </a>)}

         
        </div>
      </div>
    </section>
  );
};

export default ResearchDevelopment;