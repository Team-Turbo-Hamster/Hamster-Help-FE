import React, { useState, useEffect } from "react";
import { createUser, getAllUsers } from "../utils/apiRequests";
import { Image } from "cloudinary-react";

const CloudinaryTest = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    getAllUsers().then((data) => setUsers(data));
  }, []);

  console.log(users);

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setNewUser((prevState) => ({
        ...prevState,
        avatar: reader.result,
      }));
    };
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const submitCreateUser = () => {
    createUser(newUser);
  };

  return (
    <div>
      <img width="100" height="100" src={newUser.avatar} />
      <input
        accept=".png, .jpg, .jpeg"
        type="file"
        name="avatar"
        onChange={handleFileInputChange}
      />

      <input
        type="text"
        name="name"
        value={newUser.name}
        onChange={(e) =>
          setNewUser((prevState) => ({ ...prevState, name: e.target.value }))
        }
      />
      <input
        type="text"
        name="age"
        value={newUser.email}
        onChange={(e) =>
          setNewUser((prevState) => ({ ...prevState, email: e.target.value }))
        }
      />

      <button onClick={submitCreateUser}>Create User</button>

      {users.map((user) => (
        <div key={user.id}>
          <Image
            width="100"
            cloudName="turbo-hamster"
            crop="scale"
            publicId={user.avatar}
          />
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
};

export default CloudinaryTest;
