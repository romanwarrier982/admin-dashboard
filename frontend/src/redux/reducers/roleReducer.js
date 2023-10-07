import { toast } from "react-toastify";

const roleReducer = (roleList = [], action) => {
  switch (action.type) {
    case "GET_ROLES":
      return action.roleList;    
    default:
      return roleList;
  }
};

export default roleReducer;
