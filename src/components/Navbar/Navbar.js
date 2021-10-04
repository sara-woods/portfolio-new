import "./Navbar.css";

import { Navbar, Nav } from "react-bootstrap";

const NavbarEx = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar">
      <Navbar.Brand className="navbar-brand" href="#top">
        👀
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="navbar-link" href="#projects-anchor">
            Projects
          </Nav.Link>
          <Nav.Link className="navbar-link" href="#top">
            About
          </Nav.Link>
          <Nav.Link className="navbar-link" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarEx;
