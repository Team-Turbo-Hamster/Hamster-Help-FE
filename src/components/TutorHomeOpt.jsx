import React from "react";
import { Button, Typography } from "@mui/material";
import useStyles from "../styles/components/homeOptions.styles";
import { useNavigate } from "react-router-dom";

const TutorHomeOpt = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <Button variant="contained" className={classes.button}>
        Open first ticket
      </Button>
      <Button
        variant="contained"
        onClick={() => navigate("/queue")}
        className={classes.button}
      >
        View Queue
      </Button>
    </div>
  );
};

export default TutorHomeOpt;
