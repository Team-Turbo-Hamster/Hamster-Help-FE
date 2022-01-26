import NewUserForm from "../components/NewUser";

const NewUser = () => {
  return (
    <div>
      <h1> Welcome to Hamster Help </h1>
      <div> Our Logo dot png</div>
      <p> Please register for access</p>
      <div>
        <NewUserForm />
      </div>
    </div>
  );
};

export default NewUser;
