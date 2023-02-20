import React, { useRef, useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import logo from "../../images/logo2.png";
import ProjectContext from "../../store/project-context";
  
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isChecked, setIsChecked] = useState("");
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);
  const navRef = useRef();
  const ctx = useContext(ProjectContext);

  useEffect(() => {
    if (i18n.language === "sv") {
      setIsChecked("checked");
    } else {
      setIsChecked("");
    }
  }, [i18n]);

  const toggleResponsiveNavbar = () => {
    setShowResponsiveNavbar(prev => !prev);
  }

  const handleNavLinkClick = (event) => {
    if (event.currentTarget.hasAttribute("data-page")) {
      ctx.handlePageChange(event);
    }
    hideResponsiveNavbar();
  }

  const handleLangChange = (event) => {
    if (event.currentTarget.checked) {
      setIsChecked("checked");
      i18n.changeLanguage("sv");
    } else {
      setIsChecked("");
      i18n.changeLanguage("en");
    }
    setTimeout(hideResponsiveNavbar, 500);
  };

  const hideResponsiveNavbar = () => {
    setShowResponsiveNavbar(false);
  }

  return (
    <header>
      <a href="#top" tabIndex="0"><img className="navbar-logo" src={logo} alt="logo sara woods" /></a>
      <nav ref={navRef} className={`${showResponsiveNavbar ? "responsive-nav" : ""}`}>
        <a href="#projects" data-page="1" onClick={handleNavLinkClick}>{t("filterOptions.webDev")}</a>
        <a href="#projects" data-page="2" onClick={handleNavLinkClick}>{t("filterOptions.illustrations")}</a>
        <a href="#projects" data-page="3" onClick={handleNavLinkClick}>{t("filterOptions.graphicDesign")}</a>
        <a href="#contact" onClick={handleNavLinkClick}>Contact</a>
        <div className="lang-switch-container">
          <p className="text-700">EN</p>
          <label className="lang-switch ml-2 mr-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleLangChange}
              />
            <span className="slider round"></span>
          </label>
          <p className="text-700">SV</p>
        </div>
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