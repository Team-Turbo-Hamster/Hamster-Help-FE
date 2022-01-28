import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    marginTop: theme.spacing(2),
  },
  ticketContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
}));

export default useStyles;
