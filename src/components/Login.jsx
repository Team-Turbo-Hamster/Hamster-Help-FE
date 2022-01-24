import { Button, TextField } from "@mui/material";
import { useState } from "react";

const InitialLogin = () => {
  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    setUserName(event.target.value);
    // return userName;
  };
  return (
    <form onSubmit={handleChange}>
      <TextField helperText="Please enter your username" label="User" placeholder="Name" />
      <Button variant="text" type="Submit">
        Submit
      </Button>
    </form>
  );
};

export default InitialLogin;
