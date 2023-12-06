import React from "react";
import { Avatar, Badge, Typography, Paper } from "@mui/material";

const EmployeeBadge = ({ name, skills, avatarColor, badgeColor, badgeContent }) => {
  return (
    <Paper
      sx={{
        bgcolor: "background.level1",
        borderRadius: "sm",
        p: 1.5,
        my: 1.5,
        display: "flex",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Avatar sx={{ bgcolor: avatarColor }}>{name[0]}</Avatar>
      <div>
        <Typography level="body-xs" fontWeight="lg">
          Employee
        </Typography>
        <Typography fontWeight="lg">{name}</Typography>
      </div>
      <div>
        <Typography level="body-xs" fontWeight="lg">
          Skills
        </Typography>
        <Typography component="div">
          {skills.map((skill, index) => (
            <span key={index} style={{ marginRight: "5px", color: badgeColor }}>
              {skill}
            </span>
          ))}
        </Typography>
      </div>
      <Badge badgeContent={badgeContent} color={badgeColor}></Badge>
    </Paper>
  );
};

// Example usage
const report = {
  asset: {
    status: "In Progress",
    count: 3,
    name: "Laptop",
    expired_at: "2024-12-31",
  },
};

const App = () => {
  const employee = {
    name: "John Doe",
    skills: ["Troubleshooting", "Communication", "Problem Solving"],
    avatarColor: "#3498db", // You can set your desired color
    badgeColor: "primary", // You can set your desired MUI color
    badgeContent: report?.asset?.count,
  };

  return <EmployeeBadge {...employee} />;
};

export default EmployeeBadge;
