import { toast } from "react-toastify";

const reportHistoryReducer = (reportHistoryList = [], action) => {
  switch (action.type) {
    case "GET_REPORT_HISTORY":
      return action.reportHistoryList;
    default:
      return reportHistoryList;
  }
};

export default reportHistoryReducer;
