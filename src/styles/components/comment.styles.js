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
  dateSpan: {
    marginLeft: theme.spacing(1),
    color: "#ccc",
  },
  commentUsernameLink: {
    marginRight: theme.spacing(1),
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
    border: `2px solid ${theme.palette.primary.light}`,
    borderRadius: "15px",
    padding: theme.spacing(1),
    color: blueGrey[900],
  },
  nameContainer: {
    color: theme.palette.primary.dark,
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
