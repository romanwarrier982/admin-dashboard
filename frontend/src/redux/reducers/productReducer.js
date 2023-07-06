import { toast } from "react-toastify";

const productReducer = (productList = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.productList;
    case "ADD_PRODUCT":
      toast.success("A new product was added 📦📦", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return productList;
    case "UPDATE_PRODUCT":
      toast.success("A product was updated...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return productList;
    case "DELETE_PRODUCT":
      toast.success("A product was deleted...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return productList;
    case "SEARCH_PRODUCT":
      action.productList.length === 0
        ? toast.error("No such product is available! 😕😕", {
            position: toast.POSITION.TOP_RIGHT,
          })
        : toast.success("Found Something 📦📦", {
            position: toast.POSITION.TOP_RIGHT,
          });
      return action.productList;
    default:
      return productList;
  }
};

export default productReducer;
