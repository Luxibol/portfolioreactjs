import React from "react";
import { Container, Row, Col, Card, ProgressBar, Button, Footer, Nav, Image } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Baner from '../js/Baner'



const Services = () => {
    return (
        <div>
          <Baner></Baner>
          <section id="services" className="py-5">
            <Container>
             <h2 className="text-center mb-2">Mon offre de services</h2>
             <p className="text-center mb-5 border-primary" id="border-b-serv">Voici les prestations sur lesquelles je peux intervenir</p>
        
             <Row className="justify-content-center">
              <Col md={4} sm={6} className="mb-4">
                <div className="service-box p-4 border rounded text-center">
                  <i className="bi bi-brush text-primary" style={{fontSize: '2em'}}></i>
                  <h3 className="mt-3">UX Design</h3>
                  <p>L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en ayant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
                </div>
          </Col>
          <Col md={4} sm={6} className="mb-4">
            <div className="service-box p-4 border rounded text-center">
              <i className="bi bi-code-slash text-primary" style={{fontSize: '2em'}}></i>
              <h3 className="mt-3">Développement web</h3>
              <p class="marg-services">Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).</p>
            </div>
          </Col>
          <Col md={4} sm={6} className="mb-4">
            <div className="service-box p-4 border rounded text-center">
              <i className="bi bi-search text-primary" style={{fontSize: '2em'}}></i>
              <h3 className="mt-3">Référencement</h3>
              <p>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    </div>
    )
}

export default Services;