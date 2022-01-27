import React from "react";
import { Typography, Grid, Box, Container } from "@mui/material";
import useStyles from "../styles/pages/homePage.styles";
import logo from "../assets/hamsterlogo.png";
import StudentHomeOpt from "../components/StudentHomeOpt";
import TutorHomeOpt from "../components/TutorHomeOpt";
import useAuth from "../contexts/useAuth";

const Home = () => {
  const classes = useStyles();
  const { user } = useAuth();
  return (
    <Container maxWidth="lg">
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Welcome to hamster help
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridLogoItem}>
          <img className={classes.logo} src={logo} width={"60%"} height={"auto"} alt="Logo" />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          {/* {user.role === "Student" ? <StudentHomeOpt /> : <TutorHomeOpt />} */}
          <TutorHomeOpt />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
