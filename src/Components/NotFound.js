import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'


const NotFound=()=> {
return (
    <Container>
      <Row>
        <Col xs={20} md={50} >
        <Image src={require('../assets/images/notfound.jfif')} alt="not found" fluid />
        </Col>
      </Row>
    </Container>

);
}


export default NotFound;