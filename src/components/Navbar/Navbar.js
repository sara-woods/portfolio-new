import React, { useRef, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import logo from "../../images/logo2.png";
import ProjectContext from "../../store/project-context";

const Navbar = () => {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);
  const navRef = useRef();
  const ctx = useContext(ProjectContext);

  const navLinks = {
    webDev: "UI/UX/Code",
    illustrations: "Illustrations",
    graphicDesign: "About",
    contact: "Contact",
  }

  const toggleResponsiveNavbar = () => {
    setShowResponsiveNavbar(prev => !prev);
  }

  const handleNavLinkClick = (event) => {
    if (event.currentTarget.hasAttribute("data-page")) {
      ctx.handlePageChange(event);
    }
    hideResponsiveNavbar();
  }

  const hideResponsiveNavbar = () => {
    setShowResponsiveNavbar(false);
  }

  return (
    <header>
      <a href="#top" tabIndex="0"><img className="navbar-logo" src={logo} alt="logo sara woods" /></a>
      {/* <p id="name">SARA WOODS</p> */}
      <nav ref={navRef} className={`${showResponsiveNavbar ? "responsive-nav" : ""}`}>
        <a href="#projects" data-page="1" onClick={handleNavLinkClick}>{navLinks.webDev}</a>
        <a href="#projects" data-page="2" onClick={handleNavLinkClick}>{navLinks.illustrations}</a>
        <a href="#projects" data-page="3" onClick={handleNavLinkClick}>{navLinks.graphicDesign}</a>
        <a href="#contact" onClick={handleNavLinkClick}>{navLinks.contact}</a>
        <button className="nav-btn nav-close-btn" onClick={toggleResponsiveNavbar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleResponsiveNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );

}

export default Navbar;
