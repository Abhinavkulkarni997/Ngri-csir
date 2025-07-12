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

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      {/* <Navbar/> */}
      <Navbar1/>
      <main className='flex-grow'>

      <Hero/>
      
       <LatestNotifications/>
{/*     
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <LatestNotifications/>
  <ResearchNewsCard />
  <EnewsLetter />
</div> */}

 <section className="bg-gray-50 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
       
          <ResearchNewsCard />
          <EnewsLetter />
        </div>
      </div>
    </section>

      {/* <div className='flex space-x-4 mr-4 max-w-x7l '>
        
          <ResearchNewsCard/>
           <EnewsLetter/>
      </div> */}
     
      <ResearchroundUp/>
      <ResearchDevelopment/>

      <ProfileCard/>
      <SocialMedia/>
      </main>
      
      <Footer/>
      {/* <Footer1/> */}
      </div>
      
    </>
  )
}

export default App
