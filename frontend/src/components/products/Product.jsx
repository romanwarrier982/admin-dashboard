import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ButtonGroup, Button } from "@mui/material";
import { Create, Delete } from "@mui/icons-material";
import { deleteProduct, getProducts } from "../../redux/actions/productAction";

const Product = ({ product, productList, setProduct }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOnUpdateClick = (select) => {
    const searchedProduct = productList.find((product) => product.id === select.id);
    setProduct({ ...searchedProduct });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (product) => {
    dispatch(deleteProduct(product));
    dispatch(getProducts());
  };

  return (
    <div style={{ width: "30rem", height: "30rem" }} className="col-md-4 p-5">
      <div className="card p-1">
        <img
          alt="hello"
          src={"http://localhost:8000/uploads/" + product.image_name}
          className="card-img-top img-fluid img-bordered"
          style={{
            objectFit: "contain",
            width: "30rem",
            height: "200px",
            objectFit: "contain",
          }}
        />
        <h6 className="card-title">Product : {product.name}</h6>
        <p className="card-text">Price : {product.price}</p>
        <div className="card-footer">
          {auth.id ? (
            <ButtonGroup
              size="small"
              aria-label="outlined primary button group"
            >
              <Button onClick={() => handleOnUpdateClick(product)}>
                <Create color="primary" />
              </Button>
              <Button onClick={() => handleDelete(product)}>
                <Delete color="secondary" />
              </Button>
            </ButtonGroup>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Product;
