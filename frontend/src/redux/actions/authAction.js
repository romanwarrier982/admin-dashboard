import axios from "axios";
import { setHeaders, url } from "../../api_connection/api";
import { toast } from "react-toastify";

export const logIn = (email, password) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/login`, { email, password })
      .then((token) => {
        localStorage.setItem("token", token.data.access_token);

        dispatch({
          type: "LOG_IN",
          token: token.data.access_token,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: "LOG_OUT",
    });
  };
};

export const loadUser = () => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/me`, {}, setHeaders())
      .then((user) => {
        localStorage.setItem("me", user.data);
        if (user) {
          dispatch({
            type: "USER_LOADED",
            user,
          });
        } else return null;
      })
      .catch((error) => {
        toast.error(
          " Log in to get Admin access ⚙️⚙️, Or Enjoy your shopping 🛒🛒",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      });
  };
};

export const signUpUser = (email, password, name, role_id) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/register`, { email, password, name, role_id })
      .then((token) => {
        localStorage.setItem("token", token.data.access_token);

        dispatch({
          type: "SIGN_UP",
          token: token.data.access_token,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};
