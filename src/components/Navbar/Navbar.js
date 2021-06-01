// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-light sticky-top">
//       <a className="navbar-brand" href="#">👀</a>

//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Projects</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;

import './Navbar.css';


import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavbarEx = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar">
      <Navbar.Brand className="navbar-brand" href="#home">👀</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="navbar-link" href="#deets">About</Nav.Link>
          <Nav.Link className="navbar-link" href="#features">Projects</Nav.Link>
          <Nav.Link className="navbar-link" href="#features">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarEx;