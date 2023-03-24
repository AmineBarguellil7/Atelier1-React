import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Product(props) {
    const [productQuantity, setProductQuantity] = useState(props.quantity);
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLike = () => {
        setLikeCounter(likeCounter + 1);
    }

    const decrementProductQuantity = (quantity) => {
        if (quantity > 0) {
            setProductQuantity(productQuantity - 1);
        }
    }

    const handleBuyProduct = () => {
        props.handleBuy();
        decrementProductQuantity(productQuantity);
    }

    return (
        <Col style={{ width: "20%" }} className="m-2">
            <Card className={likeCounter > 5 ? "bestProduct" : "product"}>
                <Card.Img variant="top" style={{ height: 400 }} src={require(`../assets/images/${props.img}`)} />
                <Card.Body>
                    <NavLink to={`${props.id}`}>
                        <Card.Title>{props.name}</Card.Title>
                    </NavLink>
                    <Card.Text>
                        Price : {props.price}
                    </Card.Text>
                    <Card.Text>
                        Quantity : {productQuantity}
                    </Card.Text>
                    <Card.Text>
                        Like : {likeCounter}
                    </Card.Text>
                    <Button variant="info" onClick={handleLike} className="mx-5">Like</Button>
                    <Button variant="primary" onClick={handleBuyProduct} disabled={productQuantity ? false : true} className="mx-5">Buy</Button>
                    <br></br>
                    <Row>
                        <Col md={6}>
                            {" "}
                            <Button variant="success"><Link to={`/modifyproduct/${props.id}`} style={{ textDecoration: 'none', color: 'white' }}>Update Product </Link></Button>
                        </Col>
                        <Col md={6}>
                            <Button variant="danger" onClick={() => props.deleteProd(props.id)}>Delete Product</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}