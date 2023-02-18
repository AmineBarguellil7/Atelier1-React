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
  
   const cardStyle = {
    backgroundColor: like > 5 ? '#DB7090' : 'none',
    animation: like > 5 ? 'clignote 2s linear infinite' : 'none',
  };

  const keyframes = `
    @keyframes clignote {
      50% { opacity: 0.5; }
    }
  `;
  
  
  return (
    <div className='div1'>
      <style>{keyframes}</style>
      <Card className="card" style={cardStyle}>
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