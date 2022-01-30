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
} from "@mui/material";
import { ChatBubble } from "@mui/icons-material";

import Tag from "./Tag";
import useStyles from "../styles/components/ticket-card.styles";
import { getUserById } from "../utils/userRequests";
import { Image } from "cloudinary-react";
import * as moment from "moment";
import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

const TicketCard = ({ ticket }) => {
  const [userTicket, setUserTicket] = useState(null);

  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById(ticket.user).then((data) => setUserTicket(data));
  }, [ticket]);

  return (
    <Card className={classes.cardContainer}>
      {userTicket ? (
        <CardActionArea onClick={() => navigate(`/tickets/${ticket.id}`)}>
          <Grid container className={classes.ticketContainer}>
            <Grid item>
              <UserAvatar publicId={userTicket.avatar} online={true} />
            </Grid>
            <Grid item xs={10} sm={11}>
              <Grid container className={classes.ticketContent}>
                <Grid item xs={12}>
                  <Typography variant="body1">{userTicket.name}</Typography>
                </Grid>
                <Grid item className={classes.dateContainer}>
                  <span>
                    {ticket.created_at !== null
                      ? moment(
                          ticket.created_at.toString(),
                          "YYYYMMDD HH:mm:ss"
                        ).fromNow()
                      : "just now..."}
                  </span>
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
                <Grid item xs={12}>
                  <Box className={classes.commentsContainer}>
                    <Badge color="secondary" badgeContent={4}>
                      <ChatBubble />
                    </Badge>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
      ) : (
        <p>loading...</p>
      )}
    </Card>
  );
};

export default TicketCard;
