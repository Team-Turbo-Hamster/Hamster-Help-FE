import InitialLogin from "../components/Login";

const Login = () => {
  return (
    <div>
      <h1> Welcome to Hamster Help </h1>
      <div> Our Logo dot png</div>
      <div> This will be the stack button </div>
      <p> Please Login </p>
      <div>{InitialLogin()}</div>
    </div>
  );
};

export default Login;
