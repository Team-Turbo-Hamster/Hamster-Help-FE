import axios from "axios";

export const getUserById = async (user_id) => {
  try {
    const user = await axios.get(`/api/users/${user_id}`);
    console.log(user, "*************");
    return user.data.user;
  } catch (error) {
    console.log(error);
  }
};
