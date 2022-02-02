import React, { useState, useEffect, useContext } from "react";
import { Container, Grid, Typography } from "@mui/material";
import useStyles from "../styles/pages/queue.styles";
import { getUnresolvedTickets } from "../utils/ticketRequests";
import TicketsList from "../components/TicketsList";
import { SocketContext } from "../contexts/socket";
import TextComponent from "../components/TextComponent";

const Queue = () => {
  const socket = useContext(SocketContext);
  const [tickets, setTickets] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getUnresolvedTickets().then((data) => setTickets(data));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    socket.emit("reauthenticate", { token });

    socket.on("reauthenticated", () => {
      console.log("reauthenticated");
    });
    socket.on("new-ticket", ({ ticket }) => {
      console.log("New Ticket received", ticket);
      setTickets((currentTickets) => {
        return [...currentTickets, ticket];
      });
    });

    return () => {
      socket.removeAllListeners();
    };
  });

  return (
    <Container maxWidth="md">
      <Grid container className={classes.container}>
        <Grid xs={12} item className={classes.titleContainer}>
          <TextComponent text="Queue" variant="h2" />
        </Grid>
        <Grid xs={12} item>
          <TicketsList tickets={tickets} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Queue;
