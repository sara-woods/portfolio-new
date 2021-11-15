import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { useTranslation } from "react-i18next";

const NavbarEx = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const langCheckbox = useRef();

  useEffect(() => {
    if (i18n.language === "sv") {
      langCheckbox.current.checked = true;
    } else {
      langCheckbox.current.checked = false;
    }
  }, [i18n]);

  const handleLangChange = (event) => {
    if (langCheckbox.current.checked) {
      i18n.changeLanguage("sv");
      navigate("/sv");
    } else {
      i18n.changeLanguage("en");
      navigate("/en");
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="navbar d-flex justify-content-between"
    >
      <Navbar.Brand className="navbar-brand" href="#top">
        <img src={logo} style={{ width: "80px" }} alt="logo sara lotfi" />
      </Navbar.Brand>
      <div className="d-flex">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="navbar-link" href="#top">
              {t("navLinks.about")}
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#projects-anchor">
              {t("navLinks.projects")}
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#contact-anchor">
              {t("navLinks.contact")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="lang-switch d-flex align-items-center">
          <p className="text-700">EN</p>
          <label className="switch ml-2 mr-2">
            <input
              ref={langCheckbox}
              type="checkbox"
              onChange={handleLangChange}
            />
            <span className="slider round"></span>
          </label>
          <p className="text-700">SV</p>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarEx;
