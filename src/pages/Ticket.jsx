import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Avatar,
  Paper,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "../styles/pages/ticket.styles";
import {
  getTicketById,
  resolveTicket,
  unResolveTicket,
} from "../utils/ticketRequests";
import { useParams } from "react-router-dom";
import * as moment from "moment";
import { getUserById } from "../utils/userRequests";
import Tag from "../components/Tag";
import ImageGallery from "../components/ImageGallery";
import UserAvatar from "../components/UserAvatar";
import useAuth from "../contexts/useAuth";
import TicketCommentSection from "../components/TicketCommentSection";

const Ticket = () => {
  const [ticket, setTicket] = useState(null);
  const [ticketUser, setTicketUser] = useState(null);

  const { user } = useAuth();
  const classes = useStyles();
  const { ticket_id } = useParams();

  const resolveButton =
    ticket && !(user.role === "Tutor" && ticket.resolved === false);
  const unResolveButton =
    ticket && !(user.role === "Tutor" && ticket.resolved === true);

  useEffect(() => {
    getTicketById(ticket_id).then((data) => {
      setTicket(data);
    });
  }, [ticket_id]);

  useEffect(() => {
    if (ticket) {
      getUserById(ticket.user).then((data2) => {
        setTicketUser(data2);
      });
    }
  }, [ticket]);

  const submitResolveTicket = () => {
    resolveTicket(ticket._id).then((data) => setTicket(data));
  };
  const submitUnResolveTicket = () => {
    unResolveTicket(ticket._id).then((data) => setTicket(data));
  };

  return (
    <Container maxWidth="md">
      {ticket && ticketUser ? (
        <Grid container className={classes.ticketContainer}>
          <Grid item xs={12} className={classes.gridItem}>
            <Grid container>
              <Grid xs={12} item className={classes.titleContainer}>
                <Typography variant="h5">{ticket.title}</Typography>
              </Grid>
              <Grid xs={12} item>
                <Box className={classes.avatarContainer}>
                  <UserAvatar publicId={ticketUser.avatar} online={true} />
                  <Link
                    to={`/users/${ticket.user}`}
                    className={classes.userNameLink}
                  >
                    <Typography
                      variant="body2"
                      sx={{ marginLeft: "10px", fontWeight: "bold" }}
                    >
                      {ticketUser.name}
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid xs={12} item className={classes.dateContainer}>
                <Typography variant="body2">
                  {moment(
                    ticket.created_at.toString(),
                    "YYYYMMDD HH:mm:ss"
                  ).fromNow()}
                </Typography>
              </Grid>
              <Grid item className={classes.tagsContainer}>
                {ticket.tags.map((tag, i) => (
                  <Tag key={`${tag}${i}`} tag={tag}></Tag>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Grid container className={classes.bodyContainer}>
              <Grid xs={12} item className={classes.gridItem}>
                Zoom button
              </Grid>
              <Grid xs={6} item className={classes.gridItem}>
                <Button
                  variant="contained"
                  color="success"
                  disabled={resolveButton}
                  onClick={submitResolveTicket}
                >
                  Resolve ticket
                </Button>
              </Grid>
              <Grid xs={6} item className={classes.gridItem}>
                <Button
                  variant="contained"
                  color="error"
                  disabled={unResolveButton}
                  onClick={submitUnResolveTicket}
                >
                  Unresolve
                </Button>
              </Grid>
              <Grid xs={12} item className={classes.gridItem}>
                <Paper variant="outlined" className={classes.bodyPaper}>
                  <Typography variant="body1">{ticket.body}</Typography>
                </Paper>
              </Grid>
              <Grid xs={12} item className={classes.gridItem}>
                <ImageGallery images={ticket.images} />
              </Grid>
              <Grid xs={12} item className={classes.commentSectionContainer}>
                <TicketCommentSection ticket={ticket} setTicket={setTicket} />
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
