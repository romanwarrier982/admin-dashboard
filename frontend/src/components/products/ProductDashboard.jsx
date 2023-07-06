import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import MainDash from "../MainDash/MainDash";
const ProductDashboard = () => {
 
  const auth = useSelector((state) => state.auth);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    images: "",
    id: "",
  });
 
  return (
    <>
      {auth.id ? (
        <>
        <MainDash></MainDash>
          <div>
            <ProductForm
              product={product}
              setProduct={setProduct}
            ></ProductForm>
            <ProductList
              product={product}
              setProduct={setProduct}
            ></ProductList>
          </div>
        </>
      ) : (
        <>
          <ProductList product={product} setProduct={setProduct}></ProductList>
        </>
      )}
    </>
  );
};
export default ProductDashboard;
