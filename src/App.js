import { useEffect } from "react";

import "./App.css";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ProjectContextProvider } from "./store/project-context";

const App = () => {
  useEffect(() => {
    document.title = "Sara Woods | UX/UI designer, front-end developer and illustrator";
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
      <Navbar />
      <div className="app">
        <Intro />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ProjectContextProvider>
  );
};

export default App;
