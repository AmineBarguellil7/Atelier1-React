import { Route, Routes } from "react-router-dom";
import './App.css'
import Test from "./Components/Test";
import React from "react";
import NavigationBar from "./Components/NavigationBar";
// import NotFound from "./Components/NotFound";
// import UpdateProduct from "./Components/UpdateProduct";
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/slices/productsSlice';
import Products from "./ReduxComponents/Products";









const ProductUpdateForm = React.lazy(() => import('./ReduxComponents/ProductUpdateForm'));
const ProductFrom = React.lazy(() => import('./ReduxComponents/ProductForm'));
// const ProductDetails =React.lazy (() => import('./Components/ProductDetails'))
const ProductDetails = React.lazy(() => import('./ReduxComponents/ProductDetails'));
const NotFound = React.lazy(() => import('./Components/NotFound'));
// const AddProduct=React.lazy(()=>import("./Components/AddProduct"))
const Cart = React.lazy(() => import('./ReduxComponents/Cart'));


function App() {


  const dispatch = useDispatch();


  return (
    <>
    <React.Suspense fallback={<h1> Loading</h1>} >
      <NavigationBar />
      <Routes>
        <Route path="/home">
          <Route index element={<Products />}    loader={dispatch(fetchProducts())}/>
          <Route path=":id" element={<ProductDetails />}></Route>
        </Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/test/:username" element={<Test />}></Route>
        <Route path="/addproduct" element={<ProductFrom />}></Route>
        <Route path="/modifyproduct/:id" element={<ProductUpdateForm />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/deleteProduct/:id" element={<Products />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </React.Suspense>
      </>
  );
}

export default App;