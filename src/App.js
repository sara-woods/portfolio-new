import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./App.css";
import NavbarEx from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "sv") {
      document.documentElement.lang = "sv";
    } else {
      document.documentElement.lang = "en";
    }
  }, [i18n.language]);

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
