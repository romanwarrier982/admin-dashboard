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
import { Card, CardActionArea, TableCell, TableFooter, TableRow } from "@mui/material";
import Pagination from "react-js-pagination";

export default function ReportList() {
  const reportList = useSelector((state) => state.reports.data);
  const paginationData = useSelector((state) => state.reports.data);
  const [component, setComponent] = useState({ component: "ReportList" });
  const [page, setActivePage] = useState({
    page: 1,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReports(page));
    setComponent({ component: "ReportList" });
  }, [dispatch, page.page]);
  const handlePageChange = (pageNumber) => {
    setActivePage({ page: pageNumber });
  };
  console.log("Report List:", reportList);
  return (
    <>
    <Card sx={{ minWidth: 275 }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

        Report List
      </Typography>
      <CardActionArea>
      <TableFooter>
            <TableRow>
              <TableCell>
                {reportList && (
                  <Pagination
                    activePage={paginationData.current_page}
                    itemsCountPerPage={paginationData.per_page}
                    totalItemsCount={paginationData.total}
                    pageRangeDisplayed={paginationData.last_page}
                    onChange={handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                    firstPageText="First"
                    lastPageText="Last"
                  />
                )}
              </TableCell>
            </TableRow>
          </TableFooter>
      </CardActionArea>
      </Card>
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
