import React, { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import { RepeatIcon, CancelRounded, DoneAllRounded } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

import { getReportHistory } from "../../redux/actions/reportAction";

import { useDispatch, useSelector } from "react-redux";
import { Cancel } from "@mui/icons-material";
import SingleReport from "./SingleReport";
import SingleReportCard from "./SingleReportCard";

const ReportHistory = () => {
  const dispatch = useDispatch();
  const reportHistoryList = useSelector((state) => state.reportHistories);

  useEffect(() => {
    dispatch(getReportHistory());
  }, [dispatch]);

  return (
    <>
      <SingleReportCard
        report={reportHistoryList?.report}
        
        history={reportHistoryList?.data}
      ></SingleReportCard>
      <Timeline position="alternate">
        {reportHistoryList?.data &&
          reportHistoryList?.data.map((report) => {
            return (
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {report.assigned_at}
                </TimelineOppositeContent>

                {report.report_status === "Pending" && (
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "warning.main" }} />
                    <TimelineDot color="warning">
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                )}

                {report.report_status === "Resolved" && (
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "success.main" }} />
                    <TimelineDot color="success">
                      <DoneAllRounded></DoneAllRounded>
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                )}
                {report.report_status === "Closed" && (
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "error.main" }} />
                    <TimelineDot color="error">
                      <CancelRounded></CancelRounded>
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                )}

                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    {report.report_status}
                  </Typography>
                  <Typography>{report.assigned_description}</Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
      </Timeline>
    </>
  );
};
export default ReportHistory;
