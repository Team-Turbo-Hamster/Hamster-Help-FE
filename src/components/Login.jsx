const initialLogin = () => {
  return (
    <form action="/role.home">
      <label for="username">Please enter your username</label>
      <input id="username" type="text">
        username
      </input>
      <input type="submit" value="Submit">
        OK
      </input>
    </form>
  );
};

export default initialLogin;
