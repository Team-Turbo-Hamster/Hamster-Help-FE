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
    height: "100%",
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
    maxWidth: "100%",
    maxHeight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.secondary.main,
  },

  bodyRight: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    maxHeight: "100%",
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
    // margin: "450px",
  },
}));

export default useStyles;
