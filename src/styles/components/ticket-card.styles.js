import { makeStyles } from "@mui/styles";
import { cyan } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.mode === "light" && cyan[50],
  },
  ticketContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  ticketContent: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    paddingLeft: theme.spacing(1),
  },
  dateContainer: {
    // paddingTop: theme.spacing(1),
  },
  titleContainer: {
    paddingTop: theme.spacing(1),
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingTop: theme.spacing(1),
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  commentsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    paddingTop: theme.spacing(2),
  },
}));

export default useStyles;
