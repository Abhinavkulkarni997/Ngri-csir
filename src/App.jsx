import './App.css'
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import Navbar1 from './components/Navbar/Navbar1';
import Footer1 from './components/Footer/Footer1.jsx';
import ProfileCard from './components/ProfileCards/ProfileCard.jsx';
import ResearchDevelopment from './components/ResearchandDevelopment/ResearchandDevelopment.jsx';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col w-full overflow-hidden">
      {/* <Navbar/> */}
      <Navbar1/>
      <main className='flex-grow'>

      <Hero/>
      <ResearchDevelopment/>

      <ProfileCard/>
      </main>
      
      <Footer/>
      {/* <Footer1/> */}
      </div>
      
    </>
  )
}

export default App
