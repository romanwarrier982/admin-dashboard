import axios from "axios";
import { url, setHeaders } from "../../api_connection/api";
import { toast } from "react-toastify";

export const getReportHistory = (id) => {
  return (dispatch) => {
    axios
      .post(`${url}/report_history_get/2`,id, setHeaders())
      .then((reportHistories) => {
        var reportHistoryList = reportHistories.data;
        console.log("From Redux", reportHistoryList);
        dispatch({
          type: "GET_REPORT_HISTORY",
          reportHistoryList,
        });
      })
      .catch((error) => {
        toast.error("Something went wrong!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

// get Report by user_id

export const getReportByUserId = (id) => {
  return (dispatch) => {
    axios
      .post(`${url}/reports_by_user_id_get/${id}`, null, setHeaders())
      .then((reports) => {
        var reportList = reports.data.data;
        console.log("BY USER:", reportList);
        dispatch({
          type: "GET_REPORT_BY_USER_ID",
          reportList,
        });
      })
      .catch((error) => {
        toast.error("Something went wrong!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
}

// export const addProduct = (newProduct) => {
//   const data = new FormData();
//   data.append("images", newProduct.images);
//   data.append("name", newProduct.name);
//   data.append("price", newProduct.price);
//   return (dispatch, getState) => {
//     axios
//       .post(`${url}/products`, data, setHeaders())
//       .then((response) => {
//         dispatch({
//           type: "ADD_PRODUCT",
//           response,
//         });
//       })
//       .catch((error) => {
//         toast.error(error.response?.data, {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//       });
//   };
// };

// export const updateProduct = (updatedProduct) => {
//   return (dispatch) => {
//     const data = new FormData();
//     data.append("images", updatedProduct.images);
//     data.append("name", updatedProduct.name);
//     data.append("price", updatedProduct.price);
//     data.append("id", updatedProduct.id);

//     axios
//       .post(`${url}/product_update`, data, setHeaders())
//       .then((response) => {
//         dispatch({
//           type: "UPDATE_PRODUCT",
//           response,
//         });
//       })
//       .catch((error) => {

//         toast.error(error.response?.data, {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//       });
//   };
// };

// export const deleteProduct = (product) => {
//   return (dispatch) => {
//     axios
//       .post(`${url}/product_delete`, product, setHeaders())
//       .then((response) => {
//         dispatch({
//           type: "DELETE_PRODUCT",
//           response,
//         });
//       })
//       .catch((error) => {
//         toast.error(error.response?.data, {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//       });
//   };
// };

// export const searchProduct = (searchKey) => {
//   return (dispatch) => {
//     axios
//       .post(`${url}/product_search`, searchKey)
//       .then((products) => {
//         var productList = products.data;
//         dispatch({
//           type: "SEARCH_PRODUCT",
//           productList,
//         });
        
//       })
//       .catch((error) => {
//         toast.error(error.response?.data, {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//       });
//   };
// };
