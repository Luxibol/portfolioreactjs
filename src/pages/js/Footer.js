import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-dark text-light text-lg-start">
            <Container className="py-3 px-0">
                <Row>
                    {/* Première colonne */}
                    <Col xs={12} md={4} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">John Doe</h5>
                        <ul className="list-unstyled">
                            <li>
                                40 rue Laure Diebold
                                69009 Lyon, France
                            </li>
                            <li>
                                10 20 30 40 50
                            </li>
                            <li>
                               john.doe@gmail.com
                            </li>
                        </ul>
                        <div className="d-flex mt-3"> 
                            {/* Utilisation de Flexbox pour aligner les icônes,
                        j'ai utiliser le lien GitHub sur tout les icones car je n'avais pas les autres comptes
                         */}
                            <a href="https://github.com/github-john-doe" rel="_blank" className="text-secondary mx-2" id="icone-footer">
                            <FaGithub size={24} />
                            </a>
                            <a href="https://github.com/github-john-doe" rel="_blank" className="text-secondary mx-2" id="icone-footer">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://github.com/github-john-doe" rel="_blank" className="text-secondary mx-2" id="icone-footer">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </Col>

                    {/* Deuxième colonne */}
                    <Col xs={12} md={4} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Liens utiles</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li>
                                <Link class="nav-link active" to="/services">Services</Link>
                            </li>
                            <li>
                                <Link class="nav-link active" to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link class="nav-link active" to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link class="nav-link active" to="/ln">Mentions légales</Link>
                            </li>
                        </ul>
                    </Col>

                    {/* Troisième colonne */}
                    <Col xs={12} md={4} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Mes dernières réalisations</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link class="nav-link active" to="/portfolio">Frech Food</Link>
                            </li>
                            <li>
                                <Link class="nav-link active" to="/portfolio">Restaurant Akira</Link>
                            </li>
                            <li>
                                <Link class="nav-link active" to="/portfolio">Espace bien-être</Link>
                            </li>
                            <li>
                                <Link class="nav-link active" to="/portfolio">SEO</Link>
                            </li>
                            <li>
                                <Link class="nav-link active" to="/portfolio">Création d'une API</Link>
                            </li>
                            <li>
                                <Link class="nav-link active" to="/portfolio">Maquette d'un site</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;