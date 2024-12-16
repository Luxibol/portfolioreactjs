import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <Container fluid className="p-0">
      <Row noGutters className="hero-section">
        <Col>
          <div className="hero-content text-center">
            <h1 className="hero-title">Bonjour, je suis John Doe</h1>
            <h2 className="hero-subtitle">Développeur web full stack</h2>
            <Link class="nav-link active" to="/services"><Button variant="btn btn-danger">En savoir plus</Button></Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;



