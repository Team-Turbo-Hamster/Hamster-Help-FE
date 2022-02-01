import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Alert
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import useAuth from "../contexts/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    username: "quatre29@email.com",
    password: "Qweqweqwe2",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [testsPassed, setTestsPassed] = useState({username:true, password:true});
  const helperText = {username:"Username must be 1-30 character long and contain only letter or spaces", password:"Password must be 6-30 characters long, must contain only letters, numbers and special characters(!@#$%^&*) and must contain at least one uppercase letter, one lowercase letter and one number"}
  const tests =  {username: /^[a-zA-Z\s-]{4,15}$/, password: /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])^[a-zA-Z0-9!@#$%^&*]{6,30}$/,};

  const { signIn, user } = useAuth();

  const handleChange = (prop) => (event) => {
    event.preventDefault();
    setValues({ ...values, [prop]: event.target.value });
    let test = new RegExp(tests[prop]);
    test.test(values[prop])
    ? setTestsPassed({ ...testsPassed, [prop]: true })
    : setTestsPassed({ ...testsPassed, [prop]: false });
    console.log(testsPassed)
    testsPassed.username && testsPassed.password ? setButtonDisabled(false) :  setButtonDisabled(true)
  };

  const handleBlur = (prop) => (event) => {
    let test = new RegExp(tests[prop]);
    test.test(values[prop])
    ? setTestsPassed({ ...testsPassed, [prop]: true })
    : setTestsPassed({ ...testsPassed, [prop]: false });
    testsPassed.username && testsPassed.password ? setButtonDisabled(false) :  setButtonDisabled(true)

    console.log(testsPassed)
   } 

   const HelperText = (prop) => {
    return testsPassed[prop] === true ? <></> : (<Alert severity="error">{helperText[prop]}</Alert>)  
   }

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
          helpertext="Please enter your username"
          onChange={handleChange("username")}
          onBlur={handleBlur("username")}
        />
      {HelperText("username")}
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
          onBlur={handleBlur("password")}
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
         {HelperText("password")}
      </FormControl>
      <br />
      <Button variant="text" type="Submit" disabled={buttonDisabled}>
        Submit
      </Button>
    </form>
  );
};

export default Login;
