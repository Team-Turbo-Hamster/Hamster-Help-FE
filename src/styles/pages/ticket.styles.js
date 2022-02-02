import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ticketContainer: {
    marginTop: theme.spacing(4),
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(2),
  },
  bodyPaper: {
    padding: theme.spacing(2),
    margin: theme.spacing(4, 0, 4, 0),
    borderRadius: "15px",
    width: "100%",
    border: `2px solid ${theme.palette.primary.light}`,
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
  },
  dateContainer: {
    paddingTop: theme.spacing(2),
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: theme.spacing(2),
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userNameLink: {
    textDecoration: "none",
    color: "inherit",
  },
  commentSectionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: theme.spacing(5),
  },
  privateChipContainer: {
    marginTop: theme.spacing(2),
  },

  headerCardWrap: {
    width: "100%",
  },
  buttonCardWrap: {
    width: "100%",
    display: "flex",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ticketBodyWrap: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  commentsCardWrap: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
