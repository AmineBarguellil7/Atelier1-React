import React, { useEffect, useState } from "react";
import Product from "./Product";
// import PRODUCTS from '../../data/products.json';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import {  deleteProduct } from "../service/api.js";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductReducer, selectProducts } from "../redux/slices/productsSlice";

export default function Products() {
    const [isBuy, setIsBuy] = useState(false);
    const [isWelcome, setIsWelcome] = useState(true);
    const [prods] = useSelector(selectProducts);
    const dispatch = useDispatch();

    /* useEffect(()=> {
        getProducts();
    }, [setProducts]); */

    useEffect(()=>{
        setTimeout(()=> {
            setIsWelcome(false);
        }, 3000)
    }, []);

    const handleBuy = () => {
        setIsBuy(true);
        setTimeout(()=>{
            setIsBuy(false);
        }, 2000);
    }

    /* const getProducts = async () => {
        const response = await getallProducts();
        setProducts(response.data);
    } */

    const deleteProd = async (id) => {
        const result = window.confirm("Are you sure you want to delete?");
      if (result) {
        await deleteProduct(id);
        dispatch(deleteProductReducer(id));
        // getProducts(); 
        }
    }


    let ProductCards;
   if(prods.length !== 0) {
        // console.log("products", products);
        ProductCards = prods.map((product, index) => (
            <Product
                key={index}
                product={product}
                handleBuy={handleBuy}
                deleteProd={deleteProd}
            />
        )) 
    }

    return (
        <div>
            {
                isWelcome &&   
                (
                    <Alert style={{ width: '70%', marginBottom: 40 }} variant='success'>
                        Hey welcome to the Shop
                    </Alert>
                )    
            }
            <Row xs={1} md={4} className="g-4">
                {ProductCards}
            </Row>
            {
                isBuy && (
                <Alert style={{ width: '70%', marginTop: 20 }} variant='primary'>
                    You bought an Item 
                </Alert>
                )
                }
        </div>
    );
}