import { Button, TextField } from "@mui/material";
import { useState } from "react";

const InitialLogin = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event);
    setUserName(event.target[0].value);
    setUserPassword(event.target[2].value);
    // return userName;
  };
  return (
    <form onSubmit={handleChange}>
      <TextField helperText="Please enter your username" label="User" placeholder="Name" />
      <TextField helperText="Please enter your password" label="Password" placeholder="Password" id="password" />
      <Button variant="text" type="Submit">
        Submit
      </Button>
    </form>
  );
};

export default InitialLogin;
