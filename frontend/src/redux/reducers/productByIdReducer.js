import { toast } from "react-toastify";

const productByIdReducer = (productList = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS_BY_ROOM_ID":
      return action.productList;

    default:
      return productList;
  }
};

export default productByIdReducer;
