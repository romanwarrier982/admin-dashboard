import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ButtonGroup, Button } from "@mui/material";
import {
  Create,
  Delete,
  InfoRounded,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import { deleteProduct, getProducts } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";

const Product = ({ product, productList, setProduct }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const data = "adfdsfsd";
  const dataToSend = "HelloFromComponentA";

  const handleOnUpdateClick = (select) => {
    const searchedProduct = productList.find(
      (product) => product.id === select.id
    );
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
          alt={product.name}
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
        <p className="card-title">Invoice : {product.invoice_id}</p>
        <p className="card-title">Details: {product.details}</p>
        <h6 className="card-title">Type : {product.type}</h6>

        <div className="card-footer">
          {auth.id &&
          (auth.id == product.user_id ||
            auth.userData.room_id == product.room_id ||
            auth.userData.role.name === "Admin" ||
            auth.userData.role.name === "Super Admin") ? (
            <ButtonGroup
              size="small"
              aria-label=" small outlined primary button group"
            >
              {auth.userData.role.name === "Admin" ||
                (auth.userData.role.name === "Super Admin" && (
                  <>
                    <Button onClick={() => handleOnUpdateClick(product)}>
                      <Create color="primary" />
                      Edit
                    </Button>

                    <Button onClick={() => handleDelete(product)}>
                      <Delete color="error" /> Delete
                    </Button>
                  </>
                ))}
              <Button color="warning" >
                <Link  to={"/make_report"} >
                  Create Issue
                </Link>
              </Button>

              <Button>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/reportHistory/${product.id}`}
                >
                  <RemoveRedEyeOutlined color="success" /> View
                </Link>
              </Button>
            </ButtonGroup>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Product;
