import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

const ReviewSuggestions = ({ suggestions, onSubmit }) => {
  const [selectedSuggestions, setSelectedSuggestions] = useState([]);
  const [comments, setComments] = useState("");

  const handleCheckboxChange = (suggestion) => {
    const newSelectedSuggestions = selectedSuggestions.includes(suggestion)
      ? selectedSuggestions.filter(
          (selectedSuggestion) => selectedSuggestion !== suggestion
        )
      : [...selectedSuggestions, suggestion];

    setSelectedSuggestions(newSelectedSuggestions);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = () => {
    // Pass selected suggestions and comments to the parent component
    onSubmit(selectedSuggestions, comments);
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <Typography variant="p" fontWeight="lg">
            Comment Suggestions
          </Typography>
        </div>
        <div className="card-body">
          {suggestions?.length > 0 ? (
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSuggestions.includes(suggestion)}
                        onChange={() => handleCheckboxChange(suggestion)}
                      />
                    }
                    label={suggestion}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <Typography variant="p" fontWeight="lg">
              No suggestions available.
            </Typography>
          )}

          <TextField
            id="comments"
            label="Comments"
            multiline
            rows={4}
            fullWidth
            value={comments}
            onChange={handleCommentsChange}
            variant="outlined"
            style={{ marginTop: "16px" }}
          />

          <Box mt={2}>
            <Button  color="success" onClick={handleSubmit}>Submit Review</Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ReviewSuggestions;