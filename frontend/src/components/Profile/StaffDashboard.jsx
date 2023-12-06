import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CardActionArea,
  Badge,
} from "@mui/material";

import {
  Assignment as AssignmentIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  DoneAll as DoneAllIcon,
  ReportProblem as ReportProblemIcon,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import LaptopIcon from "@mui/icons-material/Laptop";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import ConstructionIcon from "@mui/icons-material/Construction";
import StaffModal from "./StaffModal";
import SolutionHints from "./SolutionHints";
import { useDispatch, useSelector } from "react-redux";
import {
  getReportByUserId,
  getReports,
  updateReportStatus,
} from "../../redux/actions/reportAction";
import DynamicTable from "./DynamicTable";
import {
  getProductsByRoomId,
  getProductsByUserId,
} from "../../redux/actions/productAction";
import aiIcon from "../../imgs/ai_icon.gif";
import { Link } from "react-router-dom";

const StaffDashboard = () => {
  // State to manage the list of solution hints for each report
  const [solutionHints, setSolutionHints] = useState({});
  const [component, setComponent] = useState({ component: "ReportList" });
  const [selectedTask, setSelectedTask] = useState(null);

  const page = useSelector((state) => state.reports);
  const dispatch = useDispatch();
  const userProductList = useSelector((state) => state.products);
  const roomProductList = useSelector((state) => state.roomProducts);
  const auth = useSelector((state) => state.auth);
  const reportList = useSelector((state) => state.reports);

  console.log("Profile:", auth);
  useEffect(() => {
    dispatch(getProductsByUserId(auth.id));
    dispatch(getProductsByRoomId(auth.userData.room_id));
    dispatch(getReportByUserId(auth.id));
  }, [dispatch]);

  const handleUpdateReport = (e) => {
    e.preventDefault();
  };

  // Original array of objects
  const originalArray = roomProductList;
  const originalArray2 = reportList;
  // Keys to copy
  const keysToCopy = ["name", "details", "type", "id"];
  const keysToCopy2 = [
    "report_description",
    "report_type",
    "report_status",
    "id",
  ];

  // Copy array based on the keys
  const copiedArray = originalArray.map((obj) => {
    const newObj = {};
    keysToCopy.forEach((key) => {
      newObj[key] = obj[key];
    });
    return newObj;
  });
  const copiedArray2 = originalArray2.map((obj) => {
    const newObj = {};
    keysToCopy2.forEach((key) => {
      newObj[key] = obj[key];
    });
    return newObj;
  });
  console.log(copiedArray2);

  console.log(copiedArray);

  // Function to handle adding a solution hint for a report
  // Replace the dummy data with your actual data structures
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", status: "Assigned" },
    { id: 2, title: "Task 2", status: "Resolved" },
    // ... other tasks
  ]);

  // const [reports, setReports] = useState([
  //   {
  //     id: "In Progress",
  //     description: "Started working on the task",
  //     status: "In Progress",
  //   },
  //   { id: "Resolved", description: "Issue is fixed", status: "Resolved" },
  //   { id: "Closed", description: "Issue is closed", status: "Closed" },
  //   { id: "Pending", description: "Waiting for updates", status: "Pending" },
  // ]);

  const [itStaffProfile, setItStaffProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "IT Staff",
    profilePic: "URL_TO_PROFILE_PIC",
    department: "IT Department",
  });

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
    } else if (report_status === "In Progress") {
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

  const handleUpdateReportStatus = (reportId, status) => {


    const updateReportData = {
      id: reportId,
      report_status: status,
      userInfo: auth,
      description: "This report is in" + status + "status",
    };
    dispatch(updateReportStatus(updateReportData));
    dispatch(getReportByUserId(auth.id));
  };
  const toolSuggestions = [
    { name: "Laptop", icon: <LaptopIcon /> },
    { name: "Pendrive", icon: <SdStorageIcon /> },
    { name: "Tools", icon: <ConstructionIcon /> },
    // Add more tools with icons
  ];
  const handleAddSolutionHint = (reportId) => {
    // Fetch automated suggestions or handle logic to generate suggestions
    const toolSuggestions = [
      { name: "Laptop", icon: <LaptopIcon /> },
      { name: "Pendrive", icon: <SdStorageIcon /> },
      { name: "Keyboard", icon: <ConstructionIcon /> },
      // Add more tools with icons
    ];

    // Update solution hints state
    setSolutionHints((prevHints) => ({
      ...prevHints,
      [reportId]: toolSuggestions,
    }));
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const [hints, setHints] = useState([]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddHints = (newHints) => {
    setHints([...hints, ...newHints]);
  };

  const totalTasks = tasks.length;
  const assignedTasks = tasks.filter(
    (task) => task.status === "Assigned"
  ).length;
  const resolvedTasks = tasks.filter(
    (task) => task.status === "Resolved"
  ).length;

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        IT Staff Dashboard
      </Typography>

      {/* <Grid container spacing={3}> */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            background: "#f0f0f0",
            boxShadow: "0px 5px 15px 0px #80808029",
          }}
        >
          <CardContent>
            <Typography variant="h6" color="primary">
              <AssignmentIcon fontSize="large" /> Tasks Overview
            </Typography>
            <Typography>Total Tasks: {totalTasks}</Typography>
            <Typography>Assigned Tasks: {assignedTasks}</Typography>
            <Typography>Resolved Tasks: {resolvedTasks}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={9}>
        <Card>
          <CardHeader
            avatar={
              <Avatar
                src={itStaffProfile.profilePic}
                alt={itStaffProfile.name}
              />
            }
            title={itStaffProfile.name}
            subheader={`${itStaffProfile.role} - ${itStaffProfile.department}`}
          />

          <CardContent>
            <Typography variant="h6">
              <ReportProblemIcon fontSize="large" /> Reports
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                    <TableCell>
                      <img src={aiIcon}></img> Solution Hints{" "}
                    </TableCell>
                    <TableCell>
                      <img src={aiIcon}></img> Suggested Tools
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reportList.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell>{report.id}</TableCell>
                      <TableCell>{report.report_description}</TableCell>
                      <TableCell>
                        <Badge
                          align="center"
                          className="status rounded-corner"
                          style={makeStyle(report.report_status)}
                        >
                          {report.report_status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth>
                          <InputLabel>Update Status</InputLabel>
                          <Select
                            label="Update Status"
                            onChange={(event) => {
                              setSelectedTask(report.id);
                              handleUpdateReportStatus(
                                report.id,
                                event.target.value
                              );
                            }}
                          >
                            <MenuItem value="In Progress">In Progress</MenuItem>
                            <MenuItem value="Resolved">Resolved</MenuItem>
                            <MenuItem value="Closed">Closed</MenuItem>
                            <MenuItem value="Pending">Pending</MenuItem>
                          </Select>
                          <Button color="success">
                            <RemoveRedEyeOutlined fontSize="small" />
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/reportHistory/${report.id}`}
                            >
                              View History
                            </Link>
                          </Button>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <SolutionHints></SolutionHints>
                        <StaffModal
                          isOpen={isModalOpen}
                          onClose={handleCloseModal}
                          onAddHints={handleAddHints}
                        ></StaffModal>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleOpenModal()}
                        >
                          <PlaylistAddCheckIcon />
                          Add Solution Hint
                        </Button>
                      </TableCell>
                      {toolSuggestions.map((tool, index) => (
                        <TableRow key={index}>
                          <span>{tool.name}</span>
                          <span>{tool.icon}</span>
                        </TableRow>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            background: "#f0f0f0",
            boxShadow: "0px 5px 15px 0px #80808029",
          }}
        >
          <CardActionArea>
            {copiedArray2.length && (
              <DynamicTable
                data={copiedArray2}
                tableName={"dashboard_report_list"}
              ></DynamicTable>
            )}
          </CardActionArea>
        </Card>
      </Grid>

      {/* </Grid> */}
    </Box>
  );
};

export default StaffDashboard;
