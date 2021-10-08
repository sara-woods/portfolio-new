import { useEffect } from "react";
import "./App.css";
import NavbarEx from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import whatmovieImage from "./images/whatmovie_small.png";
import wellsyImage from "./images/wellsy_new.png";
import floatifyImage from "./images/floatify_small.png";
import catsweeperImage from "./images/catsweeper_new.png";
import packathonImage from "./images/packathon.png";

import { ProjectData } from "./ProjectData";

const url_1 = ProjectData[1]["web"];
const url_2 = ProjectData[2]["web"];
const url_3 = ProjectData[3]["web"];
const url_4 = ProjectData[4]["web"];

const App = () => {
  useEffect(() => {
    const ping = (url) => {
      fetch(url, { mode: "no-cors" })
        .then((response) => {
          //
        })
        .catch((error) => {
          //
        });
    };

    ping(url_1);
    ping(url_2);
    ping(url_3);
    ping(url_4);
  }, []);

  return (
    <>
      <NavbarEx />
      <div className="app">
        <Intro />
        <Projects
          projectData={ProjectData}
          projectImages={{
            whatmovieImage,
            wellsyImage,
            floatifyImage,
            catsweeperImage,
            packathonImage,
          }}
        />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
