import InitialLogin from "../components/Login";
import {Button} from "@mui/material"

const Login = () => {
  return (
    <div>
      <h1> Welcome to Hamster Help </h1>
      <div> Our Logo dot png</div>
      <div> <Button>Open Stack</Button> </div>
      <p> Please Login </p>
      <div>{InitialLogin()}</div>
    </div>
  );
};

export default Login;
