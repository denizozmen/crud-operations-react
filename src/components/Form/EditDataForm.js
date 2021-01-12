import React, { useState, useEffect, useContext } from "react";
import { FormContext } from "../../App";
import "./Forms.css";

const EditUserForm = () => {
  const { setEditing, currentUser, updateUser } = useContext(FormContext);

  console.log(currentUser);

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
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={user.description}
        onChange={handleInputChange}
      />

      <label>Amount</label>
      <input
        type="number"
        name="amount"
        value={user.amount}
        onChange={handleInputChange}
      ></input>

      <label>Currency</label>
      <select
        type="text"
        name="currency"
        value={user.currency}
        onChange={handleInputChange}
      >
        <option value="TRY">TRY</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <button id="ButtonUpdate">Update Data</button>
    </form>
  );
};

export default EditUserForm;
