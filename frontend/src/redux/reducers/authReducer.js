import { toast } from "react-toastify";

const initialState = {
  access_token: localStorage.getItem("token"),
  name: null,
  email: null,
  id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
    case "SIGN_UP":
    case "USER_LOADED":
      toast("Welcome " + action.user.data.name + " ", {
        position: toast.POSITION.TOP_RIGHT,
      });

      return {
        ...initialState,
        access_token: action.token,
        name: action.user.data.name,
        email: action.user.data.email,
        id: action.user.data.id,
      };

    case "LOG_OUT":
      localStorage.removeItem("token");
      toast("Your are singned out", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return {
        access_token: null,
        name: null,
        email: null,
        id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
