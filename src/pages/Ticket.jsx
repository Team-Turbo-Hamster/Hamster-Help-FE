import React, { useEffect, useState, useContext } from "react";
import {
  Grid,
  Container,
  Typography,
  Avatar,
  Paper,
  Box,
  Button,
  Chip,
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

import CardWrap from "../components/CardWrap";

const Ticket = () => {
  const [ticket, setTicket] = useState(null);
  const [ticketUser, setTicketUser] = useState(null);

  const { user } = useAuth();
  const classes = useStyles();
  const { ticket_id } = useParams();

  const resolveButton =
    ticket &&
    !(
      (user.role === "Tutor" && ticket.resolved === false) ||
      (ticket.user === user._id && ticket.resolved === false)
    );
  const unResolveButton =
    ticket &&
    !(
      (user.role === "Tutor" && ticket.resolved === true) ||
      (ticket.user === user._id && ticket.resolved === true)
    );

  useEffect(() => {
    getTicketById(ticket_id).then((data) => {
      console.log(data);
      setTicket(data);
    });
  }, []);

  const submitResolveTicket = () => {
    resolveTicket(ticket._id).then((data) => {
      console.log("data back", data);
      setTicket(data);
    });
  };

  useEffect(() => {
    if (ticket) {
      getUserById(ticket.user).then((data2) => {
        setTicketUser(data2);
      });
    }
  }, [ticket]);

  const submitUnResolveTicket = () => {
    unResolveTicket(ticket._id).then((data) => setTicket(data));
  };

  return (
    <Container maxWidth="md">
      {ticket && ticketUser ? (
        <Grid container className={classes.ticketContainer}>
          {/* <CardWrap> */}
          <Grid item xs={12} className={classes.gridItem}>
            <Grid container className={classes.headerContainer}>
              <CardWrap className={classes.headerCardWrap} secondary>
                <Grid xs={12} item className={classes.titleContainer}>
                  <Typography
                    variant="h3"
                    sx={(theme) => ({
                      color: theme.palette.primary.dark,
                      fontWeight: "bold",
                    })}
                  >
                    {ticket.title}
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Box className={classes.avatarContainer}>
                    <UserAvatar publicId={ticketUser.avatar} online={true} />
                    <Link
                      to={`/users/${ticket.user}`}
                      className={classes.userNameLink}
                    >
                      <Typography
                        variant="h5"
                        sx={(theme) => ({
                          marginLeft: "10px",
                          fontWeight: "bold",
                          color: theme.palette.primary.dark,
                        })}
                      >
                        {ticketUser.name}
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid xs={12} item className={classes.dateContainer}>
                  <Typography
                    variant="body1"
                    sx={(theme) => ({
                      color: theme.palette.primary.dark,
                    })}
                  >
                    {moment(
                      ticket.created_at.toString(),
                      "YYYYMMDD HH:mm:ss"
                    ).fromNow()}
                  </Typography>
                </Grid>
                <Grid xs={12} item className={classes.tagsContainer}>
                  {ticket.tags.map((tag, i) => (
                    <Tag key={`${tag}${i}`} tag={tag}></Tag>
                  ))}
                </Grid>
                <Grid item xs={12} className={classes.privateChipContainer}>
                  {ticket.isPrivate && <Chip label="Private" color="error" />}
                </Grid>
              </CardWrap>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Grid container className={classes.bodyContainer}>
              <CardWrap secondary className={classes.buttonCardWrap}>
                <Grid container>
                  <Grid xs={12} item className={classes.gridItem}>
                    <Button variant="outlined">Take me to video chat</Button>
                  </Grid>
                  <Grid xs={6} item className={classes.gridItem}>
                    <Button
                      variant="contained"
                      color="secondary"
                      disabled={resolveButton}
                      onClick={submitResolveTicket}
                    >
                      Close Ticket
                    </Button>
                  </Grid>
                  <Grid xs={6} item className={classes.gridItem}>
                    <Button
                      variant="contained"
                      color="success"
                      disabled={unResolveButton}
                      onClick={submitUnResolveTicket}
                    >
                      Reopen
                    </Button>
                  </Grid>
                </Grid>
              </CardWrap>
              <CardWrap secondary className={classes.ticketBodyWrap}>
                <Grid xs={12} item className={classes.gridItem}>
                  <Paper variant="outlined" className={classes.bodyPaper}>
                    <Typography variant="body1">{ticket.body}</Typography>
                  </Paper>
                </Grid>
                <Grid xs={12} item className={classes.gridItem}>
                  <ImageGallery images={ticket.images} />
                </Grid>
              </CardWrap>
              <Grid xs={12} item className={classes.commentSectionContainer}>
                <CardWrap secondary className={classes.commentsCardWrap}>
                  <TicketCommentSection ticket={ticket} setTicket={setTicket} />
                </CardWrap>
              </Grid>
            </Grid>
          </Grid>
          {/* </CardWrap> */}
        </Grid>
      ) : (
        <CardWrap>
          <p>loading...</p>
        </CardWrap>
      )}
    </Container>
  );
};

export default Ticket;
