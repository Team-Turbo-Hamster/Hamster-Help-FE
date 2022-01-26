import InitialLogin from "../components/Login";
import { Button, Box, Typography } from "@mui/material";

const Login = () => {
  return (
    <Box sx={{ display: "grid", bgcolor: "primary.dark" }}>
      <Typography variant="h1"> Welcome to Hamster Help </Typography>
      <img src="" alt="Our Logo" />
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
