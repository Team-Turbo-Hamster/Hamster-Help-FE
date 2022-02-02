import React from "react";
import { Typography, Box } from "@mui/material";
import useStyles from "../styles/components/text-component.styles";

const TextComponent = ({ variant, text, color, bold }) => {
  const classes = useStyles();
  return (
    <Box className={classes.text}>
      <Typography
        variant={variant}
        sx={(theme) => ({
          color:
            color === "light"
              ? theme.palette.primary.light
              : theme.palette.primary.main,
          fontWeight: "bold",
        })}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default TextComponent;
