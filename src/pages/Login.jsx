import LoginForm from "../components/LoginForm";
import { Button, Box, Container, Grid, Typography } from "@mui/material";
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
    <Container maxWidth="md">
      <Grid container>
        <Grid item>
          <Typography variant="h2"> Welcome to Hamster Help </Typography>
        </Grid>
        <Grid item>
          <img
            className={classes.logo}
            src={logo}
            width={"60%"}
            height={"auto"}
            alt="Logo"
          />{" "}
        </Grid>
        <Grid item>
          <Button>Open Stack</Button> <LoginForm />
        </Grid>
      </Grid>
      <Button onClick={() => navigate("/register")}>Register</Button>
    </Container>
  );
};

export default LoginPage;
