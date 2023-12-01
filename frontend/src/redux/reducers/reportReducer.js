import { toast } from "react-toastify";

const reportReducer = (reportList = [], action) => {
  switch (action.type) {
    case "GET_REPORT_BY_USER_ID":
      return action.reportList;
    case "GET_REPORTS":
      return action.reportList;
    case "ADD_REPORT":
      toast.success("A Report was added !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return reportList;
    case "UPDATE_REPORT_STATUS":
      toast.success("A product was updated !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    
      return reportList;
    default:
      return reportList;
  }
};

export default reportReducer;
