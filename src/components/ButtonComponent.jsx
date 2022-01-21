import React from "react";
import { Button } from "@mui/material";
import { useColorMode } from "../styles/theme";
import useStyles from "../styles/components/buttonComponent.styles";

const ButtonComponent = () => {
  const { toggleColorMode, mode } = useColorMode();
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      onClick={toggleColorMode}
      variant="contained"
    >
      Button
    </Button>
  );
};

export default ButtonComponent;
