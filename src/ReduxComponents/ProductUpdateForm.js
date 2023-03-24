import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getallProducts } from "../service/api";
import { useDispatch } from "react-redux";
import { updateProductReducer } from "../redux/slices/productsSlice";

export default function ProductUpdateForm() {
  const navigate = useNavigate();
  const param = useParams();
  const [product, setProduct] = useState({
    id: param.id ,
    name: "",
    price: 0,
    img: "",
    like: 0,
    quantity: 0,
    description: "",
  });
  const dispatch = useDispatch();
  const {  name, price, img, like, quantity, description } = product;
  
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await getallProducts(param.id);
    setProduct(response.data);
  };
  const onValueChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const onFileHandle = (e) => {
    console.log(e.target.files);
    setProduct({ ...product, [e.target.name]: e.target.files[0].name });
  };
  const UpdateP= async () => {
    const res = await editProduct(param.id,product);
    dispatch(updateProductReducer(res.data));
    if(res.status ===200)
    navigate("/products");
  };
  return (
    <>
      <Container style={{ marginTop: "30px" }}>
        <h2>Modify Your {name} Product</h2>
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
          <Button variant="primary" onClick={()=>UpdateP()}>Update Product</Button>
          <Button onClick={() => navigate("/products")} variant="secondary">
            Cancel
          </Button>
        </Form>
      </Container>
    </>
  );
}