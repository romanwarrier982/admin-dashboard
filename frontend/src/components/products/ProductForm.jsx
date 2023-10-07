import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  addProduct,
  getProducts,
  updateProduct,
} from "../../redux/actions/productAction";

const ProductForm = ({ product, setProduct }) => {

  const dispatch = useDispatch();
  const [images, setSelectedFile] = useState("123");

  // image onchange hander
  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
    product.images = images;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.id) {
      const updatedProduct = {
        name: product.name,
        price: product.price,
        images: images,
        id: product.id,
      };

      dispatch(updateProduct(updatedProduct));
    } else {
      const newProduct = {
        images: images,
        price: product.price,
        name: product.name,
        id: product.id,
      };
      dispatch(addProduct(newProduct));
      dispatch(getProducts());
    }
    setProduct({ name: "", images: "", price: "", id: "" });
    setSelectedFile("");
    document.querySelector("#imageForm").reset();
  };

  return (
    <>



      <div className="container py-5">
        <div className="row">
          <div className="col-xl-12 col-lg-8 col-md-8 col-sm-12 m-auto">
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              id="imageForm"
            >
              <div className="card shadow">
                <div className="card-header">
                  <h4 className="card-title fw-bold">Add New Asset</h4>
                </div>

                <div className="card-body">
                  <div className="form-group py-2">
                    <label htmlFor="images">Images</label>
                    <input
                      type="file"
                      name="images"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group py-2">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={product.name}
                      onChange={(e) =>
                        setProduct({ ...product, name: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>

                  <div className="form-group py-2">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      name="price"
                      value={product.price}
                      onChange={(e) =>
                        setProduct({ ...product, price: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="card-footer">
                  <button type="submit" className="btn btn-success">
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
