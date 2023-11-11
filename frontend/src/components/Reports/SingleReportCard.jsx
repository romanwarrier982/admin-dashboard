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
  // 'Pending', 'Resolved', 'Closed', 'In Progress','Opened', 'Active'

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
            src={report?.asset?.image_name}
            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
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
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Report Details : {report?.report_description}
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
                {"  "}
                <Badge
                  badgeContent={report?.report_status}
                  color={spanColor}
                ></Badge>
              </Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Asset
              </Typography>
              <Typography fontWeight="lg">980</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Room
              </Typography>
              <Typography fontWeight="lg">8.9</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Chat
            </Button>
            <Button variant="solid" color="primary">
              Follow
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SingleReportCard;
