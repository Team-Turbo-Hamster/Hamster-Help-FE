import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  mainContainer: {
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },

  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textShadow: "2px 2px #2b6777",
    color: theme.palette.primary.light,
  },

  bodyLeft: {
    [theme.breakpoints.down("md")]: {
      minHeight: "50vh",
    },
    maxWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.secondary.main,
  },

  bodyRight: {
    [theme.breakpoints.down("md")]: {
      minHeight: "50vh",
      background: theme.palette.secondary.main,
    },
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.primary.light,
  },

  formStack: {
    padding: "20px",
    border: "1px solid #b0bec5",
    borderRadius: "15px",
    boxShadow: "2px 5px #78909c",
    background: theme.palette.secondary.light,
  },

  logo: {
    paddingRight: theme.spacing(8),
  },
}));

export default useStyles;
