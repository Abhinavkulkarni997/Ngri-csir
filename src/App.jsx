import './App.css'
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar'
import Navbar1 from './components/Navbar/Navbar1';
function App() {
  return (
    <>
      <div className="pt-0 w-full min-h-screen">
      {/* <Navbar/> */}
      <Navbar1/>
      <Banner/>
      </div>
      
    </>
  )
}

export default App
