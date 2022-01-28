import Registration from "../components/Registration";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1> Welcome to Hamster Help </h1>
      <div> Our Logo dot png</div>
      <p> Please register for access</p>
      <div>
        <Registration />
      </div>
      <Button onClick={() => navigate("/login")}>Login</Button>
    </div>
  );
};

export default Register;
