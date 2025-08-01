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
import SocialIconsFixed from './components/SocialIcons/SocialIconsFixed.jsx';
import Globe from './components/Hero/Globe.jsx';
import NgriGallery from './components/NGRIGallery/NgriGallery.jsx';
function App() {
  return (
    <>
   
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      {/* <Navbar/> */}
      <Navbar1/>
    <ScrollProgressBar/>
      <SocialIconsFixed/>

      <main className='flex-grow'>

      {/* <Hero/> */}
      <Globe/>
      

        
     <ImageGallery/>
      <ResearchroundUp/>
      <ResearchDevelopment/>

     <ProfileCard/>
     


      <div className='flex flex-row items-center justify-center gap-4 px-4 sm:px-6 md:px-10 lg:px-20 mt-10'>
         <LatestNotifications/>
          <ResearchNewsCard/>
     
          <EnewsLetter/>
      </div>

      <NgriGallery/>      
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