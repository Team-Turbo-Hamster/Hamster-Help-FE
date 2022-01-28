import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  ticketContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;
