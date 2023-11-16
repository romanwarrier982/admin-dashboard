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
import { TableFooter } from "@mui/material";
import checklist from '../../imgs/reports.gif'

const makeStyle = (price) => {
  if (price === 0) {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (price === 5000) {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
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
    <div style={{objectFit:"contain"}} className="Table">
      <h3>Recent Reports <img src={checklist} alt="icon" /> </h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table style={{objectFit:"contain"}} sx={{ minWidth: 650, maxHeight: 500 }} aria-label="simple table">
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
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Opend</TableCell>
              <TableCell align="left">Last Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" , objectFit:"contain"}}>
            {productList ? (
              productList.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="left">{product.id}</TableCell>
                  <TableCell align="left">{product.created_at}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(product.price)}>
                      {product.price}
                    </span>
                  </TableCell>
                  <TableCell align="left" className="Details">
                    Details
                  </TableCell>
                </TableRow>
              ))
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
