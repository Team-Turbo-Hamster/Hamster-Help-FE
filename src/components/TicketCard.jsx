import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Card,
  CardMedia,
  CardActionArea,
  Badge,
  Hidden,
  Chip,
} from "@mui/material";
import { ChatBubble, LocalLibrarySharp } from "@mui/icons-material";

import Tag from "./Tag";
import useStyles from "../styles/components/ticket-card.styles";
import { getUserById } from "../utils/userRequests";
import { Image } from "cloudinary-react";
import * as moment from "moment";
import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import useAuth from "../contexts/useAuth";
import CardWrap from "../components/CardWrap";

const TicketCard = ({ ticket }) => {
  const [userTicket, setUserTicket] = useState(null);
  const [privateTicketError, setPrivateTicketError] = useState(false);

  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useAuth();

  let seePrivate = user.role === "Tutor" || userTicket?._id === user._id;

  useEffect(() => {
    getUserById(ticket.user).then((data) => setUserTicket(data));
  }, [ticket]);

  const VisibleCard = userTicket ? (
    <CardActionArea onClick={() => navigate(`/tickets/${ticket._id}`)}>
      <Grid container className={classes.ticketContainer}>
        <Grid item>
          <UserAvatar publicId={userTicket.avatar} online={true} />
        </Grid>
        <Grid item xs={10} sm={11}>
          <Grid container className={classes.ticketContent}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={(theme) => ({
                  color: theme.palette.primary.dark,
                  fontWeight: "bold",
                })}
              >
                {userTicket.name}
              </Typography>
            </Grid>
            <Grid item className={classes.dateContainer}>
              <Typography
                variant="body2"
                sx={(theme) => ({
                  color: theme.palette.primary.dark,
                })}
              >
                {ticket.created_at !== null
                  ? moment(
                      ticket.created_at.toString(),
                      "YYYYMMDD HH:mm:ss"
                    ).fromNow()
                  : "just now..."}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.titleContainer}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {ticket.title}
              </Typography>
            </Grid>

            <Grid item xs={12} className={classes.tagsContainer}>
              {/* <Box className={classes.tagsContainer}> */}
              {ticket.tags.map((tag, i) => (
                <Tag key={`${tag}${i}`} tag={tag} />
              ))}
              {/* </Box> */}
            </Grid>
            <Grid item xs={12} className={classes.socialsContainer}>
              <Box className={classes.privateContainer}>
                {ticket.isPrivate && <Chip label="Private" color="error" />}
                {ticket.resolved && <Chip label="Closed" color="secondary" />}
              </Box>
              <Box className={classes.commentsContainer}>
                <Badge color="primary" badgeContent={ticket.comments.length}>
                  <ChatBubble
                    sx={(theme) => ({ color: theme.palette.primary.dark })}
                  />
                </Badge>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardActionArea>
  ) : (
    <p>Loading...</p>
  );

  const HiddenCard = (
    <CardActionArea onClick={() => setPrivateTicketError(true)}>
      <Box className={classes.privateTicketContainer}>
        <Typography
          variant="h4"
          sx={(theme) => ({ color: theme.palette.primary.dark })}
        >
          This is a private ticket
        </Typography>
        {privateTicketError && (
          <Typography variant="body2" color="error">
            Only tutors can access it
          </Typography>
        )}
      </Box>
    </CardActionArea>
  );
  return (
    <CardWrap className={classes.cardWrapContainer} elevation={3}>
      {ticket.isPrivate === false || seePrivate ? VisibleCard : HiddenCard}
    </CardWrap>
  );
};
export default TicketCard;
