import './App.css';
import NavbarEx from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import whatmovieImage from "./images/whatmovie_small.png"
import wellsyImage from "./images/wellsy_small.png"
import floatifyImage from "./images/floatify_small.png"
import catsweeperImage from "./images/catsweeper_small.png"
import packathonImage from "./images/packathon_small.png"

import { ProjectData } from "./ProjectData";

const App = () => {
  return (
    <>
      <div className="app">
        <NavbarEx />
        <Intro />
        <Projects projectData={ProjectData} projectImages={{whatmovieImage, wellsyImage, floatifyImage, catsweeperImage, packathonImage}} />
        <Contact/>
        <Footer />
      </div>
    </>
  );
}

export default App;
