import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../service/api";
import { useDispatch } from "react-redux";
import { addProductReducer } from "../redux/slices/productsSlice";

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
    const dispatch = useDispatch();
    const { name, price,  quantity, description } = product;
    const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });

    };
    const onFileHandle = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.files[0].name });

    };
    const addNewP = async () => {
        const res = await addProduct(product);
        dispatch(addProductReducer(res.data));
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
                <Button variant="primary" onClick={() => addNewP()}>
                    Add Product
                </Button>
                <Button onClick={() => navigate('/products')} variant="secondary" >Cancel</Button>

            </Form>

        </Container>
    );
}