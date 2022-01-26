import { Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState, useEffect } from "react";

const NewUserForm = () => {
  const [values, setValues] = useState({ username: "", password: "", passwordVerify: "", showPassword: false });
  const [tests, setTests] = useEffect({username: /^[a-zA-Z\s-]{1,30}$/, password: /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])^[a-zA-Z0-9!@#$%^&*]{6,30}$/, passwordVerify: ""})
  const [testsPassed, setTestsPassed] = useEffect({})

  const handleChange = (prop) => (event) => {
    event.preventDefault();
    setValues({ ...values, [prop]: event.target.value, });

  };

  const handleBlur = (prop) => (event) => {
    console.log(prop)
    console.log(tests.prop)
    // let test = new RegExp(tests.prop)

    // test.test(values.prop) ? setTestsPassed(...testsPassed, [prop] = true) : setTestsPassed(...testsPassed, [prop] = false);
    console.log(testsPassed)
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
    event.preventDefault()
  }

  const handlePasswordVerify = () => {
    values.password === values.passwordVerify ? console.log("it matches!") : console.log("it doesn't match!");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Username field */}
{/* _______________________________________________________ */}
    <FormControl sx={{ m: 1, width: '30ch' }}>
    <InputLabel>Username</InputLabel>
      <OutlinedInput id="usernameField" label="Username" helpertext="Please enter your username" onBlur={handleBlur} onChange={handleChange('username')}  />
      </FormControl><br />
       {/* Password field */}
{/* _______________________________________________________ */}
      <FormControl sx={{ m: 1, width: '30ch' }}>
      <InputLabel>Password</InputLabel>
      <OutlinedInput
        id="passwordField"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        label="password"
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
        }/>
        </FormControl><br />
         {/* Password verification field */}
{/* _______________________________________________________ */}
        <FormControl sx={{ m: 1, width: '30ch' }}>
      <InputLabel>Re-enter Password</InputLabel>
      <OutlinedInput
        id="passwordVerifyField"
        type={values.showPassword ? "text" : "password"}
        value={values.passwordVerify}
        label="Re-enter Password"
        onChange={handleChange('passwordVerify')}
        onBlur={handlePasswordVerify}
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
        </FormControl><br />
      <Button variant="text" type="Submit">
        Submit 
      </Button>
      </form>
  );
};

export default NewUserForm;
