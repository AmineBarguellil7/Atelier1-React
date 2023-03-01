import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Col,Row } from "react-bootstrap";
import Container from "react-bootstrap/Container"
import {getallProducts} from "../service/api"


const ProductDetails =() =>{
    const {id} =useParams()
    const [product,setproduct]=useState();
    

    const getProductById =async(id)=>{
        const response = await getallProducts(id);
        setproduct(response.data);
    }



    useEffect(()=>{
        getProductById(id);
      },[id])



    return(
        <div>
        {product===undefined ?(<h1 style={{textAlign:"center"}}>Product does not exist</h1>):(
        <Container style={{ marginTop: "30px" }}>
        <Row>
        <Col md={4}>
        <Card.Img
        variant="top"
        src={require('../assets/images/' + product.img)}
        alt="Product Img"
        height="300"
        />
        </Col>
        <Col md={8}>
        <Row>
        <Col md={12}>
        <h1>{product.name}</h1>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
        <h5>Description</h5>
        </Col>
        <Col>
        <p style={{ marginLeft: "50px" }}>
        {product.description}
        </p>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
        <h5>Price</h5>
        </Col>
        <Col>
        <p style={{ marginLeft: "50px" }}>{product.price} DT</p>
        
        </Col>
        </Row>
        <Row>
        <Col md={12}>
        <h5>Likes</h5>
        </Col>
        <Col>
        <p style={{ marginLeft: "50px" }}>{product.like}</p>
        </Col>
        </Row>
        </Col>
        </Row>
        </Container>)}
        </div>
    )
}

export default ProductDetails;