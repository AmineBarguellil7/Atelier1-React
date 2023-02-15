import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Product.css';
import React from 'react';



function Product(props) {
  
  const  [like,setLike]=useState(props.like);
  const clickHandler = () => {
     setLike(like + 1);
   };

   const [quantite,setQuantite]=useState(props.quantity);
   

   const decrementQuantity=()=> {
    props.buy();
    if (quantite>0) {
      setQuantite(quantite-1);
    }
   }
  
  
  
  return (
    <div className='div1'>
        <Card className="card">
          <Card.Img    src={require('../assets/images/'+props.img)} width="286" height="180" />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            Price : {props.price} DT
            </Card.Text>
            <Card.Text>
              Quantity : {quantite}
            </Card.Text>
            <Card.Text>
              Likes : {like}
            </Card.Text>
            <button className='btn btn-primary' onClick={clickHandler}>Like</button>
            <button className='btn btn-info' disabled={quantite===0} onClick={decrementQuantity} >Buy</button> 
          </Card.Body>
        </Card>
        </div>
      );
}


export default Product;