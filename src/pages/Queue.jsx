import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Card } from "@mui/material";
import useStyles from "../styles/pages/queue.styles";
import TicketCard from "../components/TicketCard";
import { getAllTickets } from "../utils/ticketRequests";

const Queue = () => {
  const [tickets, setTickets] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAllTickets().then((data) => setTickets(data));
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container className={classes.container}>
        <Grid xs={12} item>
          <Typography variant="h5">Queue</Typography>
        </Grid>
        <Grid xs={12} item>
          {tickets.map((ticket, i) => (
            <TicketCard key={`${ticket.title}${i}`} ticket={ticket} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Queue;
