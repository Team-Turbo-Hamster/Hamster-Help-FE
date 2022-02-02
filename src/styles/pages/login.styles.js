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

  mobileTitleContainer: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    direction: "column",
    fontSize: "5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textShadow: "2px 2px #2b6777",
    color: theme.palette.primary.light,
  },
  mobileTitleText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
  },

  smallTitleContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    display: "flex",
    alignItems: "flex-start",
    textShadow: "2px 2px #2b6777",
    color: theme.palette.primary.light,
  },

  titleContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textShadow: "2px 2px #2b6777",
    color: theme.palette.primary.light,
    fontSize: "5rem",
    fontWeight: 900,
  },

  smallTitleText: {
    fontWeight: 400,
    fontSize: "2rem",
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },

  titleText: {
    fontWeight: 900,
    fontSize: "5rem",
  },

  textBodyContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    marginTop: theme.spacing(2),
    alignSelf: "center",
    maxWidth: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textShadow: "2px 2px #2b6777",
    // color: theme.palette.primary.light,
  },

  smallText: {
    fontSize: "1rem",
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
      width: "100%",
      background: theme.palette.secondary.main,
    },

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

  button: {
    backgroundColor: "#2ea08e",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    paddingRight: theme.spacing(8),
    width: "100%",
    height: "auto",
  },
}));

export default useStyles;
