import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, ProgressBar, Button, Footer, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from '../js/Form'


const Contact = () => {
    const [isActive, setIsActive] = useState(true);

    const classes = useMemo(() => `${!isActive ? 'closed' : ''} card-body px-0`, [isActive]);
  
    return (
        <div>
            <section id="services" className="py-5">
                <Container>
                    <h2 className="text-center mb-2">Contact</h2>
                    <p className="text-center mb-5 border-primary" id="border-b-serv">Pour me contatcter en vue d'un entretien ou d'une future collaboration, merci de remplir ce formulaire de contact.</p>
                    <Container className="custom-shadow custom-marg-pad">
                <Row className="mt-5">
                    <Col md={6}>
                    <div>
                        <h2 class="border-bottom border-4 border-primary">Formulaire de contact</h2>
                    <ContactForm></ContactForm>
                    </div>
                    </Col>
                    <Col md={6}>
                    <div> 
                        <h2 class="border-bottom border-4 border-primary">Mes coordonées</h2>
                        <h5 className="text-uppercase">John Doe</h5>
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
                        <div className='container'>
                            
                                <div className='card map-card'>
                                <div
                                    id='map-container-google-'
                                    className='z-depth-1-half map-container'
                                    style={{ height: '450px' }}
                                >
                                <iframe src='https://maps.google.com/maps?q=40+rue+Laure-Diebold,+69009+Lyon,+France&t=14&ie=UTF8&iwloc=&output=embed'
                                title='map' 
                                width='100%' 
                                height='100%' 
                                >    
                                </iframe>
                                </div>
                                
                                </div>
                                
                        </div>
                    </div>
                    </Col>
                    </Row>
                    </Container>
                </Container>
            </section>
        </div>
    )
}

export default Contact;