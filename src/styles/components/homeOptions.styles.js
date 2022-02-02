import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    // padding: theme.spacing(0, 10, 4, 10),
  },
  button: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    width: "30%",
    marginBottom: theme.spacing(4),
  },
  lastButton: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    width: "30%",
  },
}));

export default useStyles;
