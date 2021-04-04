import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class CustomNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">
          Agromate - Sri Lanka
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">Latest News</Nav.Link>
            <Nav.Link href="#pricing">Annual Reports</Nav.Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default CustomNavbar;
