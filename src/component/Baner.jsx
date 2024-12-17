import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import banerImage from '../pictures/banner.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';



const Baner = () => {
    return (
    <Container fluid className="p-0">
      <Row className="justify-content-center">
        <Col xs={12}>
          <Image src={banerImage} alt="Bannière" fluid className="w-100" />
        </Col>
      </Row>
    </Container>
    );
  }
  
  export default Baner;