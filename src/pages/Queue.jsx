import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Card } from "@mui/material";
import useStyles from "../styles/pages/queue.styles";
import TicketCard from "../components/TicketCard";

const Queue = () => {
  const [tickets, setTickets] = useState([]);
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item>
          <Typography variant="h5">Queue</Typography>
        </Grid>
        <Grid item>
          <TicketCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Queue;
