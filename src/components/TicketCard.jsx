import { Box, Grid, Typography, Avatar, Card, CardMedia } from "@mui/material";
import useStyles from "../styles/components/ticket-card.styles";

const TicketCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <Grid container className={classes.ticketContainer}>
        <Grid item>
          <Avatar />
        </Grid>
        <Grid item xs={10}>
          <Grid container>
            <Grid item>Username</Grid>
            <Grid item>Ticket Title</Grid>

            <Grid item>7 hous ago</Grid>
            <Grid item>tags</Grid>
            <Grid item>icons</Grid>
          </Grid>
        </Grid>
      </Grid>
      <CardMedia />
    </Card>
  );
};

export default TicketCard;
