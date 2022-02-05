import React from "react";
import { Box } from "@mui/material";

const CardWrap = ({ children, className, secondary }) => {
  return (
    <Box
      className={className}
      sx={(theme) => ({
        padding: "20px",
        border:
          theme.palette.mode === "light"
            ? "1px solid #b0bec5"
            : theme.palette.secondary.light,
        // border: `1px solid ${theme.palette.primary.light}`,

        borderRadius: "15px",
        boxShadow: `2px 5px ${theme.palette.secondary.dark}`,
        // background: secondary ? "#eff4f7" : theme.palette.secondary.light,
        background: theme.palette.secondary.light,
      })}
    >
      {children}
    </Box>
  );
};

export default CardWrap;
