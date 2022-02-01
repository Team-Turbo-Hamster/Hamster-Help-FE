import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  avatar: {
    width: 100,
    height: 100,
  },

  paperContainer: {
    padding: theme.spacing(4),
    borderRadius: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  myTicketsContainer: {
    marginTop: theme.spacing(4),
  },

  badge: { marginTop: theme.spacing(5) },
}));

export default useStyles;
