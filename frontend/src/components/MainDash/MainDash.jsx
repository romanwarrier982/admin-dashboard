import React, { useEffect } from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import {
  Container,
  Grid,
  Card,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ReportIcon from "@mui/icons-material/Report";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PreviewIcon from "@mui/icons-material/Preview";
import StorageIcon from "@mui/icons-material/Storage";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./MainDash.css";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const MainDash = () => {
 
  return (
    <div className="MainDash">
      <h1 style={{ paddingTop: "2rem" }}>Dashboard</h1>
      {/* <Cards /> */}
      <div style={{ padding: "2dp" }} className="text-center">
        <Container className=" card user-analytics-container">
          <Typography className="card-header" variant="h4">
            <AnalyticsIcon fontSize="lg" variant="h1"></AnalyticsIcon>
            System Analytics
          </Typography>

          <Grid container spacing={3} className=" card-body analytics-section">
            <Grid item md={4}>
              <Card
                className="analytics-card"
                sx={{ backgroundColor: "#E3F2FD", boxShadow: 3 }}
              >
                <PeopleIcon style={{ fontSize: 48, color: "#2196F3" }} />
                <Typography variant="h6">Total Users</Typography>
                {/* Add logic to display total users */}
                <Typography variant="body1">Users: 300</Typography>
                <Typography variant="body1">Admins: 150</Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PreviewIcon />}
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PictureAsPdfIcon />}
                  >
                    PDF
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<ListAltIcon />}
                  >
                    Excel
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item md={4}>
              <Card
                className="analytics-card"
                sx={{ backgroundColor: "#C8E6C9", boxShadow: 3 }}
              >
                <PeopleIcon style={{ fontSize: 48, color: "#4CAF50" }} />
                <Typography variant="h6">Employees</Typography>
                {/* Add logic to display full-time and part-time teachers */}
                <Typography variant="body1">Full-time: 300</Typography>
                <Typography variant="body1">Part-time: 150</Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PreviewIcon />}
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PictureAsPdfIcon />}
                  >
                    PDF
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<ListAltIcon />}
                  >
                    Excel
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item md={4}>
              <Card
                className="analytics-card"
                sx={{ backgroundColor: "#FFECB3", boxShadow: 3 }}
              >
                <PeopleIcon style={{ fontSize: 48, color: "#FFC107" }} />
                <Typography variant="h6">IT Staff</Typography>
                {/* Add logic to display engaged and idle IT staff */}
                <Typography variant="body1">Engaged: 80</Typography>
                <Typography variant="body1">Idle: 20</Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PreviewIcon />}
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PictureAsPdfIcon />}
                  >
                    PDF
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<ListAltIcon />}
                  >
                    Excel
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={3} className=" card-body analytics-section">
            <Grid item md={4}>
              <Card
                className="analytics-card"
                sx={{ backgroundColor: "#FCE4EC", boxShadow: 3 }}
              >
                <ReportIcon style={{ fontSize: 48, color: "#E91E63" }} />
                <Typography variant="h6">Total Issues</Typography>
                {/* Add logic to display total issues */}
                <Typography variant="body1">500</Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PreviewIcon />}
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PictureAsPdfIcon />}
                  >
                    PDF
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<ListAltIcon />}
                  >
                    Excel
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item md={4}>
              <Card
                className="analytics-card"
                sx={{ backgroundColor: "#FFCCBC", boxShadow: 3 }}
              >
                <ReportIcon style={{ fontSize: 48, color: "#FF5722" }} />
                <Typography variant="h6">Pending Issues</Typography>
                {/* Add logic to display pending issues */}
                <Typography variant="body1">200</Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PreviewIcon />}
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PictureAsPdfIcon />}
                  >
                    PDF
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<ListAltIcon />}
                  >
                    Excel
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item md={4}>
              <Card
                className="analytics-card"
                sx={{ backgroundColor: "#E1BEE7", boxShadow: 3 }}
              >
                <ReportIcon style={{ fontSize: 48, color: "#9C27B0" }} />
                <Typography variant="h6">Resolved Issues</Typography>
                {/* Add logic to display resolved issues */}
                <Typography variant="body1">300</Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PreviewIcon />}
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PictureAsPdfIcon />}
                  >
                    PDF
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<ListAltIcon />}
                  >
                    Excel
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={3} className=" card-body analytics-section">
            <Grid item md={4}>
              <Card
                className="analytics-card"
                sx={{ backgroundColor: "#D7CCC8", boxShadow: 3 }}
              >
                <StorageIcon style={{ fontSize: 48, color: "#795548" }} />
                <Typography variant="h6">Total Assets</Typography>
                {/* Add logic to display total assets */}
                <Typography variant="body1">1000</Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PreviewIcon />}
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PictureAsPdfIcon />}
                  >
                    PDF
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<ListAltIcon />}
                  >
                    Excel
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item md={4}>
              <Card
                className="analytics-card"
                sx={{ backgroundColor: "#B0BEC5", boxShadow: 3 }}
              >
                <StorageIcon style={{ fontSize: 48, color: "#607D8B" }} />
                <Typography variant="h6">Warranty Expired Assets</Typography>
                {/* Add logic to display warranty expired assets */}
                <Typography variant="body1">100</Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PreviewIcon />}
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PictureAsPdfIcon />}
                  >
                    PDF
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<ListAltIcon />}
                  >
                    Excel
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item md={4}>
              <Card
                className="analytics-card"
                sx={{ backgroundColor: "#FFCC80", boxShadow: 3 }}
              >
                <StorageIcon style={{ fontSize: 48, color: "#FF9800" }} />
                <Typography variant="h6">Disposed Assets</Typography>
                {/* Add logic to display disposed assets */}
                <Typography variant="body1">50</Typography>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PreviewIcon />}
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<PictureAsPdfIcon />}
                  >
                    PDF
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<ListAltIcon />}
                  >
                    Excel
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Table />
      <hr />
    </div>
  );
};

export default MainDash;
