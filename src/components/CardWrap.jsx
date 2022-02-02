import React from "react";
import { Box } from "@mui/material";

const CardWrap = ({ children, className, secondary }) => {
  return (
    <Box
      className={className}
      sx={(theme) => ({
        padding: "20px",
        border: "1px solid #b0bec5",
        borderRadius: "15px",
        boxShadow: "2px 5px #78909c",
        // background: secondary ? "#eff4f7" : theme.palette.secondary.light,
        background: theme.palette.secondary.light,
      })}
    >
      {children}
    </Box>
  );
};

export default CardWrap;
