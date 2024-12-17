import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./portfolio.css"

import Baner from '../component/Baner'

import freshFoodImage from '../pictures/portfolio/fresh-food.jpg'
import restaurantAkiraImage from '../pictures/portfolio/restaurant-japonais.jpg'
import especeBienEtreImage from '../pictures/portfolio/espace-bien-etre.jpg'
import seoImage from '../pictures/portfolio/seo.jpg'
import creationApiImage from '../pictures/portfolio/coder.jpg'
import maquettesitewebImage from '../pictures/portfolio/screens.jpg'

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      image: freshFoodImage,
      alt:"",
      tools: "Site réalisé avec PHP et MySQL",
      link: "#"
    },
    {
      title: "Restaurant Akira",
      description: "Site de vente de produits frais en ligne",
      image: restaurantAkiraImage,
      alt:"",
      tools: "Site réalisé avec Wordpress",
      link: "#"
    },
    {
      title: "Espace bien-être",
      description: "Site de vente de produits frais en ligne",
      image: especeBienEtreImage,
      alt:"",
      tools: "Site réalisé avec LARAVEL",
      link: "#"
    },
    {
      title: "SEO",
      description: "Amélioration du référencement d'un site d'e-commerce",
      image: seoImage,
      alt:"",
      tools: "Utilisation des outils SEO",
      link: "#"
    },
    {
      title: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
      image: creationApiImage,
      alt:"",
      tools: "PHP - SYMFONY",
      link: "#"
    },
    {
      title: "Maquette d'un site web",
      description: "Création du prototype d'un site",
      image: maquettesitewebImage,
      alt:"",
      tools: "Réalisé avec FIGMA",
      link: "#"
    }
  ];

  return (
    <div>
      <Baner></Baner>
      <section id="portfolio" className="py-5">
        <Container>
          <h1 className="text-center mb-4">Portfolio</h1>
          <p className="text-center mb-5 border-primary">Voici quelques-unes de mes réalisations.</p>
          <hr className="custom-hr"/>
          <Row>
            {portfolioItems.map((item, index) => (
              <Col lg={4} md={4} sm={12} className="mb-4" key={index}>
                <Card className="h-100">
                  <Card.Img variant="top" src={item.image} alt={item.alt} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-center">{item.title}</Card.Title>
                    <Card.Text className="text-center">{item.description}</Card.Text>
                    <Button class="btn btn-primary" href={item.link} className="mt-auto no-margin">Voir le site</Button>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <small className="text-muted">{item.tools}</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Portfolio;