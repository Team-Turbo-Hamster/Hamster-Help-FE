import React, { useEffect, useState } from "react";
import { Grid, Container, Typography, Avatar, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { getUserById } from "../utils/userRequests";
import useStyles from "../styles/pages/user-page.styles";
import UserAvatar from "../components/UserAvatar";
import UserRoleBadge from "../components/UserRoleBadge";
import useAuth from "../contexts/useAuth";

const UserProfile = () => {
  const [visitedUser, setVisitedUser] = useState(null);

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

  return (
    <Container maxWidth="md">
      {visitedUser ? (
        <Grid container className={classes.container}>
          <Grid item className={classes.headerContainer}>
            <Box>
              <UserAvatar
                className={classes.avatar}
                publicId={visitedUser.avatar}
                availableAvatar={visitedUser.avatar}
                online={true}
              />
            </Box>
            <Typography variant="h4">{visitedUser.name}</Typography>
            <Typography variant="body1">@{visitedUser.username}</Typography>
            <UserRoleBadge role={visitedUser.role} />
          </Grid>
          <Grid item>My Tickets</Grid>
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default UserProfile;
