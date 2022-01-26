import InitialLogin from "../components/Login";
import { Button, Box } from "@mui/material";

const Login = () => {
  return (
    <Box sx={{ background: "primary.dark" }}>
      <h1> Welcome to Hamster Help </h1>
      <div> Our Logo dot png </div>
      <div>
        {" "}
        <Button>Open Stack</Button>{" "}
      </div>
      <p> Please Login </p>
      <div>{InitialLogin()}</div>
    </Box>
  );
};

export default Login;
