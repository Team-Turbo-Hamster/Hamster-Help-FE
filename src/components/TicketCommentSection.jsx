import React, { useState, useEffect, useContext } from "react";
import { Grid, Typography, Divider, Button } from "@mui/material";
import useStyles from "../styles/components/comment-section.styles";
import useAuth from "../contexts/useAuth";
import UserAvatar from "./UserAvatar";
import Comment from "./Comment";
import { postComment } from "../utils/commentsRequests";
import { SocketContext } from "../contexts/socket";

const TicketCommentSection = ({ ticket, setTicket }) => {
  const [commentState, setCommentState] = useState("");
  const classes = useStyles();
  const { user } = useAuth();
  const socket = useContext(SocketContext);
  const onSubmitComment = (e) => {
    const token = localStorage.getItem("user-token");
    e.preventDefault();
    if (commentState > "") {
      // postComment(ticket._id, commentState).then((data) => {
      //   setTicket(data);
      // });
      socket.emit("new-comment", {
        token,
        ticket_id: ticket.id,
        comment: commentState,
      });
    } else {
      console.error("comment section must not be empty");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    socket.on("ticket-watched", ({ ticket_id }) => {
      console.log("Watching ticket ", ticket_id);
    });

    socket.on("new-comment", ({ ticket }) => {
      setTicket(ticket);
    });

    socket.emit("watch-ticket", { token, ticket_id: ticket.id });

    return () => {
      socket.removeAllListeners();
    };
  }, []);

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
        <Grid item xs={11} sx={{ width: "100%" }}>
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
        {ticket.comments.map((comment, i) => (
          <Comment
            key={`${comment._id}${i}`}
            ticketId={ticket._id}
            comment={comment}
            setTicket={setTicket}
          />
        ))}
      </Grid>
    </>
  );
};

export default TicketCommentSection;
