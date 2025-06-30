import './App.css'
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import Navbar1 from './components/Navbar/Navbar1';
function App() {
  return (
    <>
      <div className="pt-0 w-full min-h-screen">
      {/* <Navbar/> */}
      <Navbar1/>
      <Hero/>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
