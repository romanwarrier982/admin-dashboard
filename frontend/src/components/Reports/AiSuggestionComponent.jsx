import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import OpenAI from "openai";

const AiSuggestionComponent = ({ onSelectHint }) => {
  const [resolvedHints, setResolvedHints] = useState([]);
  const [selectedHints, setSelectedHints] = useState([]);

  useEffect(() => {
    const generateHints = async () => {
      try {
        // Create a new instance of OpenAI with your API key
        const openai = new OpenAI({
      
          dangerouslyAllowBrowser: true // Replace with your actual API key
        });

    
        const response = await openai.completions.create({
          model: "gpt-3.5-turbo",
          prompt: "Generate three IT support hints.",
          max_tokens: 100,
        });

        console.log("Response:", response);

        // Extract hints from the API response
        const newHints = response.choices.map((choice) => choice.text.trim());

        setResolvedHints(newHints);
      } catch (error) {
        console.error("Error fetching hints from OpenAI:", error);
      }
    };

    generateHints();
  }, []);

  const handleCheckboxChange = (hint) => {
    const newSelectedHints = selectedHints.includes(hint)
      ? selectedHints.filter((selectedHint) => selectedHint !== hint)
      : [...selectedHints, hint];

    setSelectedHints(newSelectedHints);
    onSelectHint(newSelectedHints);
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <Typography variant="p" fontWeight="lg">
            Have you tried these?
          </Typography>
        </div>
        <div className="card-body">
          {resolvedHints.length > 0 ? (
            <ul>
              {resolvedHints.map((hint, index) => (
                <li key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedHints.includes(hint)}
                        onChange={() => handleCheckboxChange(hint)}
                      />
                    }
                    label={hint}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <Typography variant="p" fontWeight="lg">
              No hints available.
            </Typography>
          )}
        </div>
      </div>
    </>
  );
};

export default AiSuggestionComponent;
