
import { Button, FormControl, FormControlLabel, Switch, InputLabel, OutlinedInput, InputAdornment, IconButton, Alert } from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const NewUserForm = () => {

  const [values, setValues] = useState({ username: "", password: "", passwordVerify: "", email: "", isATutor: false, showPassword: false });
  const tests = {username: /^[a-zA-Z\s-]{1,30}$/, password: /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])^[a-zA-Z0-9!@#$%^&*]{6,30}$/, email: /[+*?^$./\w]+@\w+\.\w+/}
  const [testsPassed, setTestsPassed] = useState({})
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const handleChange = (prop) => (event) => {
    event.preventDefault();
    setValues({ ...values, [prop]: event.target.value, });
    
  };

  const handleBlur = (prop) => () => {
    let test = new RegExp(tests[prop])
    test.test(values[prop]) ? setTestsPassed({...testsPassed, [prop]: true}) : setTestsPassed({...testsPassed,  [prop]: false});
    handlePasswordVerify();
    handleFormComplete();

  };

  const setTutor = (event) => {
   setValues({...values, isATutor: event.target.checked})
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  const handlePasswordVerify = () => {
    values.password === values.passwordVerify ? testsPassed.passwordVerify = true : testsPassed.passwordVerify = false;
    handleFormComplete();
  }

  const handleHelperText = (prop, helperText)=> {
    console.log(testsPassed)
    return(testsPassed.hasOwnProperty(prop) ? 
    testsPassed[prop] === true ? 
    <Alert  severity="success"></Alert> 
    : <Alert severity="error">{helperText}</Alert> 
            :<></> )

  }
  
  const handleFormComplete = ()=>{
    document.getElementById("RegisterButton").disabled = false
    testsPassed.username === true && testsPassed.password === true && testsPassed.passwordVerify === true && testsPassed.email === true ?
    setButtonDisabled(false): setButtonDisabled(true)
    console.log(testsPassed)
    console.log(values)
  }
  
  const handleSubmit = (event) => {
    console.log("submit: ", values);
    console.log(event);
    event.preventDefault();
  };

  return (
    <form id="registerForm" onSubmit={handleSubmit}>
{/* Username field */}
{/* _______________________________________________________ */}
    <FormControl sx={{ m: 1, width: '30ch' }}>
    <InputLabel>Username</InputLabel>
      <OutlinedInput id="usernameField" label="Username" helpertext="Please enter your username" onBlur={handleBlur('username')} onChange={handleChange('username')}  />
      {handleHelperText("username", "username must be 1-30 characters long and contain only letters or spaces")}
      </FormControl>
       <br />
{/* Email field*/}
{/* _______________________________________________________ */}
      <FormControl sx={{ m: 1, width: '30ch' }}>
      <InputLabel>Email address</InputLabel>
      <OutlinedInput id="emailField" label="Email address" helpertext="Please enter your email address" onBlur={handleBlur('email')} onChange={handleChange('email')}  />
      {handleHelperText("email", "Email must be a valid email address; \"example@domain.tag\"")}
      </FormControl>
       <br />
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
        onBlur={handleBlur('password')}
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
        {handleHelperText("password", "Password must be 6-30 characters long, must contain only letters, numbers and special characters(!@#$%^&*) and must contain at least one uppercase letter, one lowercase letter and one number")}
    
        </FormControl>
        <br />
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
        {handleHelperText("passwordVerify", "Password fields must match!")}
        </FormControl>
        <br />
{/* Tutor toggle */}
{/* _______________________________________________________ */}
        <FormControlLabel control={<Switch onChange={setTutor} />}  label="I am a tutor" /><br/><br />

      <Button id="RegisterButton" variant="text" type="Submit" disabled={buttonDisabled}>
        Register
      </Button>
    </form>
  );
};

export default NewUserForm;
