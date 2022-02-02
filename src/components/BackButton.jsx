import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => navigate(-1)}
      sx={(theme) => ({
        color: theme.palette.primary.dark,
      })}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
