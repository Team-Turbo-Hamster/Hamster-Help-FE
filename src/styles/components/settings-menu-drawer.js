import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
  linkItem: {
    textDecoration: "none",
  },
}));

export default useStyles;
