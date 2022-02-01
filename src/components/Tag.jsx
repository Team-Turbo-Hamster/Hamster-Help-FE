import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import useStyles from "../styles/components/tag.styles";
import { Link } from "react-router-dom";

const Tag = ({ tag }) => {
  const classes = useStyles();

  return (
    <Link to={`/tickets/tag/${tag.toLowerCase()}`} className={classes.link}>
      <Paper
        sx={{
          backgroundColor: teal[500],
        }}
        elevation={3}
        component={Box}
        className={classes.container}
      >
        <Typography variant="caption" sx={{ color: "white" }}>
          #{tag.toLowerCase()}
        </Typography>
      </Paper>
    </Link>
  );
};

export default Tag;
