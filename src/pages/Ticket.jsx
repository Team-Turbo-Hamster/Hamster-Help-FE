import React, { useEffect, useState } from "react";
import { Grid, Container, Typography, Avatar, Paper, Box } from "@mui/material";
import useStyles from "../styles/pages/ticket.styles";
import { getTicketById } from "../utils/ticketRequests";
import { useParams } from "react-router-dom";
import * as moment from "moment";
import { getUserById } from "../utils/userRequests";

const Ticket = () => {
  const [ticket, setTicket] = useState(null);
  const [user, setUser] = useState(null);

  const classes = useStyles();
  const { ticket_id } = useParams();
  //   61f11831cefdb7825ca660b1

  useEffect(() => {
    getTicketById(ticket_id)
      .then((data) => {
        setTicket(data);
        return getUserById(data.user);
      })
      .then((data2) => {
        setUser(data2);
      });
  }, []);

  console.log(user);

  return (
    <Container maxWidth="md">
      {ticket ? (
        <Grid container>
          <Grid item xs={12} className={classes.gridItem}>
            <Grid container>
              <Grid xs={12} item className={classes.titleContainer}>
                <Typography variant="h5">{ticket.title}</Typography>
              </Grid>
              <Grid xs={12} item>
                <Box className={classes.avatarContainer}>
                  <Avatar src={user.avatar} />
                  <Typography variant="body2">{user.name}</Typography>
                </Box>
              </Grid>
              <Grid xs={12} item>
                <Typography variant="body2">
                  {moment(
                    ticket.created_at.toString(),
                    "YYYYMMDD HH:mm:ss"
                  ).fromNow()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Grid container className={classes.bodyContainer}>
              <Grid xs={12} item className={classes.gridItem}>
                Zoom button
              </Grid>
              <Grid xs={12} item className={classes.gridItem}>
                <Typography variant="body1">{ticket.body}</Typography>
              </Grid>
              <Grid xs={12} item className={classes.gridItem}>
                image gallery
              </Grid>
              <Grid xs={12} item className={classes.gridItem}>
                <Grid container>
                  <Grid item></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <p>loading...</p>
      )}
    </Container>
  );
};

export default Ticket;
