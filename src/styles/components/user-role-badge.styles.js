import { makeStyles } from "@mui/styles";
import { red } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: theme.spacing(20),
  },
}));

export default useStyles;
