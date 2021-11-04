import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../images/logo.png";

const NavbarEx = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar">
      <Navbar.Brand className="navbar-brand" href="#top">
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
          <Nav.Link className="navbar-link" href="#contact-anchor">
            {props.navLinks.contact}
          </Nav.Link>
          {/* <div className="d-flex align-items-center ml-5">
            ENG
            <label className="switch ml-2 mr-2">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            SV
          </div> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarEx;
