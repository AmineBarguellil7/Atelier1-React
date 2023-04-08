import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useSelector } from 'react-redux';
import { selectCountAll } from "../redux/slices/cartSlice";

export default function NavigationBar() {
  const CartNumber = useSelector(selectCountAll);
  const inactive = {
    color:"red",
    textDecoration:'none'
  };

  const active = {
    color:"green",
    textDecoration:"none"
  };
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/home">
            My Store
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="products" style={({isActive}) => !isActive?inactive:active}>
              Products
            </NavLink>
            <NavLink to="addproduct" style={{textDecoration:"none",marginLeft:"10px"}}>Add New Product</NavLink>
            <NavLink to="cart" style={({isActive}) => !isActive?inactive:active}>Panier ({CartNumber})</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}