import Intro from "./components/intro/Intro";
import Contact from "./components/contact/contact"
import TestiMonials from "./components/testimonials/Testimonials"
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import TopBar from "./components/topBar/TopBar";
import "./style/app.scss"
import { useState } from "react";
import Menu from "./components/meno/Menu";


function App() {

  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections"> 
        <Intro/>
        <Portfolio/>
        <Works/>
        <TestiMonials/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
