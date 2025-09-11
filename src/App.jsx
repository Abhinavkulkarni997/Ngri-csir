import React,{Suspense, suspense} from 'react';
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
import ImageGalleryv1 from './components/carousel/ImageGalleryv1.jsx';
import Brochures from './components/Brochures/Brochures.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar.jsx';
import SocialIconsFixed from './components/SocialIcons/SocialIconsFixed.jsx';
import Globe from './components/Hero/Globe.jsx';
import Globev2 from './components/Hero/Globev2.jsx';
 import NgriGallery from './components/NGRIGallery/NgriGallery.jsx';
import ResearchandDevelopmentv1 from './components/ResearchandDevelopment/ResearchandDevelopmentv1.jsx';
import ResearchandDevelopmentv2 from './components/ResearchandDevelopment/ResearchandDevelopmentv2.jsx';
import ResearchandDevelopmentv3 from './components/ResearchandDevelopment/ResearchandDevelopmentv3.jsx';
import ResearchandDevelopmentv4 from './components/ResearchandDevelopment/ResearchandDevelopmentv4.jsx';
import Loading from './components/LazyLoading/LazyLoading.jsx';


// const NgriGalleryLazy = React.lazy(() => import('./components/NGRIGallery/NgriGallery'));
// const ImageGalleryLazy=React.lazy(()=>import('./components/carousel/ImageGalleryv1.jsx'));
// const ResearchroundUpLazy=React.lazy(()=>import('./components/ResearchRoundup/ResearchroundUp.jsx'));
// const ResearchandDevelopmentv3Lazy=React.lazy(()=>import('./components/ResearchandDevelopment/ResearchandDevelopmentv3.jsx'));
// const ResearchandDevelopmentv4Lazy=React.lazy(()=>import('./components/ResearchandDevelopment/ResearchandDevelopmentv4.jsx'));
// const ProfileCardLazy=React.lazy(()=>import('./components/ProfileCards/ProfileCard.jsx'));
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
      {/* <Globe/> */}
      <Globev2/>
      {/* <ImageGallery/> */}
      {/* <Suspense fallback={<Loading/>}>
      <ImageGalleryLazy/>
      </Suspense> */}
      <ImageGalleryv1/>
      {/* <Suspense fallback={<Loading/>}>
        <ResearchroundUpLazy/>
      </Suspense> */}
      <ResearchroundUp/>
      {/* <ResearchDevelopment/> */}
      {/* <ResearchandDevelopmentv1/> */}
      {/* <ResearchandDevelopmentv2/> */}
      {/* <Suspense fallback={<Loading/>}>
          <ResearchandDevelopmentv4Lazy/>
      <ResearchandDevelopmentv3Lazy/>
      </Suspense> */}
      <ResearchandDevelopmentv4/>
      <ResearchandDevelopmentv3/>
  {/* <Suspense fallback={<Loading/>}>
    <ProfileCardLazy/>
  </Suspense> */}
     <ProfileCard/>
      <div className='flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12'>
           <LatestNotifications/>
           <ResearchNewsCard/>
           <EnewsLetter/>
      </div>
      {/* <Suspense fallback={<Loading/>}>
      <NgriGalleryLazy/>
      </Suspense> */}
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

export default App;
