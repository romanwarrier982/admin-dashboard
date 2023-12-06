import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Modal from "@mui/material/Modal";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { getRoles } from "../../redux/actions/roleAction";
import {
  getUsers,
  getUsersByRoleId,
} from "../../redux/actions/userManagementAction";
import { TaskAltOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import { updateReportStatus } from "../../redux/actions/reportAction";
import aiIcon from "../../imgs/ai_icon.gif";

const SingleReportCard = ({ report, history, component }) => {
  const auth = useSelector((state) => state.auth);

  console.log("From Single Report Card:", report, history, component);
  const [spanColor, setSpanColor] = React.useState("warning");
  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    setOpen(true);
    setSelectedReport(report.id);
    //get Report ID
    console.log("Selected report", report.id);
  };
  const handleClose = () => setOpen(false);
  const roleList = useSelector((state) => state.roles);
  const userList = useSelector((state) => state.users);
  const [selectedReport, setSelectedReport] = React.useState("");
  const [assigned_description, setAssignedDescription] = React.useState(" ");
  const dispatch = useDispatch();
  const [role, setRole] = React.useState({ id: "", name: "" });
  const [user, setUser] = React.useState({ id: "", name: "", email: "" });
  const [page, setActivePage] = React.useState({
    page: 1,
  });
  React.useEffect(() => {
    dispatch(getRoles());
    console.log("Role:", roleList);
  }, [dispatch]);

  const handleChange = (event) => {
    setRole(event.target.value);
    dispatch(getUsersByRoleId(role));
  };

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  };

  const handleEmailButtonClick = (e) => {
    e.preventDefault();
    const subject = `Update on your report ${report?.id}- ${report?.report_description}`;

    const body = `Greetings,
    We are pleased to inform you that your report on ${report?.asset?.name}-${report?.asset?.invoice_id}  has been ${report?.report_status} by our team.
    Thank you for your patience and understanding.
    Regards,
    ${auth.userData.name}
    `;

    window.location.href = `mailto:${
      report?.user?.email
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleUpdateReport = (e) => {
    e.preventDefault();
    const updateReportData = {
      id: selectedReport,
      assigned_by: auth.id,
      assigned_to: user,
      report_status: "Pending",
      assigned_description: assigned_description,
      assigned_status: "Assigned",
      userInfo: auth,
    };
    dispatch(updateReportStatus(updateReportData));
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  React.useEffect(() => {
    if (report?.report_status === "Pending") {
      setSpanColor("warning");
    } else if (report?.report_status === "Resolved") {
      setSpanColor("success");
    } else if (report?.report_status === "Closed") {
      setSpanColor("error");
    } else if (report?.report_status === "In Progress") {
      setSpanColor("info");
    } else if (report?.report_status === "Opened") {
      setSpanColor("info");
    } else if (report?.report_status === "Active") {
      setSpanColor("info");
    }
  }, [report?.report_status]);

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{ minWidth: 120 }}>
              
              <FormControl fullWidth>
                
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Age"
                  onChange={handleChange}
                >
                  {roleList ? (
                    roleList?.map((role) => (
                      <MenuItem value={role.id}>{role.name}</MenuItem>
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
                <InputLabel id="demo-simple-select-label">Users</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={user}
                  label="Age"
                  onChange={handleChangeUser}
                >
                  {userList.length ? (
                    userList?.map((user) => (
                      <MenuItem value={user.id}>
                        {user.name} - {user.email}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value={1}>No Result Found</MenuItem>
                  )}
                </Select>
                <br></br>
                <div className="form-group py-2">
                  <label htmlFor="name">Assignment Comments</label>
                  <input
                    type="textarea"
                    name="name"
                    value={assigned_description}
                    onChange={(e) => setAssignedDescription(e.target.value)}
                    className="form-control"
                  />
                </div>
                <Button onClick={handleUpdateReport}>
                  <TaskAltOutlined></TaskAltOutlined> Assign Task
                </Button>
                <CardActionArea alignContent="center">
                  <Typography variant="p" fontWeight="lg">
                    <img src={aiIcon}></img>
                    Top Suggestions
                  </Typography>
                </CardActionArea>
              </FormControl>
            </Box>
          </Box>
        </Modal>
      </div>

      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: { xs: "auto", sm: "initial" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: "block",
            width: "1px",
            bgcolor: "warning.300",
            left: "500px",
            top: "-24px",
            bottom: "-24px",
            "&::before": {
              top: "4px",

              display: "block",
              position: "absolute",
              right: "0.5rem",
              color: "text.tertiary",
              fontSize: "sm",
              fontWeight: "lg",
            },
            "&::after": {
              top: "4px",

              display: "block",
              position: "absolute",
              left: "0.5rem",
              color: "text.tertiary",
              fontSize: "sm",
              fontWeight: "lg",
            },
          }}
        />
        <Card
          orientation="horizontal"
          sx={{
            width: "100%",
            flexWrap: "wrap",
            [`& > *`]: {
              "--stack-point": "500px",
              minWidth:
                "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
            },
            // make the card resizable for demo
            overflow: "auto",
            resize: "horizontal",
          }}
        >
          <AspectRatio
            objectFit="contain"
            flex
            ratio="1"
            maxHeight={182}
            sx={{ minWidth: 182 }}
          >
            <img
              src={"http://localhost:8000/uploads/" + report?.asset?.image_name}
              srcSet={
                "http://localhost:8000/uploads/" + report?.asset?.image_name
              }
              loading="lazy"
              alt={report?.asset?.name}
            />
          </AspectRatio>
          <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
              <Avatar
                alt={report?.user?.name}
                src="http://localhost:8000/uploads/user.png"
              />
              {report?.user?.name}
            </Typography>
            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="text.tertiary"
            >
              {report?.user?.role?.name}
              <br></br>
              email : {report?.user?.email}
            </Typography>

            <Sheet
              sx={{
                bgcolor: "background.level1",
                borderRadius: "sm",
                p: 1.5,
                my: 1.5,
                display: "flex",
                gap: 2,
                "& > div": { flex: 1 },
              }}
            >
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Report Status
                </Typography>
                <Typography fontWeight="lg">
                  {report?.report_status}
                  <div
                    style={{
                      marginLeft: "10px",
                      paddingLeft: "10px",
                      alignContent: "center",
                    }}
                  >
                    <Badge
                      badgeContent={history?.length}
                      color={spanColor}
                    ></Badge>
                  </div>
                </Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Report Details
                </Typography>
                <Typography fontWeight="lg">
                  {report?.report_description}
                </Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Report Type
                </Typography>
                <Typography fontWeight="lg">{report?.report_type}</Typography>
              </div>
            </Sheet>

            {auth.userData.role.name === "Admin" ||
              (auth.userData.role.name === "Super Admin" && (
                <>
                  <Sheet
                    sx={{
                      bgcolor: "background.level1",
                      borderRadius: "sm",
                      p: 1.5,
                      my: 1.5,
                      display: "flex",
                      gap: 2,
                      "& > div": { flex: 1 },
                    }}
                  >
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Asset Status
                      </Typography>
                      <Typography fontWeight="lg">
                        {report?.asset?.status}
                        <div
                          style={{
                            marginLeft: "10px",
                            paddingLeft: "10px",
                            alignContent: "center",
                          }}
                        >
                          <Badge
                            badgeContent={report?.asset?.count}
                            color={spanColor}
                          ></Badge>
                        </div>
                      </Typography>
                    </div>
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Asset
                      </Typography>
                      <Typography fontWeight="lg">
                        {report?.asset?.name}
                      </Typography>
                    </div>
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Expire Date
                      </Typography>
                      <Typography fontWeight="lg">
                        {report?.asset?.expired_at}
                      </Typography>
                    </div>
                  </Sheet>
                  <Sheet
                    sx={{
                      bgcolor: "background.level1",
                      borderRadius: "sm",
                      p: 1.5,
                      my: 1.5,
                      display: "flex",
                      gap: 2,
                      "& > div": { flex: 1 },
                    }}
                  >
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Location Status
                      </Typography>
                      <Typography fontWeight="lg">
                        {"  "}
                        {report?.room?.room_status}
                        <div
                          style={{
                            marginLeft: "10px",
                            paddingLeft: "10px",
                            alignContent: "center",
                          }}
                        >
                          {/* <Badge
                      badgeContent={report?.room?.room_status}
                      color={spanColor}
                    ></Badge> */}
                        </div>
                      </Typography>
                    </div>
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Room Number
                      </Typography>
                      <Typography fontWeight="lg">
                        {report?.room?.room_number}
                      </Typography>
                    </div>
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Location Type
                      </Typography>
                      <Typography fontWeight="lg">
                        {report?.room?.room_type?.type_name}
                      </Typography>
                    </div>
                  </Sheet>

                  <Sheet
                    sx={{
                      bgcolor: "background.level1",
                      borderRadius: "sm",
                      p: 1.5,
                      my: 1.5,
                      display: "flex",
                      gap: 2,
                      "& > div": { flex: 1 },
                    }}
                  >
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Suggested Staff
                      </Typography>
                      <Typography fontWeight="lg">
                        <img src={aiIcon}></img>
                      </Typography>
                    </div>
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Staff
                      </Typography>
                      <Typography fontWeight="lg">
                        <div className="row">
                          <Avatar sx={{ bgcolor: "wheat", mb: 1 }}>J</Avatar>
                          <Avatar sx={{ bgcolor: "wheat", mb: 1 }}>S</Avatar>
                        </div>
                        <Typography level="body-xs" fontWeight="lg">
                          John +5 more
                        </Typography>
                      </Typography>
                    </div>
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Skills
                      </Typography>
                      <Typography alignItems="center" fontWeight="lg">
                        <Badge
                          badgeContent="Networking"
                          color={spanColor}
                        ></Badge>
                      </Typography>

                      <Typography alignItems="center" fontWeight="lg">
                        <Badge
                          badgeContent="Troubleshooting"
                          color={spanColor}
                        ></Badge>
                      </Typography>
                      <Typography alignItems="center" fontWeight="lg">
                        <Badge
                          badgeContent="Problem_Solving"
                          color={spanColor}
                        ></Badge>
                      </Typography>
                    </div>
                  </Sheet>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.5,
                      "& > button": { flex: 1 },
                    }}
                  >
                    <Button variant="outlined" color="neutral">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/reportHistory/${report?.id}`}
                      >
                        History
                        {/* <RemoveRedEyeOutlined color="success" /> View */}
                      </Link>
                    </Button>
                    <Button
                      onClick={handleEmailButtonClick}
                      variant="solid"
                      color="primary"
                    >
                      Email
                    </Button>

                    {(component.component === "ReportList" &&
                      (report?.report_status === "Pending" ||
                      report?.report_status === "Active" )&& (
                        <Button
                          onClick={handleOpen}
                          variant="solid"
                          color="success"
                        >
                          Assign Task
                        </Button>
                      ) ||
                      (report?.report_status === "In Progress" && (
                        <Button
                          onClick={handleOpen}
                          variant="solid"
                          color="warning"
                        >
                          Forward Task
                        </Button>
                      )))}
                  </Box>
                </>
              ))}
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default SingleReportCard;
