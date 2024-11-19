import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Projects from "./Projects";
import { useEffect } from "react";

const WebProjects = () => {
  useEffect(() => {
    document.title = "Sara Woods | Web Projects";
  }, []);
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);
  return (
    <>
      <Navbar />
      <Projects />
      <Contact backgroundColor="#F4EFEC" />
      <Footer backgroundColor="#F4EFEC" />
    </>
  );
};

export default WebProjects;
