import { makeStyles } from "@mui/styles";
import { indigo } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  addCommentContainer: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
  commentTextArea: {
    fontFamily: "inherit",
    padding: "0.25em 0.5em",
    borderColor: theme.palette.primary.light,
    lineHeight: "1",
    borderRadius: "15px",
    width: "100%",
    resize: "none",
    padding: theme.spacing(2),

    "&:focus": {
      outline: "none",
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
  avatarAddComment: {
    width: 24,
    height: 24,
  },
}));

export default useStyles;
