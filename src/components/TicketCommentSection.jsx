import React, { useState, useEffect } from "react";
import { Grid, Typography, Divider, Button } from "@mui/material";
import useStyles from "../styles/components/comment-section.styles";
import useAuth from "../contexts/useAuth";
import UserAvatar from "./UserAvatar";
import Comment from "./Comment";

const TicketCommentSection = () => {
  const [commentState, setCommentState] = useState("");
  const classes = useStyles();
  const { user } = useAuth();

  const onSubmitComment = (e) => {
    e.preventDefault();
    if (commentState > "") {
      console.log("comment dispatched");
    } else {
      console.error("comment section must not be empty");
    }
  };

  return (
    <>
      <Divider />
      <Grid container className={classes.addCommentContainer}>
        <Grid item xs={1}>
          <UserAvatar
            publicId={user.avatar}
            online={true}
            className={classes.avatarAddComment}
          />
        </Grid>
        <Grid item xs={11}>
          <textarea
            className={classes.commentTextArea}
            name="comment"
            rows="3"
            placeholder="Start writing a comment..."
            value={commentState}
            onChange={(e) => setCommentState(e.target.value)}
          ></textarea>
          <Button onClick={onSubmitComment} variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Comment />
        <Comment />
        <Comment />
      </Grid>
    </>
  );
};

export default TicketCommentSection;
