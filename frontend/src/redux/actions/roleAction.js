import axios from "axios";
import { url, setHeaders } from "../../api_connection/api";
import { toast } from "react-toastify";

export const getRoles = () => {
  return (dispatch) => {
    axios
      .post(`${url}/roles_get`, setHeaders())
      .then((roles) => {
        var roleList = roles.data.data;
        dispatch({
          type: "GET_ROLES",
          roleList,
        });
      })
      .catch((error) => {
        toast.error("Something went wrong!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};
