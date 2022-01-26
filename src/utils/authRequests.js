import axios from "axios";

export const authenticate = async (details) => {
  try {
    const res = await axios.post("/api/users/authenticate", {
      email: details.username,
      password: details.password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const loadUser = async (token) => {
  try {
    const res = await axios.get("/api/users/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return res.data.user;
  } catch (error) {
    console.log(error);
  }
};
