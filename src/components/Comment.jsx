import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material";
import useStyles from "../styles/components/comment.styles";
import UserAvatar from "./UserAvatar";
import * as moment from "moment";
import useAuth from "../contexts/useAuth";
import { MoreHoriz } from "@mui/icons-material";
import { deleteComment } from "../utils/commentsRequests";

const Comment = ({ comment, ticketId, setTicket }) => {
  const [anchorMenu, setAnchorMenu] = useState(null);

  const classes = useStyles();
  const { user } = useAuth();

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };
  const handleOpenMenu = (e) => {
    setAnchorMenu(e.currentTarget);
  };

  const removeComment = () => {
    handleCloseMenu();
    deleteComment(ticketId, comment._id).then((data) => setTicket(data));
    // onRemove(comment.post, comment.id);
  };

  return (
    <Grid container className={classes.commentContainer}>
      <Grid item xs={1}>
        <UserAvatar className={classes.avatar} publicId={comment.user.avatar} />
      </Grid>
      <Grid item xs={11}>
        <div className={classes.bodyContainer}>
          <Grid container className={classes.commentTitle}>
            <Grid item xs={10}>
              <Typography variant="" sx={{ fontWeight: "bold" }}>
                <Link
                  className={classes.commentUsernameLink}
                  to={`/users/${comment.user._id}`}
                >
                  <span className={classes.nameContainer}>
                    {comment.user.name}
                  </span>
                </Link>
                •
                <span className={classes.dateSpan}>
                  {comment.created_at !== null
                    ? moment(
                        comment.created_at.toString(),
                        "YYYYMMDD HH:mm:ss"
                      ).fromNow()
                    : "just now..."}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={2} className={classes.menuItem}>
              <div>
                <IconButton
                  size="small"
                  aria-label="more"
                  id="long-button"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleOpenMenu}
                >
                  <MoreHoriz fontSize="small" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorMenu)}
                  onClose={handleCloseMenu}
                >
                  {user !== null && comment.user._id === user._id ? (
                    <MenuItem onClick={removeComment}>Remove</MenuItem>
                  ) : (
                    <MenuItem onClick={handleCloseMenu}>No options</MenuItem>
                  )}
                </Menu>
              </div>
            </Grid>
          </Grid>
          <Typography className={classes.comment}>{comment.body}</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Comment;
