import { toast } from "react-toastify";

const userManagementReducer = (userList = [], action) => {
  switch (action.type) {
    case "GET_USERS":
      return action.userList;
    case "GET_USERS_BY_ROLE_ID":
      return action.userList;
    default:
      return userList;
  }
};

export default userManagementReducer;
