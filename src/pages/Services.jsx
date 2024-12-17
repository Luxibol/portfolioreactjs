import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Baner from '../component/Baner'

import "./services.css"

const Services = () => {
  return (
    <div>
      <Baner></Baner>
      <section id="services" className="py-5">
        <Container>
          <h1 className="text-center mb-2 ">Mon offre de services</h1>
          <p className="text-center mb-5 border-primary ">Voici les prestations sur lesquelles je peux intervenir</p>
          <hr className="custom-hr"/>
          <Row className="justify-content-center">
            <Col lg={4} md={4} sm={12} className="mb-4">
              <Card className="h-100">
                <Card.Body className="text-center">
                  <Card.Title>
                    <i className="bi bi-brush text-primary" style={{ fontSize: '2em' }}></i>
                    <h2 className="mt-3">UX Design</h2>
                  </Card.Title>
                  <Card.Text>
                    L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en ayant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={4} sm={12} className="mb-4">
              <Card className="h-100">
                <Card.Body className="text-center">
                  <Card.Title>
                    <i className="bi bi-code-slash text-primary" style={{ fontSize: '2em' }}></i>
                    <h2 className="mt-3">Développement web</h2>
                  </Card.Title>
                  <Card.Text>
                    Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={4} sm={12} className="mb-4">
              <Card className="h-100">
                <Card.Body className="text-center">
                  <Card.Title>
                    <i className="bi bi-search text-primary" style={{ fontSize: '2em' }}></i>
                    <h2 className="mt-3">Référencement</h2>
                  </Card.Title>
                  <Card.Text>
                    Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </Container>
    </section>
  </div>
  )
}

export default Services;