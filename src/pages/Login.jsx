import Login from "../components/Login";
import { Button, Box, Container, Grid, Typography } from "@mui/material";
import logo from "../assets/hamsterlogo.png";
import useStyles from "../styles/pages/login.styles";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
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
          <Button>Open Stack</Button> <Login />
        </Grid>
      </Grid>
      <Button onClick={() => navigate("/register")}>Register</Button>
    </Container>
  );
};

export default LoginPage;
