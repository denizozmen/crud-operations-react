import React, { useState, useContext } from "react";
import { FormContext } from "../../App";
import { format } from "date-fns";
import "./Forms.css";

const AddDataForm = () => {
  const { addUser } = useContext(FormContext);

  const initialFormState = {
    id: null,
    name: "",
    description: "",
    operationDate: format(new Date(), "dd.MM.yyyy"),
    amount: "",
    currency: "TRY",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.description || !user.amount || !user.currency)
          return;

        addUser(user);
        setUser(initialFormState);
        console.log(user);
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
        <option selected value="TRY">
          TRY
        </option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <button id="ButtonAddData">Add Data</button>
    </form>
  );
};

export default AddDataForm;
