import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import useStyles from "../styles/components/ticket-card.styles";
import { getUserById } from "../utils/userRequests";
import { Image } from "cloudinary-react";
import * as moment from "moment";
import { useNavigate } from "react-router-dom";

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
              <Avatar>
                <Image
                  width="100%"
                  cloudName="turbo-hamster"
                  publicId={userTicket.avatar}
                />
              </Avatar>
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                <Grid item>{userTicket.name}</Grid>
                <Grid item>{ticket.title}</Grid>

                <Grid item>
                  <span>
                    {ticket.created_at !== null
                      ? moment(
                          ticket.created_at.toString(),
                          "YYYYMMDD HH:mm:ss"
                        ).fromNow()
                      : "just now..."}
                  </span>
                </Grid>
                <Grid item>
                  {ticket.tags.map((tag, i) => (
                    <div key={`${tag}${i}`}>tag</div>
                  ))}
                </Grid>
                <Grid item>icons</Grid>
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
