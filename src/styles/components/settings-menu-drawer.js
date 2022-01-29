import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    fontWeight: "bold",
  },
  linkItem: {
    textDecoration: "none",
    fontWeight: "bold",
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));

export default useStyles;
