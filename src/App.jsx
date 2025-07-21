import './App.css'
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import Navbar1 from './components/Navbar/Navbar1';
import Footer1 from './components/Footer/Footer1.jsx';
import ProfileCard from './components/ProfileCards/ProfileCard.jsx';
import ResearchDevelopment from './components/ResearchandDevelopment/ResearchandDevelopment.jsx';
import ResearchroundUp from './components/ResearchRoundup/ResearchroundUp.jsx';
import SocialMedia from './components/SocialMediaEngagement/SocialMedia.jsx';
import LatestNotifications from './components/Latestnotifications/LatestNotifications.jsx';
import EnewsLetter from './components/EnewsLetter/EnewsLetter.jsx';
import ResearchNewsCard from './components/ResearchNewsCard/ResearchNewsCard.jsx';
import ImageGallery from './components/carousel/ImageGallery.jsx';
import Brochures from './components/Brochures/Brochures.jsx';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      {/* <Navbar/> */}
      <Navbar1/>
      <main className='flex-grow'>

      <Hero/>
      
         <LatestNotifications/>


      <div className='flex space-x-4 justify-center mx-auto '>
        
          <ResearchNewsCard/>
     
          <EnewsLetter/>
      </div>
     <ImageGallery/>
      <ResearchroundUp/>
      <ResearchDevelopment/>

     <ProfileCard/>
      <SocialMedia/>
       
      <Brochures/>
      </main>
      
      <Footer/>
      {/* <Footer1/> */}
      </div>
      
    </>
  )
}

export default App