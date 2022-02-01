import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0, 1, 0, 1),
    borderRadius: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "auto",
    // maxWidth: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
  link: {
    textDecoration: "none",
  },
}));

export default useStyles;
