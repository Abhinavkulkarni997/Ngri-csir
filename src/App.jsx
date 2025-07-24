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
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar.jsx';


function App() {
  return (
    <>
   
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      {/* <Navbar/> */}
      <Navbar1/>
    <ScrollProgressBar/>

      <main className='flex-grow'>

      <Hero/>
      

        
     <ImageGallery/>
      <ResearchroundUp/>
      <ResearchDevelopment/>

     <ProfileCard/>
     


      <div className='flex space-x-4 justify-center mx-auto bg-[#550000] '>
        
          <ResearchNewsCard/>
     
          <EnewsLetter/>
      </div>
       <LatestNotifications/>
      <SocialMedia/>
       
      <Brochures/>

      </main>
         
      <Footer/>
      <ScrollToTop/>
      {/* <Footer1/> */}
      </div>
      
    </>
  )
}

export default App