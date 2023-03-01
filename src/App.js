import { Route, Routes } from "react-router-dom";
import './App.css'
import Test from "./Components/Test";
import React from "react";
import NavigationBar from "./Components/NavigationBar";
import NotFound from "./Components/NotFound";
import UpdateProduct from "./Components/UpdateProduct";



const ProductDetails =React.lazy (() => import('./Components/ProductDetails'))
const Products=React.lazy (() => import('./Components/Products'));
const AddProduct=React.lazy(()=>import("./Components/AddProduct"))


function App() {
  return (
    <>
    <React.Suspense fallback={<h1> Loading</h1>} >
      <NavigationBar />
      <Routes>
        <Route path="/home">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />}></Route>
        </Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/test/:username" element={<Test />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/modifyproduct/:id" element={<UpdateProduct />}></Route>
        <Route path="/deleteProduct/:id" element={<Products />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </React.Suspense>
      </>
  );
}

export default App;