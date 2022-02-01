import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import useStyles from "../styles/components/comment.styles";
import UserAvatar from "./UserAvatar";

const Comment = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.commentContainer}>
      <Grid item xs={1}>
        <UserAvatar className={classes.avatar} />
      </Grid>
      <Grid item xs={11}>
        <div className={classes.bodyContainer}>
          <Grid container className={classes.commentTitle}>
            <Grid item xs={12}>
              <Typography variant="" sx={{ fontWeight: "bold" }}>
                <Link
                  className={classes.commentUsernameLink}
                  to={`/user/blank`}
                >
                  Username
                </Link>
                •
                <span>
                  {/* {comment.createdAt !== null
                    ? moment(
                        comment.createdAt.toString(),
                        "YYYYMMDD HH:mm:ss"
                      ).fromNow()
                    : "just now..."} */}
                  2 days ago
                </span>
              </Typography>
            </Grid>
          </Grid>
          <Typography className={classes.comment}>
            Comment sadsadsa dsad sad
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Comment;
