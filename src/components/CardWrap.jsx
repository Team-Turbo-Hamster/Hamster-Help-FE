import React from "react";
import { Box } from "@mui/material";

const CardWrap = ({ children, className }) => {
  return (
    <Box
      className={className}
      sx={(theme) => ({
        padding: "20px",
        border: "1px solid #b0bec5",
        borderRadius: "15px",
        boxShadow: "2px 5px #78909c",
        background: theme.palette.secondary.light,
      })}
    >
      {children}
    </Box>
  );
};

export default CardWrap;
