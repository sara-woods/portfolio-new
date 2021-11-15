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

import { contentData } from "./contentData";

import { useTranslation } from "react-i18next";

const projectData = contentData.projectData;

const urls = [];
projectData.forEach((url) => urls.push(url["web"]));

const App = () => {
  const { i18n } = useTranslation();
  document.documentElement.lang = i18n.language;

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

    urls.forEach((url) => ping(url));
  }, []);

  return (
    <>
      <NavbarEx navLinks={contentData.navLinks} />
      <div className="app">
        <Intro introData={contentData.intro} />
        <Projects
          projectData={projectData}
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
