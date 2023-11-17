import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import SingleReport from "./SingleReport";
import { useDispatch, useSelector } from "react-redux";
import { getReports } from "../../redux/actions/reportAction";
import SingleReportCard from "./SingleReportCard";

export default function ReportList() {
  const reportList = useSelector((state) => state.reports.data);
  const page = useSelector((state) => state.reports);
  const [component, setComponent] = useState({ component: "ReportList" });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReports(page));
    setComponent({ component: "ReportList" });
  }, [dispatch]);
  console.log("Report List:", reportList);
  return (
    <>
      {reportList?.data?.map((report) => {
        return (
          <SingleReportCard
          key={report.id}
            report={report}
            history={report?.history}
            component={component}
          ></SingleReportCard>
        );
      })}
    </>
  );
}
