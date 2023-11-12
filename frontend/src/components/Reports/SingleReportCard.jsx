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

const SingleReportCard = ({ report, history }) => {
  console.log("From Single Report Card:", report, history);
  const [spanColor, setSpanColor] = React.useState("warning");


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
            content: '"vertical"',
            display: "block",
            position: "absolute",
            right: "0.5rem",
            color: "text.tertiary",
            fontSize: "sm",
            fontWeight: "lg",
          },
          "&::after": {
            top: "4px",
            content: '"horizontal"',
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
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
            src={"http://localhost:8000/uploads/" + report?.asset?.image_name}
            srcSet={"http://localhost:8000/uploads/" + report?.asset?.image_name}
            loading="lazy"
            alt={report?.asset?.name}
          />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            <Avatar
              alt={report?.user?.name}
              src="/static/images/avatar/1.jpg"
            />
            {report?.user?.name}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
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
                    badgeContent={1}
                    color={spanColor}
                  ></Badge>
                </div>
              </Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Report Details
              </Typography>
              <Typography fontWeight="lg">{report?.report_description}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Report Type
              </Typography>
              <Typography fontWeight="lg">{report?.report_type}</Typography>
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
                    badgeContent={1}
                    color={spanColor}
                  ></Badge>
                </div>
              </Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Asset
              </Typography>
              <Typography fontWeight="lg">{report?.asset?.name}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Expire Date
              </Typography>
              <Typography fontWeight="lg">{report?.asset?.expired_at}</Typography>
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
              <Typography fontWeight="lg">{report?.room?.room_number}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Location Type
              </Typography>
              <Typography fontWeight="lg">{report?.room?.room_type?.type_name}</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Chat
            </Button>
            <Button variant="solid" color="primary">
              Email
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SingleReportCard;
