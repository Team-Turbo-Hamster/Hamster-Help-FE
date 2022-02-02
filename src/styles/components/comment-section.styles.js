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
    borderColor: "#ccc",
    lineHeight: "1",
    borderRadius: "5px",
    width: "100%",
    resize: "none",
    padding: theme.spacing(2),

    "&:focus": {
      outline: "none",
      border: `2px solid ${indigo["A400"]}`,
    },
  },
  avatarAddComment: {
    width: 24,
    height: 24,
  },
}));

export default useStyles;
