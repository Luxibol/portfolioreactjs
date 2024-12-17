import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from '../component/Form'
import "./contact.css"

const Contact = () => {
    return (
        <div>
            <section id="services" className="py-5">
                <Container>
                    <h1 className="text-center mb-2">Contact</h1>
                    <p className="text-center mb-5 border-primary">Pour me contatcter en vue d'un entretien ou d'une future collaboration, merci de remplir ce formulaire de contact.</p>
                    <hr className="custom-hr"/>
                    <Container className="custom-shadow custom-marg-pad">
                        <Row className="mt-5">
                            <Col lg={6} md={6} sm={12}>
                                <div>
                                    <h2 class="border-bottom border-4 border-primary">Formulaire de contact</h2>
                                    <ContactForm></ContactForm>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
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
                            
                                        <div className='card map-card' class='no-trasform-card'>
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