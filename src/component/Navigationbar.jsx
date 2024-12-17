import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" >John Doe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link class="nav-link" to="/">Home</Link>
            <Link class="nav-link " to="/services">Services</Link>
            <Link class="nav-link" to="/portfolio">Portfolio</Link>
            <Link class="nav-link" to="/contact">Contact</Link>
            <Link class="nav-link" to="/ln">Mentions légales</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
