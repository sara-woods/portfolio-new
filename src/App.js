import './App.css';
import NavbarEx from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import React from 'react';

const App = () => {
  return (
    <>
      <div className="app">
        <NavbarEx />
        <Intro />
        <Projects />
        <Contact/>
      </div>
    </>
  );
}

export default App;
