import Sheet from "@mui/joy/Sheet";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/joy/Button";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { getRoles } from "../../redux/actions/roleAction";
import {
  getUsers,
  getUsersByRoleId,
} from "../../redux/actions/userManagementAction";
import { TaskAltOutlined, BugReport } from "@mui/icons-material";
import {
  getReportByUserId,
  updateReportStatus,
} from "../../redux/actions/reportAction";
import { useEffect, useState } from "react";
import {
  getProductsByRoomId,
  getProductsByUserId,
} from "../../redux/actions/productAction";

const MakeReportForm = () => {
  const userProductList = useSelector((state) => state.products);
  const roomProductList = useSelector((state) => state.roomProducts);
  const auth = useSelector((state) => state.auth);
  const [personal_asset, setPersonalAsset] = useState("");
  const [room_asset, setRoomAsset] = useState("");
  const [report_type, setReportType] = useState("");
  const [report_description, setReportDescription] = useState("");
  const userReportList = useSelector((state) => state.reports);
  const dispatch = useDispatch();
  console.log("Profile:", auth);
  useEffect(() => {
    dispatch(getProductsByUserId(auth.id));
    dispatch(getProductsByRoomId(auth.userData.room_id));
    dispatch(getReportByUserId(auth.id));
    // userProductList.push(roomProductList);
    console.log("User:", roomProductList, userProductList);
  }, [dispatch]);

  const handleUpdateReport = () => {};

  return (
    <div className="form-control p-2 m-2">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Room Asset</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={room_asset}
            label="Age"
            onChange={(event) => setRoomAsset(event.target.value)}
          >
            {roomProductList ? (
              roomProductList.map((asset) => (
                <MenuItem value={asset.id}>
                  {asset.name} - {asset.invoice_id}
                </MenuItem>
              ))
            ) : (
              <MenuItem value={1}>No Result Found</MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>

      <br></br>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Personal Asset</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={personal_asset}
            label="Age"
            onChange={(event) => setPersonalAsset(event.target.value)}
          >
            {userProductList ? (
              userProductList.map((personal_asset) => (
                <MenuItem value={personal_asset.id}>
                  {personal_asset.name} - {personal_asset.invoice_id}
                </MenuItem>
              ))
            ) : (
              <MenuItem value={1}>No Result Found</MenuItem>
            )}
          </Select>
          <br></br>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Issue Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={report_type}
                label="Age"
                onChange={(event) => setReportType(event.target.value)}
              >
                <MenuItem value={"Hardware Issue"}>Hardware Issue</MenuItem>
                <MenuItem value={"Software Issue"}>Software Issue</MenuItem>
                <MenuItem value={"Network Issue"}>Network Issue</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <br></br>
          <div className="form-group py-2">
            <label htmlFor="name">Report Details</label>
            <input
              type="textarea"
              name="name"
              value={report_description}
              onChange={(e) => setReportDescription(e.target.value)}
              className="form-control"
            />
          </div>
          <Button variant="solid" color="danger" onClick={handleUpdateReport}>
            <BugReport></BugReport> Report Issue
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default MakeReportForm;
