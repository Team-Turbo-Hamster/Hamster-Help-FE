import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "50%",
    marginTop: "5px",
    marginBottom: "5px",
  },

  avatarContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
