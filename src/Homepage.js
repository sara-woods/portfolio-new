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

const Homepage = () => {
  useEffect(() => {
    document.title =
      "Sara Woods | Illustrator, graphic designer and web developer";
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
        <Contact backgroundColor="#F4EFEC" />
        <Footer backgroundColor="#F4EFEC" />
      </div>
    </ProjectContextProvider>
  );
};

export default Homepage;
