import { useEffect } from "react";

import "./Homepage.css";
import Intro from "./components/Intro/Intro";
import IllustrationAnimation from "./components/Animation/IllustrationAnimation";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ProjectContextProvider } from "./store/project-context";
import ScrollToHashElement from "./ScrollToHashElement";
import Projects from "./components/Projects/Projects";

const Homepage = () => {
  useEffect(() => {
    document.title =
      "Sara Woods | UX/UI designer, illustrator and front-end developer";
  }, []);

  useEffect(() => {
    // ping Render url
    fetch("https://what-movie.onrender.com/", { mode: "no-cors" })
      .then((response) => {
        //
      })
      .catch((error) => {
        //
      });
  }, []);

  return (
    <ProjectContextProvider>
      <ScrollToHashElement />
      <Navbar />
      <div className="app" id="top">
        <Intro />
        <IllustrationAnimation />
        <About />
        <Projects />
        <Contact backgroundColor="#F2F2F2" />
        <Footer backgroundColor="#F2F2F2" />
      </div>
    </ProjectContextProvider>
  );
};

export default Homepage;
