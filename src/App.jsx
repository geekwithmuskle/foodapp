import Chiefs from "./components/Chiefs";
import HeroSection from "./components/HeroSection";
import ImproveSkill from "./components/ImproveSkill";
import { Navbar } from "./components/Navbar";
import Quote from "./components/Quote";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="App">
      
      <Navbar />

      <div className="container main">
        <HeroSection />
        <ImproveSkill />
        <Quote />
        <Chiefs />
      </div>
      <Footer />
    </div>
  )
}

export default App
