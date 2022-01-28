import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    color: theme.palette.primary.main,
  },
  linkItem: {
    textDecoration: "none",
  },
}));

export default useStyles;
