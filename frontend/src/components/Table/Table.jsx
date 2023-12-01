import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProduct } from "../../redux/actions/productAction";

import Pagination from "react-js-pagination";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { Button, TableFooter } from "@mui/material";
import checklist from "../../imgs/reports.gif";

const makeStyle = (report_status) => {
  if (report_status === "Resolved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (report_status === "Active") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  }else if (report_status === "In Progress") {
    return {
      background: "#FFFF00",
      color: "black",
    };
  } else {
    return {
      textwrap: "wrap",
      objectFit: "contain",
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.data);
  const paginationData = useSelector((state) => state.products);
  const auth = useSelector((state) => state.auth);
  const [searchKey, setSearchKey] = useState({
    searchKey: "",
  });
  const [page, setActivePage] = useState({
    page: 1,
  });
  const handleBlur = (e) => {
    if (e.key === "Enter") {
      dispatch(searchProduct(searchKey));
    }
  };
  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page.page]);
  const handlePageChange = (pageNumber) => {
    setActivePage({ page: pageNumber });
  };
  console.log(productList);

  return (
    <div style={{ objectFit: "contain" }} className="Table">
      <div className="card">
        <div className="card-header">
          <div className="card-title">
            <h3>
              Recent Progress <img src={checklist} alt="icon" />{" "}
            </h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label className="me-2">Status:</label>
              <select className="form-select">
                <option value="All">All</option>
                <option value="Resolved">Resolved</option>
                <option value="Active">Active</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="me-2">Opened Date:</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-4">
              <label className="me-2">Update Date:</label>
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
      </div>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          objectFit: "contain",
        }}
      >
        <Table
          style={{ objectFit: "contain" }}
          sx={{ minWidth: 650, maxHeight: 500 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Search 🔍
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    onChange={(e) =>
                      setSearchKey({ ...searchKey, searchKey: e.target.value })
                    }
                    onBlur={handleBlur}
                    onKeyDown={handleBlur}
                  />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Report</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white", objectFit: "contain" }}>
            {productList ? (
              productList.map(
                (product) =>
                  product?.reports?.length !== 0 && (
                    <>
                      <TableRow
                        key={product.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {product.name} - {product.invoice_id}
                        </TableCell>
                        <TableCell align="left">
                          <Table
                            component={Paper}
                            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell align="left">Description</TableCell>
                                <TableCell align="left">Type</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left">Last Updated</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {product?.reports?.map((report) => (
                                <TableRow
                                  key={report.id}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 2,
                                    },
                                  }}
                                >
                                  <TableCell align="center">
                                    {report.report_description}
                                  </TableCell>
                                  <TableCell align="center">
                                    {report.report_type}
                                  </TableCell>
                                  <TableCell align="center">
                                    <Button
                                      align="center"
                                      className="status rounded-corner"
                                      style={makeStyle(report.report_status)}
                                    >
                                      {report.report_status}
                                    </Button>
                                  </TableCell>
                                  <TableCell align="center">
                                    {report.updated_at}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableCell>

                        {/* <TableCell align="left" className="Details">
                          Details
                        </TableCell> */}
                      </TableRow>
                    </>
                  )
              )
            ) : (
              <div>No Product Avaiable</div>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>
                {productList && (
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
        </Table>
      </TableContainer>
    </div>
  );
}
