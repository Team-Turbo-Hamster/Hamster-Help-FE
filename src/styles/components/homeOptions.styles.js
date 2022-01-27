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
    width: "100%",
    marginBottom: theme.spacing(4),
  },
  lastButton: {
    width: "100%",
  },
}));

export default useStyles;
