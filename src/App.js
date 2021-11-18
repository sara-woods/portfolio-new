import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./App.css";
import NavbarEx from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { en } from "./translations/en";

const projectData = en.translation.projectData;

const App = () => {
  const { i18n } = useTranslation();
  document.documentElement.lang = i18n.language;

  useEffect(() => {
    const urls = [];

    for (const property in projectData) {
      urls.push(projectData[property].web);
    }

    // ping heroku urls
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
      <NavbarEx />
      <div className="app">
        <Intro />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
