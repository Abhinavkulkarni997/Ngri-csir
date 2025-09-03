// import { Canvas, useLoader, useFrame } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import * as THREE from "three";
// import { useRef, useMemo } from "react";
// import earthDay from "../../assets/textures/earth_day.jpg";
// import earthNight from "../../assets/textures/earth_night.jpg";
// import earthClouds from "../../assets/textures/earth_clouds.png";

// const Earth = () => {
//   const dayMap = useLoader(THREE.TextureLoader, earthDay);
//   const nightMap = useLoader(THREE.TextureLoader, earthNight);
//   const cloudMap = useLoader(THREE.TextureLoader, earthClouds);

//   const earthRef = useRef();
//   const cloudsRef = useRef();

//   // Decide day/night texture based on local time
//   const hour = new Date().getHours();
//   const isDay = hour >= 6 && hour < 18;
//   const selectedMap = useMemo(() => (isDay ? dayMap : nightMap), [isDay, dayMap, nightMap]);

//   useFrame(() => {
//     if (earthRef.current) earthRef.current.rotation.y += 0.0008;
//     if (cloudsRef.current) cloudsRef.current.rotation.y += 0.0005;
//   });

//   return (
//     <>
//       {/* Earth */}
//       <mesh ref={earthRef}>
//         <sphereGeometry args={[2, 64, 64]} />
//         <meshStandardMaterial map={selectedMap} />
//       </mesh>

//       {/* Clouds */}
//       <mesh ref={cloudsRef}>
//         <sphereGeometry args={[2.02, 64, 64]} />
//         <meshStandardMaterial
//           map={cloudMap}
//           transparent
//           opacity={0.4}
//           depthWrite={false}
//         />
//       </mesh>

//       {/* Atmosphere */}
//       <mesh>
//         <sphereGeometry args={[2.1, 64, 64]} />
//         <meshBasicMaterial color="#3a9bdc" transparent opacity={0.1} />
//       </mesh>
//     </>
//   );
// };

// export default function Globe() {
//   return (
//     <div className="w-full h-screen bg-black">
//       <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[5, 5, 5]} intensity={1.5} />
//         <Stars radius={100} depth={50} count={2000} fade />
//         <OrbitControls enableZoom enablePan enableRotate />
//         <Earth />
//       </Canvas>
//     </div>
//   );
// }

// src/components/GlobeRealTime.jsx
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import * as THREE from "three";
// import { useRef, useMemo } from "react";
// import earthDay from "../../assets/textures/earth_day.jpg";

// // Calculate sun direction from current UTC time
// function getSunPosition() {
//   const now = new Date();
//   const millisecondsPerDay = 1000 * 60 * 60 * 24;
//   const daysSinceJ2000 = (now - new Date(Date.UTC(2000, 0, 1, 12))) / millisecondsPerDay;

//   const meanLongitude = (280.460 + 0.9856474 * daysSinceJ2000) % 360;
//   const meanAnomaly = (357.528 + 0.9856003 * daysSinceJ2000) % 360;

//   const eclipticLongitude = meanLongitude + 1.915 * Math.sin((meanAnomaly * Math.PI) / 180) +
//     0.020 * Math.sin((2 * meanAnomaly * Math.PI) / 180);

//   const x = Math.cos((eclipticLongitude * Math.PI) / 180);
//   const z = Math.sin((eclipticLongitude * Math.PI) / 180);

//   return [x, 0, z];
// }

// const EarthRealTime = () => {
//   const earthRef = useRef();
//   const texture = useLoader(THREE.TextureLoader, earthDay);
//   const sunRef = useRef();

//   // Rotate earth and update sun position
//   useFrame(() => {
//     if (earthRef.current) earthRef.current.rotation.y += 0.0008;
//     if (sunRef.current) {
//       const sunDir = getSunPosition();
//       sunRef.current.position.set(...sunDir.map((n) => n * 10));
//     }
//   });

//   return (
//     <>
//       {/* Earth */}
//       <mesh ref={earthRef}>
//         <sphereGeometry args={[2, 64, 64]} />
//         <meshStandardMaterial map={texture} />
//       </mesh>

//       {/* Real Sunlight Direction */}
//       <directionalLight
//         ref={sunRef}
//         intensity={1.2}
//         color={"#ffffff"}
//       />
//     </>
//   );
// };

// export default function GlobeRealTime() {
//   return (
//     <div className="w-full h-screen bg-black">
//       <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
//         <ambientLight intensity={0.3} />
//         <Stars radius={100} depth={50} count={2000} fade />
//         <OrbitControls enableZoom enablePan enableRotate />
//         <EarthRealTime />
//       </Canvas>
//     </div>
//   );
// }


// rotating earth

// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import * as THREE from "three";
// import { useRef} from "react";
// import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
// import earthDay from "../../assets/textures/2k_earth_daymap.jpg";
// import earthNight from "../../assets/textures/2k_earth_nightmap.jpg";
// import earthClouds from "../../assets/textures/earth_clouds.png";
// import {Text} from '@react-three/drei';
// import { Billboard } from "@react-three/drei";

// function handleScrollDown(){
//     window.scrollBy({
//         top: window.innerHeight,
//         behavior: 'smooth',
//     });
// }

// function getSunPosition() {
//   const now = new Date();
//   const msPerDay = 1000 * 60 * 60 * 24;
//   const daysSinceJ2000 = (now - new Date(Date.UTC(2000, 0, 1, 12))) / msPerDay;

//   const L = (280.460 + 0.9856474 * daysSinceJ2000) % 360;
//   const g = (357.528 + 0.9856003 * daysSinceJ2000) % 360;
//   const lambda = L + 1.915 * Math.sin((g * Math.PI) / 180) +
//     0.020 * Math.sin((2 * g * Math.PI) / 180);

//   const x = Math.cos((lambda * Math.PI) / 180);
//   const z = Math.sin((lambda * Math.PI) / 180);
//   return [x * 10, 0, z * 10];
// }

// const EarthRealistic = () => {
//   const earthRef = useRef();
//   const cloudRef = useRef();
//   const sunRef = useRef();

//   const dayMap = useLoader(THREE.TextureLoader, earthDay);
//   const nightMap=useLoader(THREE.TextureLoader,earthNight);
//   const cloudMap = useLoader(THREE.TextureLoader, earthClouds);


// useFrame(({ clock }) => {
//   const elapsed = clock.getElapsedTime(); // Smooth rotation time

//   const rotationSpeed = 0.03; // Adjust speed here
//   const indiaOffset = 240 * Math.PI /180; // To initially center India

//   if (earthRef.current) {
//     earthRef.current.rotation.y = elapsed * rotationSpeed + indiaOffset;
//   }

//   if (cloudRef.current) {
//     cloudRef.current.rotation.y = elapsed * rotationSpeed + indiaOffset * 1.01;
//   }

//   if (sunRef.current) {
//     const sunDir = getSunPosition(); 
//     sunRef.current.position.set(...sunDir);
//   }
// });




//   return (
//     <>
//       {/* Earth Sphere */}
//       <mesh ref={earthRef} castShadow receiveShadow>
//         <sphereGeometry args={[1, 24, 24]} />
//         <meshStandardMaterial map={dayMap} 
//         emissiveMap={nightMap}
//         emissive={new THREE.Color(0xffffff)}
//         emissiveIntensity={1.2}
//         shininess={5}
//         />
//       </mesh>

//       {/* Cloud Layer */}
//       <mesh ref={cloudRef} castShadow receiveShadow>
//         <sphereGeometry args={[1.01, 24, 24]} />
//         <meshStandardMaterial
//           map={cloudMap}
//           transparent
//           opacity={0.4}
//           depthWrite={false}
//         />
//       </mesh>

//       {/* Subtle Atmosphere */}
//       <mesh>
//         <sphereGeometry args={[1.01, 24, 24]} />
//         <meshBasicMaterial color="#3a9bdc" transparent opacity={0.06} />
//       </mesh>

//       {/* Real-Time Sunlight */}
//       <directionalLight
//         ref={sunRef}
//         intensity={10}
//         color="#ffffff"
//         castShadow
//       />    
//     </>
//   );
// };

// export default function GlobeRealistic() {
//   function latLongToVector3(lat,lon,radius=1.01){
//   const phi=(90-lat)*(Math.PI/180);
//   const theta=(lon+180)*(Math.PI/180);
  
//   const x=-radius*Math.sin(phi)*Math.cos(theta);
//   const y=radius*Math.cos(phi);
//   const z=radius*Math.sin(phi)*Math.sin(theta);
//   return [x,y,z];

// }
//   const indiaCoords=latLongToVector3(20,-35);
//   return (
//     <div className="w-full h-screen bg-black relative">
//       <Canvas camera={{ position: [3, 1, 2], fov: 45 }} shadows>
//         <ambientLight intensity={0.05} />
//         <Stars radius={100} depth={60} count={1500} fade />
//         {/* <OrbitControls  enableZoom enablePan enableRotate /> */}
//         <Billboard position={latLongToVector3(-8,-80,1.01)}>
//         <Text
//         position={indiaCoords}
//         fontSize={0.07}
//         color="white"
//         anchorX="center"
//         anchorY="middle"
//         maxWidth={1.5}
//         lineHeight={1.2}
//         enableRotate={true}>{"\t\t\tराष्ट्रीय भूभौतिकीय अनुसंधान संस्थान \n National GeoPhysical Research Institute"} </Text>
//         </Billboard>
//         <OrbitControls enableZoom={true} enablePan={false} enableRotate={false}/>
//         <EarthRealistic />
//       </Canvas>

//       <div className="absolute bottom-4 sm:bottom-[30px] left-0 right-0 flex justify-center z-20">
//               <button
//                 onClick={handleScrollDown}
//                 className="text-white p-4 rounded-full  hover:bg-white hover:text-black transition-colors"
//               >
//                 <MdOutlineKeyboardDoubleArrowDown size={32} />
//               </button>
//             </div>
//     </div>
//   );
// }


// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls, Stars, Text, Billboard } from "@react-three/drei";
// import * as THREE from "three";
// import { useRef } from "react";
// import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

// import earthDay from "../../assets/textures/2k_earth_daymap.jpg";
// import earthNight from "../../assets/textures/2k_earth_nightmap.jpg";
// import earthClouds from "../../assets/textures/earth_clouds.png";

// function handleScrollDown() {
//   window.scrollBy({
//     top: window.innerHeight,
//     behavior: 'smooth',
//   });
// }

// // Sun position calculation
// function getSunPosition() {
//   const now = new Date();
//   const msPerDay = 1000 * 60 * 60 * 24;
//   const daysSinceJ2000 = (now - new Date(Date.UTC(2000, 0, 1, 12))) / msPerDay;

//   const L = (280.460 + 0.9856474 * daysSinceJ2000) % 360;
//   const g = (357.528 + 0.9856003 * daysSinceJ2000) % 360;
//   const lambda = L + 1.915 * Math.sin((g * Math.PI) / 180) +
//     0.020 * Math.sin((2 * g * Math.PI) / 180);

//   const x = Math.cos((lambda * Math.PI) / 180);
//   const z = Math.sin((lambda * Math.PI) / 180);
//   return [x * 10, 0, z * 10];
// }

// // Convert lat/lon to 3D position on sphere
// function latLongToVector3(lat, lon, radius = 1.01) {
//   const phi = (90 - lat) * (Math.PI / 180);
//   const theta = (lon + 180) * (Math.PI / 180);
//   const x = -radius * Math.sin(phi) * Math.cos(theta);
//   const y = radius * Math.cos(phi);
//   const z = radius * Math.sin(phi) * Math.sin(theta);
//   return [x, y, z];
// }


// const EarthRealistic = () => {
//   const earthRef = useRef();
//   const cloudRef = useRef();
//   const sunRef = useRef();

//   const dayMap = useLoader(THREE.TextureLoader, earthDay);
//   const nightMap = useLoader(THREE.TextureLoader, earthNight);
//   const cloudMap = useLoader(THREE.TextureLoader, earthClouds);

//   useFrame(() => {
//     // Update sunlight direction only
//     if (sunRef.current) {
//       const sunDir = getSunPosition();
//       sunRef.current.position.set(...sunDir);
//     }
//   });

//   return (
//     <>
//       {/* Earth Sphere */}
//       <mesh ref={earthRef} castShadow receiveShadow>
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshStandardMaterial
//           map={dayMap}
//           emissiveMap={nightMap}
//           emissive={new THREE.Color(0xffffff)}
//           emissiveIntensity={1.2}
//         />
//       </mesh>

//       {/* Cloud Layer */}
//       <mesh ref={cloudRef}>
//         <sphereGeometry args={[1.01, 64, 64]} />
//         <meshStandardMaterial
//           map={cloudMap}
//           transparent
//           opacity={0.4}
//           depthWrite={false}
//         />
//       </mesh>

//       {/* Atmosphere Glow */}
//       <mesh>
//         <sphereGeometry args={[1.02, 64, 64]} />
//         <meshBasicMaterial color="#3a9bdc" transparent opacity={0.06} />
//       </mesh>

//       {/* Directional Light as Sun */}
//       <directionalLight
//         ref={sunRef}
//         intensity={10}
//         color="#ffffff"
//         castShadow
//       />

//       {/* Optional glowing sun mesh */}
//       <mesh position={getSunPosition()}>
//         <sphereGeometry args={[0.1, 16, 16]} />
//         <meshBasicMaterial emissive={"yellow"} />
//       </mesh>
//     </>
//   );
// };

// export default function GlobeRealistic() {
//   const hyderabadCoords = latLongToVector3(17.4163, 78.5510);

//   return (
//     <div className="w-full h-screen bg-black relative">
    
 


//       <Canvas camera={{ position: [2.5, 0.5, 2.5], fov: 45 }} shadows  onCreated={({ camera }) => {
//     const indiaPos = latLongToVector3(17.4163, 78.5510, 1.01);
//     camera.lookAt(...indiaPos); 
//   }}>
//         <ambientLight intensity={0.05} />
//         <Stars radius={100} depth={60} count={1500} fade />

//         {/* Label at Hyderabad */}
//         <Billboard position={hyderabadCoords}>
//           <Text
//             fontSize={0.07}
//             color="white"
//             anchorX="center"
//             anchorY="middle"
//             maxWidth={1.5}
//             lineHeight={1.2}
//           >
//             {"राष्ट्रीय भूभौतिकीय अनुसंधान संस्थान\nNational GeoPhysical Research Institute"}
//           </Text>
//         </Billboard>

//         {/* OrbitControls only for zoom (optional) */}
//         <OrbitControls enableZoom={true} enablePan={false} enableRotate={false} />

//         <EarthRealistic />
//       </Canvas>

//       {/* Scroll down arrow */}
//       <div className="absolute bottom-4 sm:bottom-[30px] left-0 right-0 flex justify-center z-20">
//         <button
//           onClick={handleScrollDown}
//           className="text-white p-4 rounded-full hover:bg-white hover:text-black transition-colors"
//         >
//           <MdOutlineKeyboardDoubleArrowDown size={32} />
//         </button>
//       </div>
//     </div>
//   );
// }


import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, Text, Billboard } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useEffect, useMemo, useState, use } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import HeroBanner from '../../assets/images/Hero/Home-Banner-2025.png';
import earthDay from "../../assets/textures/2k_earth_daymap.jpg";
import earthNight from "../../assets/textures/2k_earth_nightmap.jpg";
import earthClouds from "../../assets/textures/earth_clouds.png";
import  Banner from '../../assets/images/Hero/home-banner1.svg';
function handleScrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  });
}

// Fixed sun position calculation for proper day/night cycle
function getSunPosition(speedMultiplier = 1) {
  const now = new Date();
  
  // Convert to IST (UTC + 5:30)
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istTime = new Date(now.getTime() + istOffset);
  
  // Get hours, minutes, and seconds in IST
  const hours = istTime.getUTCHours();
  const minutes = istTime.getUTCMinutes();
  const seconds = istTime.getUTCSeconds();
  
  // Calculate precise time in hours (including seconds for smooth movement)
  const timeInHours = hours + minutes / 60 + seconds / 3600;
  
  // Apply speed multiplier for faster visualization (optional)
  const adjustedTime = (timeInHours * speedMultiplier) % 24;
  
  // Sun angle: 0° at noon (sun overhead), 180° at midnight
  const sunAngle = (adjustedTime - 12) * 15 * (Math.PI / 180); // 15° per hour
  
  // Position sun opposite to the time-based angle
  // At noon IST, sun should be over India (roughly 78.5° E longitude)
  const indiaLongitude = 78.5 * (Math.PI / 180);
  const sunLongitude = indiaLongitude - sunAngle;
  
  // Sun position on a large sphere around Earth
  const sunDistance = 10;
  const x = Math.cos(sunLongitude) * sunDistance;
  const z = Math.sin(sunLongitude) * sunDistance;
  
  return { 
    position: [x, 0, z], 
    timeIST: adjustedTime.toFixed(2),
    sunAngleDegrees: (sunAngle * 180 / Math.PI).toFixed(1)
  };
}

// Custom shader material for proper day/night effect
const createEarthMaterial = (dayMap, nightMap) => {
  return new THREE.ShaderMaterial({
    uniforms: {
      dayTexture: { value: dayMap },
      nightTexture: { value: nightMap },
      sunDirection: { value: new THREE.Vector3() }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D dayTexture;
      uniform sampler2D nightTexture;
      uniform vec3 sunDirection;
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vec3 dayColor = texture2D(dayTexture, vUv).rgb;
        vec3 nightColor = texture2D(nightTexture, vUv).rgb;
        
        // Calculate how much this fragment faces the sun
        vec3 normal = normalize(vNormal);
        vec3 sunDir = normalize(sunDirection);
        float sunDot = dot(normal, sunDir);
        
        // Create smooth transition between day and night
        float mixFactor = smoothstep(-0.1, 0.1, sunDot);
        
        // Mix day and night textures
        vec3 color = mix(nightColor * 0.3, dayColor, mixFactor);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `
  });
};

function latLongToVector3(lat, lon, radius = 1.01) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return [x, y, z];
}

const useResponsiveValues=()=>{
  const [dimensions,setDimensions]=useState({
    width:typeof window !== "undefined" ? window.innerWidth : 0,
    height:typeof window !== "undefined" ? window.innerHeight : 0
  })

  useEffect(()=>{
  const handleResize=()=>{
    setDimensions({
      width:window.innerWidth,
      height:window.innerHeight 
    
  })
  }
  window.addEventListener('resize',handleResize);
  return ()=>window.removeEventListener('resize',handleResize);

},[]);

const isMobile=dimensions.width < 768;
const isTablet=dimensions.width >= 768 && dimensions.width < 1024;
const isDesktop=dimensions.width >= 1024;

const cameraDistance=useMemo(()=>{
  if(isMobile) return 4.5;
  if(isTablet) return 3.5;
  return 2.5;
},[isMobile,isTablet]);

const textSize=useMemo(()=>{
  if(isMobile) return 0.04;
  if(isTablet) return 0.06;
  return 0.07;
},[isMobile,isTablet]);

const fov=useMemo(()=>{
  if(isMobile) return 60;
  if(isTablet) return 50;
  return 45;
},[isMobile,isTablet]);
return {isMobile,isTablet,isDesktop,cameraDistance,textSize,fov};
}


const EarthRealistic = ({ speedMultiplier = 1, onTimeUpdate }) => {
  const earthRef = useRef();
  const cloudRef = useRef();
  const sunRef = useRef();

  const dayMap = useLoader(THREE.TextureLoader, earthDay);
  const nightMap = useLoader(THREE.TextureLoader, earthNight);
  const cloudMap = useLoader(THREE.TextureLoader, earthClouds);

  // Create custom material for day/night effect
  const earthMaterial = useMemo(() => {
    return createEarthMaterial(dayMap, nightMap);
  }, [dayMap, nightMap]);

  useFrame(() => {
    const sunData = getSunPosition(speedMultiplier);
    const sunPosition = sunData.position;
    
    // Update sun light position
    if (sunRef.current) {
      sunRef.current.position.set(...sunPosition);
      sunRef.current.lookAt(0, 0, 0);
      
      // Adjust light intensity based on time of day over India
      const timeHour = parseFloat(sunData.timeIST);
      let intensity;
      
      if (timeHour >= 6 && timeHour <= 18) {
        // Daytime: full intensity
        intensity = 3;
      } else if (timeHour >= 5 && timeHour < 6) {
        // Dawn: gradual increase
        intensity = (timeHour - 5) * 3;
      } else if (timeHour > 18 && timeHour <= 19) {
        // Dusk: gradual decrease
        intensity = (19 - timeHour) * 3;
      } else {
        // Night: minimal intensity
        intensity = 0.1;
      }
      
      sunRef.current.intensity = intensity;
    }
    
    // Update shader uniform for sun direction
    if (earthMaterial && earthMaterial.uniforms) {
      const sunDir = new THREE.Vector3(...sunPosition).normalize();
      earthMaterial.uniforms.sunDirection.value = sunDir;
    }
    
    // Callback to parent component with time info
    if (onTimeUpdate) {
      onTimeUpdate(sunData);
    }
  });

  return (
    <>
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <primitive object={earthMaterial} />
      </mesh>

      <mesh ref={cloudRef}>
        <sphereGeometry args={[1.01, 64, 64]} />
        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.02, 64, 64]} />
        <meshBasicMaterial color="#3a9bdc" transparent opacity={0.06} />
      </mesh>

      <directionalLight
        ref={sunRef}
        intensity={3}
        color="#ffffff"
        castShadow
      />

      {/* Visual sun representation */}
      <mesh position={getSunPosition(speedMultiplier).position}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshBasicMaterial emissive={"#FFD700"} color={"#FFD700"} />
      </mesh>
    </>
  );
};

export default function GlobeRealistic() {
 

  const {isMobile,isTablet,isDesktop,cameraDistance,textSize,fov}=useResponsiveValues();

  const hyderabadCoords = latLongToVector3(17.4163, 78.5510, 1.05);
  const indiaCenter = latLongToVector3(20.5937, 78.9629, 1.01);
  const controlsRef = useRef();
  const cameraRef = useRef();
  
  // State for time display and speed control
  const [currentTime, setCurrentTime] = useState(null);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  // Calculate camera position to view both India and the text

  const cameraPosition = useMemo(()=>{
    return new THREE.Vector3(
    indiaCenter[0] * cameraDistance,
    indiaCenter[1] * cameraDistance+(isMobile? 0.5 : 0.8),
    indiaCenter[2] * cameraDistance
  );},[cameraDistance,isMobile,indiaCenter]);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(...indiaCenter);
      controlsRef.current.update();
    }
  }, []);

  const handleTimeUpdate = (sunData) => {
    setCurrentTime(sunData);
  };

  // const formatTime = (timeHours) => {
  //   if (!timeHours) return '';
  //   const hours = Math.floor(timeHours);
  //   const minutes = Math.floor((timeHours - hours) * 60);
  //   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} IST`;
  // };

  return (
    <div className="w-full h-screen bg-black relative  mt-4 sm:mt-8 md:mt-12 lg:mt-16" >
      {/* Time Display */}
      {/* {currentTime && (
        <div className="absolute top-4 left-4 z-20 text-white bg-black bg-opacity-50 p-3 rounded">
          <div className="text-lg font-bold">{formatTime(parseFloat(currentTime.timeIST))}</div>
          <div className="text-sm">Sun Angle: {currentTime.sunAngleDegrees}°</div>
        </div>
      )}
       */}
      {/* Speed Control
      <div className="absolute top-4 right-4 z-20 text-white bg-black bg-opacity-50 p-3 rounded">
        <div className="text-sm mb-2">Time Speed:</div>
        <div className="flex gap-2">
          <button 
            onClick={() => setSpeedMultiplier(1)}
            className={`px-2 py-1 rounded text-xs ${speedMultiplier === 1 ? 'bg-blue-500' : 'bg-gray-600'}`}
          >
            1x
          </button>
          <button 
            onClick={() => setSpeedMultiplier(60)}
            className={`px-2 py-1 rounded text-xs ${speedMultiplier === 60 ? 'bg-blue-500' : 'bg-gray-600'}`}
          >
            60x
          </button>
          <button 
            onClick={() => setSpeedMultiplier(3600)}
            className={`px-2 py-1 rounded text-xs ${speedMultiplier === 3600 ? 'bg-blue-500' : 'bg-gray-600'}`}
          >
            Fast
          </button>
        </div>
      </div> */}
      {/* <div className="w-full h-full relative" style={{ backgroundImage: `url(${HeroBanner})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat' }}></div> */}
     <div className="flex items-center justify-center absolute inset-0 z-10 ">
     {/* <img src={HeroBanner} alt="Hero_Banner" className="max-w-4xl  w-full h-full  opacity-100 rounded-full  p-8 " /> */}
     <img src={HeroBanner} alt="Hero_Banner" className={`$ max-w-4xl rounded-full w-full h-full opacity-40 sm:opacity-45 md:opacity-50 backdrop-blur-md bg-white/10 sm:bg-white/15 md:bg-white/20  shadow-xl sm:shadow-2xl ${isMobile ? 'max-w-6xl' : 'max-w-8xl'}`} />
     {/* <img src={Banner} alt="Hero_Banner" className="max-w-8xl  w-full h-full  opacity-50 backdrop-blur-md bg-white/20 shadow-2xl  " /> */}
     </div>
      <Canvas 
      className="absolute inset-0 z-0"
        camera={{ 
          position: cameraPosition.toArray(), 
          fov: 45, 
          near: 0.1,
          far: 1000,
          ref: cameraRef 
        }} 
        shadows
      >
        <Stars 
          radius={100} 
          depth={50} 
          count={isMobile?3000 :isTablet?4000:5000} 
          factor={4} 
          saturation={0} 
          fade 
        />

        <ambientLight intensity={1.5} />

        <Billboard position={hyderabadCoords}>
          <Text
            fontSize={textSize}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={isMobile?1.0 :isTablet? 1.3 :1.5}
            lineHeight={1.2}
            outlineWidth={0.01}
            outlineColor="#000000"
            outlineOpacity={1}
          >
          {
            isMobile ? '\t\t\tराष्ट्रीय भूभौतिकीय अनुसंधान संस्थान\nNational Geophysical Research Institute':"\t\t\tराष्ट्रीय भूभौतिकीय अनुसंधान संस्थान\nNational Geophysical Research Institute"}
          </Text>
        </Billboard>

        <OrbitControls 
          ref={controlsRef}
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
          minDistance={isMobile ? 3:2}
          maxDistance={isMobile ? 6:5}
        />

        <EarthRealistic 
          speedMultiplier={speedMultiplier} 
          onTimeUpdate={handleTimeUpdate}
        />
      </Canvas>

      <div className="absolute bottom-2 sm:bottom-4 md:bottom-[30px] left-0 right-0 flex justify-center z-20">
        <button
          onClick={handleScrollDown}
          className="text-white p-2
           rounded-full sm:p-3 md:p-4 hover:bg-white hover:text-black transition-colors"
        >
          <MdOutlineKeyboardDoubleArrowDown size={isMobile ? 24 : isTablet ? 28:32} />
        </button>
      </div>
    </div>
  );
}