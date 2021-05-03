import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class CustomNavbar extends Component {
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
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default CustomNavbar;
