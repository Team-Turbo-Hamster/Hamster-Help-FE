import { Button, TextField, InputLabel, FilledInput, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const InitialLogin = () => {
  const [values, setValues] = useState({ username: "", password: "", showPassword: false });
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event);
    setValues({ ...values, username: event.target[0].value, password: event.target[2].value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleChange}>
      <TextField helperText="Please enter your username" label="User" placeholder="Name" />
      <InputLabel htmlFor="passwordField">Password</InputLabel>
      <FilledInput
        id="passwordField"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onChange={handleChange}
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <Button variant="text" type="Submit">
        Submit
      </Button>
    </form>
  );
};

export default InitialLogin;
