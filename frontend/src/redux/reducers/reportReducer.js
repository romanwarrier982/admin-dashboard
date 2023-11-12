import { toast } from "react-toastify";

const reportReducer = (reportList = [], action) => {
  switch (action.type) {
    case "GET_REPORT_BY_USER_ID":
      return action.reportList;
    default:
      return reportList;
  }
};

export default reportReducer;
