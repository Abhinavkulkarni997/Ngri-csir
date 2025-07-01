import './App.css'
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import Navbar1 from './components/Navbar/Navbar1';
import Footer1 from './components/Footer/Footer1.jsx';
function App() {
  return (
    <>
      <div className="pt-0 w-full min-h-screen">
      {/* <Navbar/> */}
      <Navbar1/>
      <Hero/>
      <Footer/>
      {/* <Footer1/> */}
      </div>
      
    </>
  )
}

export default App
