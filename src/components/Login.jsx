import { Button, TextField, InputLabel, FilledInput, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const InitialLogin = () => {
  const [values, setValues] = useState({ username: "", password: "", showPassword: false });
  
  const handleChange = (prop) => (event) => {
    event.preventDefault();
    setValues({ ...values, [prop]: event.target.value, });
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

  const handleSubmit = (event) => {
    console.log("submit: ", values)
    console.log(event)
    setValues({ ...values, username: event.target[0].value, password: event.target[2].value,});
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField helperText="Please enter your username" label="User" placeholder="Name" onChange={handleChange('username')}  />
      <InputLabel htmlFor="passwordField">Password</InputLabel>
      <FilledInput
        id="passwordField"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
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
