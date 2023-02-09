import { useState,useEffect } from "react";
import { Alert } from "react-bootstrap";
import Product from "./Product";

function Products() {



  const [showAlert, setShowAlert] = useState(false);

  const buy = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const products = require("../Data/products.json");

  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 3000);
  }, []);



  return (
    <div>
      <Alert show={showMsg} variant="success">
        <Alert.Heading>Hey, Welcome To Our Shop MyStore <br /> Thank you for choosing our store, we hope you enjoy your shopping experience! </Alert.Heading>
        <hr />
      </Alert>
      <Product
        title={products[0].name}
        quantite={products[0].quantity}
        price={products[0].price}
        img={products[0].img}
        like={products[0].like}
        buy={buy}
      />
      <Product
        title={products[1].name}
        quantite={products[1].quantity}
        price={products[1].price}
        img={products[1].img}
        like={products[1].like}
        buy={buy}
      />
      <Product
        title={products[2].name}
        quantite={products[2].quantity}
        price={products[2].price}
        img={products[2].img}
        like={products[2].like}
        buy={buy}
      />
      <Alert show={showAlert} variant="success">
        <Alert.Heading>You bought an Item!</Alert.Heading>
      </Alert>
    </div>
  );
}

export default Products;
