import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Card } from "@mui/material";
import useStyles from "../styles/pages/queue.styles";
import TicketCard from "../components/TicketCard";
import { getAllTickets, getUnresolvedTickets } from "../utils/ticketRequests";
import TicketsList from "../components/TicketsList";

const Queue = () => {
  const [tickets, setTickets] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getUnresolvedTickets().then((data) => setTickets(data));
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container className={classes.container}>
        <Grid xs={12} item>
          <Typography variant="h5">Queue</Typography>
        </Grid>
        <Grid xs={12} item>
          <TicketsList tickets={tickets} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Queue;
