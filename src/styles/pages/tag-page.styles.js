import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
