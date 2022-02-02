import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useStyles from "../styles/pages/tag-page.styles";
import { Grid, Container, Typography, Paper } from "@mui/material";
import { getTicketsByTag } from "../utils/ticketRequests";
import TicketsTabs from "../components/TicketsTabs";
import CardWrap from "../components/CardWrap";

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
          <CardWrap className={classes.paperContainer}>
            <Typography
              sx={(theme) => ({
                color: theme.palette.primary.dark,
              })}
              variant="h3"
            >
              #{tag_name}
            </Typography>
          </CardWrap>
        </Grid>
        <Grid item xs={12}>
          <TicketsTabs tickets={tickets} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TagPage;
