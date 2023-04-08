import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import {getallProducts} from "../service/api.js"

export default function ProductDetails() {
    const { id } = useParams();
    // const product = products.find((product) => product.name === name);
    const [product, setProduct] = useState();

    const getProduct = async (productId) => {
        const result = await getallProducts(productId);
        setProduct(result.data);
    }

    useEffect(()=> {
        getProduct(id);
    }, [id]);

    return (
        <>
        {product === undefined ? (
            <h1> Not Found </h1>
        ) : (
            <Container style={{ marginTop: "30px" }}>
            <Row>
                <Col md={4}>
                    <Card.Img
                        variant="top"
                        src={require("../assets/images/" + product.img)}
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
        </Container>
        )}
        </>

    )
}