import Registration from "../components/Registration";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Stack, Typography } from "@mui/material";
import useStyles from "../styles/pages/register.styles";
import logo from "../assets/hamsterlogo.png";

const Register = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item className={classes.bodyLeft}>
        <Stack>
          <Grid item>
            <Typography className={classes.smallTitleText} variant="h5">
              Please register for access
            </Typography>
          </Grid>
          <Grid item>
            <img className={classes.logo} src={logo} width={"100%"} height={"auto"} alt="Logo" />
          </Grid>
        </Stack>
      </Grid>
      <Grid container className={classes.bodyRight}>
        <Stack>
          <Grid item>
            <Typography className={classes.mobileTitleText} variant="h5">
              Please register for access
            </Typography>
          </Grid>
          <Grid item className={classes.formStack}>
            <Registration />
            <Button className={classes.button} variant="contained" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Register;
