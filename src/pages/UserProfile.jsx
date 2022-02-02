import React, { useEffect, useState } from "react";
import { Grid, Container, Typography, Box, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { getUserById } from "../utils/userRequests";
import useStyles from "../styles/pages/user-page.styles";
import UserAvatar from "../components/UserAvatar";
import UserRoleBadge from "../components/UserRoleBadge";
import useAuth from "../contexts/useAuth";
import { getTicketsByUserId } from "../utils/ticketRequests";
import TicketsTabs from "../components/TicketsTabs";

const UserProfile = () => {
  const [visitedUser, setVisitedUser] = useState(null);
  const [userTickets, setUserTickets] = useState([]);

  const { user_id } = useParams();
  const classes = useStyles();
  const { user } = useAuth();

  useEffect(() => {
    if (!user_id) {
      setVisitedUser(user);
    } else {
      getUserById(user_id).then((data) => {
        setVisitedUser(data);
      });
    }
  }, [user_id, user]);

  useEffect(() => {
    let cancel = false;
    if (visitedUser) {
      getTicketsByUserId(visitedUser._id).then((data) => {
        if (cancel) return;
        setUserTickets(data);
      });
    }

    return () => {
      cancel = true;
    };
  }, [visitedUser]);

  return (
    <Container maxWidth="md">
      {visitedUser ? (
        <>
          <Paper elevation={3} className={classes.paperContainer}>
            <Grid container className={classes.container}>
              <Grid item className={classes.headerContainer}>
                <UserAvatar
                  className={classes.avatar}
                  publicId={visitedUser.avatar}
                  availableAvatar={visitedUser.avatar}
                  online={true}
                />
                <Typography variant="h4">{visitedUser.name}</Typography>
                <Typography variant="body1">@{visitedUser.username}</Typography>
                <Box className={classes.badge}>
                  <UserRoleBadge role={visitedUser.role} />
                </Box>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Paper>

          <Box className={classes.myTicketsContainer}>
            <TicketsTabs tickets={userTickets} />
          </Box>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default UserProfile;
