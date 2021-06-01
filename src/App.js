import './App.css';
import NavbarEx from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import React from 'react';

import { ProjectData } from "./ProjectData";

const App = () => {
  return (
    <>
      <div className="app">
        <NavbarEx />
        <Intro />
        <Projects projectData={ProjectData} />
        <Contact/>
        <Footer />
        <div className="sidebar-email">
          <div className="line"></div>
          <p className="e-mail">lotfi.sara@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default App;
