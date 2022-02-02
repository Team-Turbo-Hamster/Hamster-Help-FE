import axios from "axios";

export const postComment = async (ticket_id, body) => {
  try {
    console.log(body);
    const comment = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}
      /api/tickets/${ticket_id}/new-comment`,
      {
        body,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      }
    );
    return comment.data.comment;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (ticket_id, comment_id) => {
  try {
    const comment = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}
      /api/tickets/${ticket_id}/remove-comment`,
      { comment_id },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      }
    );
    return comment.data.comment;
  } catch (error) {
    console.log(error);
  }
};
