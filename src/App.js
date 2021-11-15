import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./App.css";
import NavbarEx from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { en } from "./translations/en";

const projectData = en.translation.projectData;

const AppComponent = () => {
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

const App = () => {
  const { i18n } = useTranslation();
  document.documentElement.lang = i18n.language;

  // const baseUrl = i18n.language === "en" ? "" : "/" + i18n.language;
  // const baseUrl = "/" + i18n.language;
  // const baseRouteUrl = "/:locale(sv|en)?";
  // console.log(baseRouteUrl);

  useEffect(() => {
    const urls = [
      projectData.whatmovie.web,
      projectData.wellsy.web,
      projectData.packathon.web,
      projectData.catsweeper.web,
      projectData.floatify.web,
    ];

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
      <Routes>
        <Route path={"/"} element={<Navigate to={"/" + i18n.language} />} />
        <Route path={"/" + i18n.language} exact element={<AppComponent />} />
      </Routes>
    </>
  );
};

export default App;
