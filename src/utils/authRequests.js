import axios from "axios";

export const authenticate = async (details) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/users/authenticate`,
      {
        username: details.username,
        password: details.password,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const loadUser = async (token) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/users/me`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return res.data.user;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (userForm) => {
  try {
    const user = await axios.post(`/api/users`, userForm);

    return user.data.user;
  } catch (error) {
    console.log(error);
  }
};
