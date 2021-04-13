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
          AGROMATE - SRI LANKA
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/annual-reports">ANNUAL REPORTS</Nav.Link>
            <Nav.Link href="/latest-news">LATEST NEWS</Nav.Link>
            <Link to="/register" className="nav-link">
              NEW USER
            </Link>
            <Nav.Link eventKey={2} href="/login">
              LOGIN
            </Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default CustomNavbar;
