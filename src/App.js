import Intro from "./components/intro/Intro";
import Contact from "./components/contact/contact"
import Certificate from "./components/certificate/Certificate"
import Works from "./components/works/Works";
import Skills from "./components/skills/Skills";
import TopBar from "./components/topBar/TopBar";
import "./style/app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {

  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections"> 
        <Intro/>
        <Skills/>
        <Works/>
        <Certificate/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
