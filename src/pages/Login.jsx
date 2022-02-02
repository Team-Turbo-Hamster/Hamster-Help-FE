import Login from "../components/Login";
import { Button, Stack, Grid, Typography } from "@mui/material";
import logo from "../assets/hamsterlogo.png";
import useStyles from "../styles/pages/login.styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../contexts/useAuth";
import { useEffect } from "react";

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <Grid container className="mainContainer">
      <Grid item md={6} className={classes.bodyLeft}>
        <Stack>
          <Grid item className={classes.mobileTitleContainer}>
            <Typography className={classes.mobileTitleText}>Welcome to Hamster Help</Typography>
          </Grid>
          <Grid item className={classes.smallTitleContainer}>
            <Typography className={classes.smallTitleText}>Welcome to</Typography>
          </Grid>
          <Grid item className={classes.titleContainer}>
            <Typography className={classes.titleText}>Hamster Help</Typography>
          </Grid>
          <Grid item className={classes.textBodyContainer}>
            <Typography className={classes.smallText}>
              Hamster help is an all in one helpdesk platform tailored for your institution with bespoke elements for
              both Tutor and Student roles.
            </Typography>
          </Grid>
          <Grid item className={classes.logoContainer}>
            <img className={classes.logo} src={logo} alt="Logo" />
          </Grid>
        </Stack>
      </Grid>
      <Grid className={classes.bodyRight}>
        <Stack className={classes.formStack} spacing={4}>
          <Button className={classes.button} variant="contained">
            Open Stack
          </Button>
          <Login />
          <Button className={classes.button} variant="contained" onClick={() => navigate("/register")}>
            Register
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
