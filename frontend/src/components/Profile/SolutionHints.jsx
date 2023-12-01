import React from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const SolutionHints = () => {
  const solutionHints = [
    "Restart the computer and check if the issue persists.",
    "Ensure all cables are securely connected.",
    "Update drivers and software to the latest versions.",
    "Run a full antivirus scan to check for malware.",
    "Clear browser cache and cookies for web-related issues.",
  ];

  return (
    <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography variant="h6" gutterBottom>
        Common Solution Hints
      </Typography>
      <List>
        {solutionHints.map((hint, index) => (
          <ListItem key={index}>
            <ListItemText primary={hint} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SolutionHints;
