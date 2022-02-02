import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    backgroundColor: theme.palette.primary.light,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
  },
}));

export default useStyles;
