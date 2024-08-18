import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Chiefs from "./components/Chiefs";
// import HeroSection from "./components/HeroSection";
// import ImproveSkill from "./components/ImproveSkill";
import { Navbar } from "./components/Navbar";
// import Quote from "./components/Quote";
import Footer from "./components/Footer";


// pages
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";


function App() {

  return (
    <Router>

      <Navbar />

      <div className="container main">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
