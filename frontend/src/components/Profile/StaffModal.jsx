import React, { useState } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  Chip,
  IconButton,
} from "@mui/material";
import { Add as AddIcon, Close as CloseIcon } from "@mui/icons-material";
import ReviewSuggestions from "../Reports/ReviewSuggestions";

const StaffModal = ({ isOpen, onClose, onAddHints }) => {
  const [newHint, setNewHint] = useState("");
  const [hints, setHints] = useState([]);

  const handleAddHint = () => {
    if (newHint.trim() !== "") {
      setHints([...hints, newHint]);
      setNewHint("");
    }
  };

  const handleRemoveHint = (index) => {
    const updatedHints = hints.filter((_, i) => i !== index);
    setHints(updatedHints);
  };

  const handleAddHintsAndClose = () => {
    onAddHints(hints);
    setNewHint("");
    setHints([]);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Add Solution Hints
        </Typography>
        <TextField
          label="New Hint"
          fullWidth
          margin="normal"
          variant="outlined"
          value={newHint}
          onChange={(e) => setNewHint(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddHint}
          startIcon={<AddIcon />}
        >
          Add Hint
        </Button>
        <Box mt={2}>
          {hints.map((hint, index) => (
            <Chip
              key={index}
              label={hint}
              onDelete={() => handleRemoveHint(index)}
              sx={{ margin: 0.5 }}
            />
          ))}
        </Box>
        <ReviewSuggestions
          onSubmit={(selectedSuggestions, comments) =>
            console.log(selectedSuggestions, comments)
          }
          suggestions={hints}
        ></ReviewSuggestions>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <IconButton onClick={onClose} color="primary">
            <CloseIcon />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddHintsAndClose}
          >
            Add Hints
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default StaffModal;
