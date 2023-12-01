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
} from "@mui/material";

import {
  Assignment as AssignmentIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  DoneAll as DoneAllIcon,
  ReportProblem as ReportProblemIcon,
} from "@mui/icons-material";
import StaffModal from "./StaffModal";

const StaffDashboard = () => {
  // State to manage the list of solution hints for each report
  const [solutionHints, setSolutionHints] = useState({});

  // Function to handle adding a solution hint for a report
  // Replace the dummy data with your actual data structures
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", status: "Assigned" },
    { id: 2, title: "Task 2", status: "Resolved" },
    // ... other tasks
  ]);

  const [reports, setReports] = useState([
    { id: 1, description: "Report 1", status: "Open" },
    { id: 2, description: "Report 2", status: "Resolved" },
    // ... other reports
  ]);

  const [itStaffProfile, setItStaffProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "IT Staff",
    profilePic: "URL_TO_PROFILE_PIC",
    department: "IT Department",
  });

  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    // Fetch tasks and reports data from your backend or API
    // Update tasks and reports state accordingly
  }, []); // Run this effect only once on component mount
  const handleUpdateReportStatus = (taskId, newStatus) => {
    // Logic to update the status of the selected task
    // You can dispatch an action or make an API call here
  };
  const handleAddSolutionHint = (reportId) => {
    // Fetch automated suggestions or handle logic to generate suggestions
    const automatedSuggestions = [
      "Laptop",
      "Bootable Pendrive",
      "Wire" /* Add more suggestions */,
    ];

    // Update solution hints state
    setSolutionHints((prevHints) => ({
      ...prevHints,
      [reportId]: automatedSuggestions,
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
            <Typography>Currently Assigned Tasks: 1</Typography>
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
                    <TableCell>Solution Hints</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell>{report.id}</TableCell>
                      <TableCell>{report.description}</TableCell>
                      <TableCell>{report.status}</TableCell>
                      <TableCell>
                        <FormControl fullWidth>
                          <InputLabel id={`status-label-${report.id}`}>
                            Update Status
                          </InputLabel>
                          <Select
                            labelId={`status-label-${report.id}`}
                            id={`status-select-${report.id}`}
                            value={
                              selectedTask === report.id ? "" : report.status
                            }
                            label="Update Status"
                            onChange={(event) => {
                              setSelectedTask(report.id);
                              handleUpdateReportStatus(
                                report.id,
                                event.target.value
                              );
                            }}
                          >
                            <MenuItem value="Open">Open</MenuItem>
                            <MenuItem value="Resolved">Resolved</MenuItem>
                            {/* Add other status options as needed */}
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                       
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
      {/* </Grid> */}
    </Box>
  );
};

export default StaffDashboard;
