import axios from "axios";
import { url, setHeaders } from "../../api_connection/api";
import { toast } from "react-toastify";

export const getUsers = (pageNumber) => {
  return (dispatch) => {
    axios
      .post(`${url}/users_get`,pageNumber, setHeaders())
      .then((users) => {
        var userList = users.data.data;
        dispatch({
          type: "GET_USERS",
          userList,
        });
      })
      .catch((error) => {
        toast.error("Something went wrong!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};


