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
          <Grid item className={classes.titleContainer}>
            <Typography className="titleText" variant="h2">
              Welcome to Hamster Help
            </Typography>
          </Grid>
          <Grid item>
            <img className={classes.logo} src={logo} width={"60%"} height={"auto"} alt="Logo" />
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
