import React from "react";
import Hero from '../hero';
import MultipleProgressBars from '../Progress'
import { Container, Row, Col, Card, ProgressBar, Button, Footer, Nav, Image } from 'react-bootstrap';
import monImage from '../john-doe-about.jpg'



const Home = () => {
    return (
        <div className="App">
                <Hero />           

                <Container className="custom-shadow custom-marg-pad">
                <Row className="mt-5">
                    <Col md={6}>
                    <div>
                        <h2 class="border-bottom border-4 border-primary">A propos</h2>
                        <Image src={monImage}  alt="Photo de John Doe, concentré au bureau en chemise grise" fluid class="pad-img-home"></Image>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        In ornare neque in metus scelerisque eleifend. Nunc sit amet dapibus ligula. 
                        Suspendisse condimentum quis purus id ullamcorper. Morbi laoreet eget orci non facilisis.
                        </p>
                        <p>
                        Phasellus ullamcorper nisl vel mattis venenatis. Praesent ullamcorper ipsum at nunc placerat, quis facilisis velit finibus. Curabitur suscipit eu risus ut efficitur. 
                        Maecenas vitae nisi lorem. Nulla mi augue, ullamcorper sed ultricies nec, sodales et massa. Fusce elit leo, commodo ut velit a, tincidunt convallis augue. 
                        </p>
                        <p>
                        Pellentesque semper commodo placerat. Fusce luctus finibus sem, ac viverra quam sodales vel.
                        </p>
                    </div>
                    </Col>
                    <Col md={6}>
                    <div> 
                        <h2 class="border-bottom border-4 border-primary">Mes compétences</h2>
                        <MultipleProgressBars></MultipleProgressBars>
                    </div>
                    </Col>
                    </Row>
                    </Container>
        </div>
    )
}

export default Home;