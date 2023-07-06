import axios from "axios";
import { url, setHeaders } from "../../api_connection/api";
import { toast } from "react-toastify";

export const getProducts = (pageNumber) => {
  return (dispatch) => {
    axios
      .post(`${url}/products_get`,pageNumber, setHeaders())
      .then((products) => {
        var productList = products.data.data;
        dispatch({
          type: "GET_PRODUCTS",
          productList,
        });
      })
      .catch((error) => {
        toast.error("Something went wrong!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const addProduct = (newProduct) => {
  const data = new FormData();
  data.append("images", newProduct.images);
  data.append("name", newProduct.name);
  data.append("price", newProduct.price);
  return (dispatch, getState) => {
    axios
      .post(`${url}/products`, data, setHeaders())
      .then((response) => {
        dispatch({
          type: "ADD_PRODUCT",
          response,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const updateProduct = (updatedProduct) => {
  return (dispatch) => {
    const data = new FormData();
    data.append("images", updatedProduct.images);
    data.append("name", updatedProduct.name);
    data.append("price", updatedProduct.price);
    data.append("id", updatedProduct.id);

    axios
      .post(`${url}/product_update`, data, setHeaders())
      .then((response) => {
        dispatch({
          type: "UPDATE_PRODUCT",
          response,
        });
      })
      .catch((error) => {

        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const deleteProduct = (product) => {
  return (dispatch) => {
    axios
      .post(`${url}/product_delete`, product, setHeaders())
      .then((response) => {
        dispatch({
          type: "DELETE_PRODUCT",
          response,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const searchProduct = (searchKey) => {
  return (dispatch) => {
    axios
      .post(`${url}/product_search`, searchKey)
      .then((products) => {
        var productList = products.data;
        dispatch({
          type: "SEARCH_PRODUCT",
          productList,
        });
        
      })
      .catch((error) => {
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};
