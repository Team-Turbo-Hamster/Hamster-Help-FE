import axios from "axios";

export const getUserById = async (user_id) => {
  try {
    const user = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/users/${user_id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      }
    );
    return user.data.user;
  } catch (error) {
    console.log(error);
  }
};
