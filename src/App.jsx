import HeroSection from "./components/HeroSection"
import ImproveSkill from "./components/ImproveSkill"
import { Navbar } from "./components/Navbar"
import Quote from "./components/Quote"


function App() {

  return (
    <div className="App">
      
      <Navbar />

      <div className="container main">
        <HeroSection />
        <ImproveSkill />
        <Quote />
      </div>
    </div>
  )
}

export default App
