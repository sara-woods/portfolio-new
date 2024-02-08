import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
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
    webDev: "Projects",
    illustrations: "Illustration",
    about: "About",
    contact: "Contact",
  };

  const toggleResponsiveNavbar = () => {
    setShowResponsiveNavbar((prev) => !prev);
  };

  const handleNavLinkClick = (event) => {
    if (event.currentTarget.hasAttribute("data-page")) {
      ctx.handlePageChange(event);
    }
    hideResponsiveNavbar();
  };

  const hideResponsiveNavbar = () => {
    setShowResponsiveNavbar(false);
  };

  return (
    <header>
      <Link to="/">
        <img
          tabIndex="0"
          className="navbar-logo"
          src={logo}
          alt="logo sara woods"
        />
      </Link>
      {/* <p id="name">SARA WOODS</p> */}
      <nav
        ref={navRef}
        className={`${showResponsiveNavbar ? "responsive-nav" : ""}`}
      >
        <a href="#scroll-projects" data-page="1">
          {navLinks.webDev}
        </a>
        <Link to="illustrations" data-page="2">
          {navLinks.illustrations}
        </Link>
        <a href="#scroll-about" data-page="3">
          {navLinks.about}
        </a>
        <a href="#scroll-contact" onClick={handleNavLinkClick}>
          {navLinks.contact}
        </a>
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
