import React from "react";
import { MenuItem } from "@mui/material";
import { useColorMode } from "../styles/theme";
import useStyles from "../styles/components/buttonComponent.styles";

const ThemeToggle = () => {
  const { toggleColorMode, mode } = useColorMode();
  const classes = useStyles();

  return (
    <MenuItem
      className={classes.button}
      onClick={toggleColorMode}
      variant="contained"
    >
      Toggle Theme (Light/Dark)
    </MenuItem>
  );
};

export default ThemeToggle;
