import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand class="nav-link active" to="/">John Doe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link class="nav-link active" to="/">Home</Link>
            <Link class="nav-link active" to="/services">Services</Link>
            <Link class="nav-link active" to="/portfolio">Portfolio</Link>
            <Link class="nav-link active" to="/contact">Contact</Link>
            <Link class="nav-link active" to="/ln">Mentions légales</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
