import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col, Card, ProgressBar, Button, Footer, Nav, Image } from 'react-bootstrap';


const Ln = () => {

    return (
        <div>
                     <section id="services" className="py-5">
                    <Container>
                             <h1 className="text-center mb-2">Mentions légales</h1>
                    </Container>

        <Container className=" custom-marg-pad">
                    
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Editeur du site</Accordion.Header>
        <Accordion.Body>
        <h2 className="text-uppercase">John Doe</h2>
                        <ul className="list-unstyled">
                            <li>
                            <i class="bi bi-map" style={{ marginRight: '5px' }}></i>
                            40 rue Laure Diebold
                            </li>
                            <li>
                            <i class="bi bi-geo-alt" style={{ marginRight: '5px' }}></i>
                            69009 Lyon, France
                            </li>
                            <li>
                            <i class="bi bi-phone" style={{ marginRight: '5px' }}></i>
                            10 20 30 40 50
                            </li>
                            <li>
                                <i class="bi bi-envelope-at" style={{ marginRight: '5px' }}></i>
                                john.doe@gmail.com
                            </li>
                        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hébergeur</Accordion.Header>
        <Accordion.Body>
          <h2>alwaysdata</h2>
          <p>91 Rue du Faubourg Saint-Honoré,75008 Paris</p>
          <i class="bi bi-globe" style={{ marginRight: '5px' }}></i>
           <a href="https://www.alwaysdata.com/fr/" rel="_blank">www.alwaysata.com</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Crédits</Accordion.Header>
        <Accordion.Body>
          <h2>Crédits</h2>
          <p>Ce site a été réalisé par John Doe, étudiant au Centre Européen de formation</p>
          <p>Les images utilisées sur ce site sont libres de droits et onr été obtenues sur le site Pixabay</p>
          <p> le favicon de ce site a été fournie par John doe erstellt von Freepik - Favticon</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </Container>
    </section> 
        </div>
    )
}

export default Ln;