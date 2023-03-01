import { useState,React } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../service/api";

export default function AddProduct() {
const navigate = useNavigate();
const [product, setProduct] = useState({
name: "",
price: 0,
img: "",
like: 0,
quantity: 0,
description: "",
});
const { name, price, img, like, quantity, description } = product;
const onValueChange = (event) => {
console.log(event.target.name);
setProduct({ ...product, [event.target.name]: event.target.value });

};
const onFileHandle = (event) => {
console.log(event.target.files);
setProduct({ ...product, [event.target.name]: event.target.files[0].name});

};
const addNewP = async () => {
const res = await addProduct(product);
if (res.status === 201)
navigate("/products");
};


return (
<Container style={{ marginTop: "30px" }}>
<h2>Add a new Product to your store</h2>
<Form>
<Form.Group className="mb-3">
<Form.Label>Name</Form.Label>
<Form.Control
onChange={(event) => onValueChange(event)}
name="name"
value={name}
type="text"
placeholder="Enter a Name"
/>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Description</Form.Label>

<Form.Control
as="textarea"
rows={3}
placeholder="Enter description "
onChange={(e) => onValueChange(e)}
name="description"
value={description}
/>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Price</Form.Label>
<Form.Control
type="number"
onChange={(e) => onValueChange(e)}
name="price"
value={price}
/>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Quantity</Form.Label>
<Form.Control
type="number"
onChange={(e) => onValueChange(e)}
name="quantity"
value={quantity}
/>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Image</Form.Label>
<Form.Control
type="file"
onChange={(e) => onFileHandle(e)}
name="img"
/>
</Form.Group>
<Button
style={{marginBottom:"20px"}} 
variant="primary" onClick={() => addNewP()}>
Add Product
</Button>
<Button 
style={{marginLeft:"10px",marginBottom:"20px"}}
onClick={() => navigate('/products')} variant="secondary" >Cancel</Button>
</Form>
</Container>
);
}