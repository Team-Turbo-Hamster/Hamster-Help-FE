import axios from "axios";

export const createUser = async (formData) => {
  try {
    const res = await axios.post("/api/users", formData);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    const res = await axios.get("/api/users");

    return res.data.users;
  } catch (error) {
    console.log(error);
  }
};
