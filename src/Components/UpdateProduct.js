import { useEffect, useState,React } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getallProducts } from "../service/api";

export default function UpdateProduct () {
  const { id } = useParams();
  const getbyid = async (id) => {
    const response = await getallProducts(id);
    setProduct(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getbyid(id);
  }, []);
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    img:"",
    like: 0,
    quantity: 0,
    description: "",
  });
  const { name, price, img, like, quantity, description } = product;
  const onValueChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const onFileHandle = (e) => {
    console.log(e.target.files);
    setProduct({ ...product, [e.target.name]: e.target.files[0].name });
  };
  const addNewP = async (id) => {
    const res = await editProduct(id,product);
    if (res.status === 200) navigate("/products");
  };
  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Modify a Product</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => onValueChange(e)}
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
        <Button style={{marginBottom:"20px"}} variant="primary" onClick={() => addNewP(id)}>
          Update Product
        </Button>
        <Button style={{marginLeft:"10px",marginBottom:"20px"}} onClick={() => navigate("/products")} variant="secondary">
          Cancel
        </Button>
      </Form>
    </Container>
  );
}