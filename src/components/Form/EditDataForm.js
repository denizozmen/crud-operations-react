import React, { useState, useEffect, useContext } from "react";
import { FormContext } from "../../App";

const EditUserForm = () => {
  const { setEditing, currentUser, updateUser } = useContext(FormContext);

  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button onClick={() => setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
