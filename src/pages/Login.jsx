import Login from "../components/Login";
import { Button, Box, Container, Grid, Typography } from "@mui/material";
import logo from "../assets/hamsterlogo.png";
import useStyles from "../styles/pages/login.styles";

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item>
          <Typography variant="h2"> Welcome to Hamster Help </Typography>
        </Grid>
        <Grid item>
          <img className={classes.logo} src={logo} width={"60%"} height={"auto"} alt="Logo" />{" "}
        </Grid>
        <Grid item>
          <Button>Open Stack</Button> <Login />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
