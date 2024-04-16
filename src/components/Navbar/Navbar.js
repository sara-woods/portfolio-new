import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import logo from "../../images/logo2.png";
// import ProjectContext from "../../store/project-context";

const Navbar = () => {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);
  const navRef = useRef();
  // const ctx = useContext(ProjectContext);

  const navLinks = {
    webDev: "Projects",
    illustration: "Illustration",
    about: "About",
    contact: "Contact",
  };

  const toggleResponsiveNavbar = () => {
    setShowResponsiveNavbar((prev) => !prev);
  };

  const handleNavLinkClick = (event) => {
    // ctx.handlePageChange(event);
    hideResponsiveNavbar();
  };

  const hideResponsiveNavbar = () => {
    setShowResponsiveNavbar(false);
  };

  return (
    <header>
      <Link to="/#top">
        <img
          tabIndex="0"
          className="navbar-logo"
          src={logo}
          alt="logo sara woods"
        />
      </Link>
      <nav
        ref={navRef}
        className={`${showResponsiveNavbar ? "responsive-nav" : ""}`}
      >
        <Link to="/#scroll-projects" onClick={handleNavLinkClick}>
          {navLinks.webDev}
        </Link>
        <Link to="/illustration" onClick={handleNavLinkClick}>
          {navLinks.illustration}
        </Link>
        <Link to="/#scroll-about" onClick={handleNavLinkClick}>
          {navLinks.about}
        </Link>
        <Link to="/#scroll-contact" onClick={handleNavLinkClick}>
          {navLinks.contact}
        </Link>
        <button
          className="nav-btn nav-close-btn"
          onClick={toggleResponsiveNavbar}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleResponsiveNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Navbar;
