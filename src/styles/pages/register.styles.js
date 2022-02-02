import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textShadow: "2px 2px #2b6777",
    color: theme.palette.primary.light,
  },

  smallTitleText: {
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    fontSize: "3rem",
    fontWeight: 800,
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textShadow: "2px 2px #2b6777",
    color: theme.palette.primary.light,
  },

  bodyLeft: {
    [theme.breakpoints.down("md")]: {
      display: "none",
      minHeight: "5vh",
      width: "100%",
      paddingTop: "20px",
      paddingBottom: "19px",
    },
    width: "50%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.secondary.main,
  },

  logo: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    paddingRight: theme.spacing(8),
  },

  bodyRight: {
    [theme.breakpoints.down("md")]: {
      minHeight: "50vh",
      background: theme.palette.secondary.main,
      paddingBottom: "12px",
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
    overflow: "auto",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
    padding: "10px",
    border: "1px solid #b0bec5",
    borderRadius: "15px",
    boxShadow: "2px 5px #78909c",
    background: theme.palette.secondary.light,
  },

  avatar: {
    boxShadow: "2px 5px #78909c",
  },

  mobileTitleText: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    fontSize: "2rem",
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textShadow: "2px 2px #2b6777",
    color: theme.palette.primary.light,
  },

  button: {
    width: "50%",
    marginTop: "5px",
    marginBottom: "5px",
  },
}));

export default useStyles;
