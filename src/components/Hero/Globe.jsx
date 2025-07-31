// // src/components/Globe.jsx
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



import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef} from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import earthDay from "../../assets/textures/earth_day.jpg";
import earthNight from "../../assets/textures/earth_night.jpg";
import earthClouds from "../../assets/textures/earth_clouds.png";


function handleScrollDown(){
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
    });
}

function getSunPosition() {
  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysSinceJ2000 = (now - new Date(Date.UTC(2000, 0, 1, 12))) / msPerDay;

  const L = (280.460 + 0.9856474 * daysSinceJ2000) % 360;
  const g = (357.528 + 0.9856003 * daysSinceJ2000) % 360;
  const lambda = L + 1.915 * Math.sin((g * Math.PI) / 180) +
    0.020 * Math.sin((2 * g * Math.PI) / 180);

  const x = Math.cos((lambda * Math.PI) / 180);
  const z = Math.sin((lambda * Math.PI) / 180);
  return [x * 10, 0, z * 10];
}

const EarthRealistic = () => {
  const earthRef = useRef();
  const cloudRef = useRef();
  const sunRef = useRef();

  const dayMap = useLoader(THREE.TextureLoader, earthDay);
  const nightMap=useLoader(THREE.TextureLoader,earthNight);
  const cloudMap = useLoader(THREE.TextureLoader, earthClouds);

//   useFrame(() => {
//     const now = new Date();
//     const utcHours = now.getUTCHours();
//     const rotation = (utcHours / 24) * Math.PI * 2;

//     // Offset so India (approx 82°E or UTC+5.5) is centered
//     const indiaOffset = (5.5 / 24) * Math.PI * 2;

//     if (earthRef.current) {
//       earthRef.current.rotation.y = rotation + indiaOffset;
//     }

//     if (cloudRef.current) {
//       cloudRef.current.rotation.y = rotation + indiaOffset;
//     }

//     if (sunRef.current) {
//       const sunDir = getSunPosition();
//       sunRef.current.position.set(...sunDir);
//     }
//   });
  
useFrame(({ clock }) => {
  const elapsed = clock.getElapsedTime(); // Smooth rotation time

  const rotationSpeed = 0.03; // Adjust speed here
  const indiaOffset = (5.5 / 24) * Math.PI * 2; // To initially center India

  if (earthRef.current) {
    earthRef.current.rotation.y = elapsed * rotationSpeed + indiaOffset;
  }

  if (cloudRef.current) {
    cloudRef.current.rotation.y = elapsed * rotationSpeed + indiaOffset * 1.01;
  }

  if (sunRef.current) {
    const sunDir = getSunPosition(); // Real-world UTC-based sunlight
    sunRef.current.position.set(...sunDir);
  }
});



  return (
    <>
      {/* Earth Sphere */}
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial map={dayMap} 
        emissiveMap={nightMap}
        emissive={new THREE.Color(0xffffff)}
        emissiveIntensity={1.2}
        shininess={5}
        />
      </mesh>

      {/* Cloud Layer */}
      <mesh ref={cloudRef} castShadow receiveShadow>
        <sphereGeometry args={[1.01, 24, 24]} />
        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Subtle Atmosphere */}
      <mesh>
        <sphereGeometry args={[1.08, 24, 24]} />
        <meshBasicMaterial color="#3a9bdc" transparent opacity={0.06} />
      </mesh>

      {/* Real-Time Sunlight */}
      <directionalLight
        ref={sunRef}
        intensity={5}
        // position={[10, 0, 0]}
        color="#ffffff"
        castShadow
      />
       
       
          
    </>
  );
};

export default function GlobeRealistic() {
  return (
    <div className="w-full h-screen bg-black relative">
      <Canvas camera={{ position: [3, 1, 2], fov: 45 }} shadows>
        <ambientLight intensity={0.05} />
        <Stars radius={100} depth={60} count={1500} fade />
        {/* <OrbitControls  enableZoom enablePan enableRotate /> */}
        <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} />
        <EarthRealistic />
        
      </Canvas>

      <div className="absolute bottom-4 sm:bottom-[30px] left-0 right-0 flex justify-center z-20">
              <button
                onClick={handleScrollDown}
                className="text-white p-4 rounded-full  hover:bg-white hover:text-black transition-colors"
              >
                <MdOutlineKeyboardDoubleArrowDown size={32} />
              </button>
            </div>
    </div>
  );
}