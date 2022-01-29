import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: theme.spacing(5),
    cursor: "pointer",
  },

  imageItem: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
