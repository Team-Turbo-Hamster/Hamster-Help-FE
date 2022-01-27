import axios from "axios";

export const getUserById = async (user_id) => {
  try {
    const user = await axios(`/api/users/${user_id}`);

    return user.data.user;
  } catch (error) {
    console.log(error);
  }
};
