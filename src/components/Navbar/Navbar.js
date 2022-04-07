import { Navbar, Nav } from "react-bootstrap";
import { useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../../images/logo2.png";
import { useTranslation } from "react-i18next";

const NavbarEx = () => {
  const { t, i18n } = useTranslation();
  const langCheckbox = useRef();

  useEffect(() => {
    if (i18n.language.startsWith("en")) {
      langCheckbox.current.checked = false;
    } else {
      langCheckbox.current.checked = true;
    }
  }, [i18n]);

  const handleLangChange = (event) => {
    if (langCheckbox.current.checked) {
      i18n.changeLanguage("sv");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar">
      <Navbar.Brand className="navbar-brand" href="#top">
        <img src={logo} style={{ width: "80px" }} alt="logo sara lotfi" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="navbar-link" href="#top">
            {t("navLinks.about")}
          </Nav.Link>
          <Nav.Link className="navbar-link" href="#projects">
            {t("navLinks.projects")}
          </Nav.Link>
          <Nav.Link className="navbar-link" href="#contact">
            {t("navLinks.contact")}
          </Nav.Link>
          <div className="lang-switch d-flex align-items-center justify-content-center">
            <p className="text-700">English</p>
            <label className="switch ml-2 mr-2">
              <input
                ref={langCheckbox}
                type="checkbox"
                onChange={handleLangChange}
              />
              <span className="slider round"></span>
            </label>
            <p className="text-700">Swedish</p>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarEx;
