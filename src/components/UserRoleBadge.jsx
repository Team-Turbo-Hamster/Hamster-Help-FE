import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import useStyles from "../styles/components/user-role-badge.styles";
import { red, blue } from "@mui/material/colors";

const UserRoleBadge = ({ role }) => {
  const classes = useStyles();
  const userRole = role.toLowerCase();

  return (
    <Paper
      sx={{
        backgroundColor: userRole === "student" ? blue[500] : red[500],
      }}
      elevation={1}
      component={Box}
      className={classes.container}
    >
      <Typography variant="body1" sx={{ color: "white", fontWeight: "bold" }}>
        {userRole.toLowerCase()}
      </Typography>
    </Paper>
  );
};

export default UserRoleBadge;
