import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useStyles from "../styles/pages/tag-page.styles";
import { Grid, Container, Typography, Paper } from "@mui/material";
import { getTicketsByTag } from "../utils/ticketRequests";
import TicketCard from "../components/TicketCard";

const TagPage = () => {
  const [tickets, setTickets] = useState([]);
  const classes = useStyles();
  const { tag_name } = useParams();

  useEffect(() => {
    let cancel = true;

    getTicketsByTag(tag_name).then((data) => {
      if (cancel) {
        setTickets(data);
      }
    });

    return () => (cancel = false);
  }, [tag_name]);
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paperContainer} elevation={3}>
            <Typography variant="h3">#{tag_name}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {tickets.map((ticket) => (
            <TicketCard key={ticket._id} ticket={ticket} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default TagPage;
