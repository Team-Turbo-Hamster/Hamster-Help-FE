import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import useAuth from "../contexts/useAuth";

const Login = () => {
  const [values, setValues] = useState({
    username: "quatre@email.com",
    password: "123456677",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { signIn } = useAuth();

  const handleChange = (prop) => (event) => {
    event.preventDefault();
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(values);
    setValues({
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 1, width: "30ch" }}>
        <InputLabel>Username</InputLabel>
        <OutlinedInput
          id="usernameField"
          label="Username"
          value={values.username}
          helperext="Please enter your username"
          onChange={handleChange("username")}
        />
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: "30ch" }}>
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          id="passwordField"
          type={showPassword ? "text" : "password"}
          value={values.password}
          label="password"
          onChange={handleChange("password")}
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
      </FormControl>
      <br />
      <Button variant="text" type="Submit">
        Submit
      </Button>
    </form>
  );
};

export default Login;
