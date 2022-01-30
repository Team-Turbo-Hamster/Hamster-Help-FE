import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Avatar,
  Paper,
  Box,
  ImageList,
  ImageListItem,
} from "@mui/material";
import useStyles from "../styles/pages/ticket.styles";
import { getTicketById } from "../utils/ticketRequests";
import { useParams } from "react-router-dom";
import * as moment from "moment";
import { getUserById } from "../utils/userRequests";
import { Image } from "cloudinary-react";
import Tag from "../components/Tag";
import ImageGallery from "../components/ImageGallery";
import UserAvatar from "../components/UserAvatar";

const Ticket = () => {
  const [ticket, setTicket] = useState(null);
  const [user, setUser] = useState(null);

  const classes = useStyles();
  const { ticket_id } = useParams();
  //   61f11831cefdb7825ca660b1

  useEffect(() => {
    getTicketById(ticket_id).then((data) => {
      setTicket(data);
    });
  }, [ticket_id]);

  useEffect(() => {
    if (ticket) {
      getUserById(ticket.user).then((data2) => {
        setUser(data2);
      });
    }
  }, [ticket]);
  return (
    <Container maxWidth="md">
      {ticket && user ? (
        <Grid container className={classes.ticketContainer}>
          <Grid item xs={12} className={classes.gridItem}>
            <Grid container>
              <Grid xs={12} item className={classes.titleContainer}>
                <Typography variant="h5">{ticket.title}</Typography>
              </Grid>
              <Grid xs={12} item>
                <Box className={classes.avatarContainer}>
                  <UserAvatar publicId={user.avatar} online={true} />
                  <Typography
                    variant="body2"
                    sx={{ marginLeft: "10px", fontWeight: "bold" }}
                  >
                    {user.name}
                  </Typography>
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
              <Grid xs={12} item className={classes.gridItem}>
                <Paper variant="outlined" className={classes.bodyPaper}>
                  <Typography variant="body1">{ticket.body}</Typography>
                </Paper>
              </Grid>
              <Grid xs={12} item className={classes.gridItem}>
                <ImageGallery images={ticket.images} />
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
