import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  commentContainer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(0, 2, 0, 2),
  },
  menuItem: {
    display: "flex",
    justifyContent: "flex-end",
  },
  comment: {
    paddingTop: theme.spacing(1),
  },
  commentUsernameLink: {
    textDecoration: "none",
    color: "#8b8989",
    "&:hover": {
      color: "#606971",
    },
  },
  avatar: {
    height: 24,
    width: 24,
  },
  bodyContainer: {
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: theme.spacing(1),
    color: blueGrey[900],
  },
}));

export default useStyles;
