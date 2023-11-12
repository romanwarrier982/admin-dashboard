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
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { getReportHistory } from "../../redux/actions/reportAction";

import { useDispatch, useSelector } from "react-redux";
import { Cancel } from "@mui/icons-material";
import SingleReport from "./SingleReport";
import SingleReportCard from "./SingleReportCard";

const ReportHistory = () => {
  const dispatch = useDispatch();
  const reportHistoryList = useSelector((state) => state.reportHistories);

  useEffect(() => {
    dispatch(getReportHistory(2));
  }, [dispatch]);

  return (
    <>
      <SingleReportCard
        report={reportHistoryList?.report}
        history={reportHistoryList?.data}
      ></SingleReportCard>
      <Timeline position="right">
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
                  <Avatar
                    alt={report?.assigned_by?.name}
                    src="/static/images/avatar/1.jpg"
                  />
                  <Typography fontSize="xl" fontWeight="lg">
                    Assigned By: {report?.assigned_by?.name} -{" "}
                    {report?.assigned_by?.role?.name}
                  </Typography>
                  <Typography>
                    Comment: {report.assigned_description}
                  </Typography>
                  <Typography fontSize="xl" fontWeight="lg">
                    Assigned At : {report?.assigned_at}
                  </Typography>
                </TimelineContent>

                {report?.forward_status !== "Not Forwarded" && (
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      {report?.forward_status}
                    </Typography>
                    <Avatar
                      alt={report?.forward_to?.name}
                      src="/static/images/avatar/1.jpg"
                    />
                    <Typography fontSize="xl" fontWeight="lg">
                      Assigned By: {report?.forward_to?.name} -{" "}
                      {report?.forward_to?.role?.name}
                    </Typography>
                    <Typography>
                      Comment: {report?.forward_description}
                    </Typography>
                    <Typography fontSize="xl" fontWeight="lg">
                      Assigned At : {report?.forward_at}
                    </Typography>
                  </TimelineContent>
                )}
              </TimelineItem>
            );
          })}
      </Timeline>
    </>
  );
};
export default ReportHistory;
