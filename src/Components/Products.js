import { useState,useEffect } from "react";
import { Alert } from "react-bootstrap";
import Product from "./Product";

function Products() {

  const products = require("../Data/products.json");

  const [showAlert, setShowAlert] = useState(false);

  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {       //useEffect prend deux parametres fonction wa array thot fih les variables ki titbadel valeur mta3 ayy variable fonction elli fi wost useEffect titlanca mara okhra.
    setShowMsg(true);     //useEffect(()=> {},[]) kan yitnaha tableau yo93od m3a kol changement fel composant titlanca le fonction.
    setTimeout(() => {
      setShowMsg(false);
    }, 3000);
  }, []);     //ki yebda tableau vide kiyenha componentDidmount

  //ki nahi le parametre theni array twalli le fct titlanca mellowel wa m3a kol changement le ayy variable


  const buy = () => {
    setShowAlert(true);
  setTimeout(() => setShowAlert(false), 2000);
};


  return (
    <div>
      <Alert show={showMsg} variant="success">
        <Alert.Heading>Hey, Welcome To Our Shop MyStore <br /> Thank you for choosing our store, we hope you enjoy your shopping experience! </Alert.Heading>
        <hr />
      </Alert> 
      { products.map((p) => (
        <Product
          key={p.name}
          name={p.name}
          price={p.price}
          quantity={p.quantity}
          like={p.like}
          img={p.img}
          buy={buy}
        />
      ))  }
      <Alert show={showAlert} variant="success">
        <Alert.Heading>You bought an Item!</Alert.Heading>
      </Alert> 
    </div>
  );
}

export default Products;
