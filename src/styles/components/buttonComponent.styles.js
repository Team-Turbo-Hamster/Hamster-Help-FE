import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.mode === "dark" ? "red" : "blue",
  },
}));

export default useStyles;
