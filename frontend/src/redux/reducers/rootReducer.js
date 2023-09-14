import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import userManagementReducer from "./userManagementReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  users: userManagementReducer,
});

export default rootReducer;
