import "./Navbar.css";

import { Navbar, Nav } from "react-bootstrap";

// import duck from "../../images/duck_g.gif";
import logo from "../../images/logo.png";

const NavbarEx = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar">
      <Navbar.Brand className="navbar-brand" href="#top">
        {/* 👀 */}
        {/* <img src={duck} style={{ width: "76px" }} alt="Duck gif" /> */}
        <img src={logo} style={{ width: "80px" }} alt="logo sara lotfi" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="navbar-link" href="#top">
            {props.navLinks.about}
          </Nav.Link>
          <Nav.Link className="navbar-link" href="#projects-anchor">
            {props.navLinks.projects}
          </Nav.Link>
          <Nav.Link className="navbar-link" href="#contact">
            {props.navLinks.contact}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarEx;
