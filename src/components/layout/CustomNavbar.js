import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class CustomNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Agromate - Sri Lanka</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">Latest News</Nav.Link>
            <Nav.Link href="#pricing">Annual Reports</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
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
