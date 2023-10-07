import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import userManagementReducer from "./userManagementReducer";
import roleReducer from "./roleReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  users: userManagementReducer,
  roles:roleReducer
});

export default rootReducer;
