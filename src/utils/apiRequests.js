import axios from "axios";

export const createUser = async (formData) => {
  try {
    console.log(formData);
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/users`,
      formData
    );

    return res.data.user;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/users`
    );

    return res.data.users;
  } catch (error) {
    console.log(error);
  }
};
