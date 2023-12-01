import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { BugReport, RemoveRedEyeOutlined } from "@mui/icons-material";

const DynamicTable = ({ data, tableName }) => {
  console.log("Dynamic Table:", data);
  if (!data || data.length === 0) {
    return <div>No data to display</div>;
  }

  // Assuming data is an array of objects and each object has consistent keys
  const columns = Object.keys(data[0]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column}>{row[column]}</TableCell>
              ))}
              <TableCell>
                {tableName === "profile_product_list" && (
                  <Button color="warning">
                    <BugReport fontSize="small" />
                    <Link
                      style={{ textDecoration: "none" }}
                      to={"/make_report"}
                    >
                      Create Issue
                    </Link>
                  </Button>
                )}

                {tableName === "profile_report_list" && (
                  <Button color="success">
                    <RemoveRedEyeOutlined fontSize="small" />
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/reportHistory/${row.id}`}
                    >
                      View History
                    </Link>
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
