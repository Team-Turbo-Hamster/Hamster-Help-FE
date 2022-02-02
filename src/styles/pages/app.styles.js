import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.primary.light
        : theme.palette.primary.dark,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
  },
}));

export default useStyles;
