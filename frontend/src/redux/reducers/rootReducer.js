import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import userManagementReducer from "./userManagementReducer";
import roleReducer from "./roleReducer";
import reportHistoryReducer from "./reportHistoryReducer";
import productByIdReducer from "./productByIdReducer";
import reportReducer from "./reportReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  users: userManagementReducer,
  roles: roleReducer,
  reportHistories: reportHistoryReducer,
  roomProducts: productByIdReducer,
  reports: reportReducer
});

export default rootReducer;
