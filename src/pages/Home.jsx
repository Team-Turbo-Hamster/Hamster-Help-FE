import React from "react";
import { Typography, Grid, Box, Container } from "@mui/material";
import useStyles from "../styles/pages/homePage.styles";
import logo from "../assets/hamsterlogo.png";
import StudentHomeOpt from "../components/StudentHomeOpt";
import TutorHomeOpt from "../components/TutorHomeOpt";
import useAuth from "../contexts/useAuth";
import CardWrap from "../components/CardWrap";
import TextComponent from "../components/TextComponent";

const Home = () => {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <Container maxWidth="lg">
      <TextComponent text="Hamster Help" variant="h2" />
      {/* <Typography variant="h2" sx={{ textAlign: "center", marginTop: "20px" }}>
        Hamster Help
      </Typography> */}
      <CardWrap className={classes.cardContainer}>
        <Grid container className={classes.container}>
          <Grid item xs={12} className={classes.gridItem}></Grid>
          <Grid item xs={12} className={classes.gridLogoItem}>
            <img
              className={classes.logo}
              src={logo}
              width={"60%"}
              height={"auto"}
              alt="Logo"
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            {user.role === "Student" ? <StudentHomeOpt /> : <TutorHomeOpt />}
          </Grid>
        </Grid>
      </CardWrap>
    </Container>
  );
};

export default Home;
