import React, { useState, createContext } from "react";
import ButtonAddData from "./components/Button/ButtonAddData";
import TableData from "./components/Table/TableData";

export const FormContext = createContext();

function App() {
  const usersData = [
    {
      id: 1,
      name: "Robert",
      description: "floppydiskette",
      operationDate: "04.02.2020",
      amount: "300",
      currency: "TRY",
    },
    {
      id: 2,
      name: "Craig",
      description: "floppydiskette",
      operationDate: "04.02.2020",
      amount: "500",
      currency: "USD",
    },
    {
      id: 3,
      name: "Ben",
      description: "floppydiskette",
      operationDate: "04.02.2020",
      amount: "400",
      currency: "EUR",
    },
  ];

  const [show, setShow] = useState(false);

  const initialFormState = {
    id: null,
    name: "",
    description: "",
    operationDate: "",
    amount: "",
    currency: "",
  };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      description: user.description,
      operationDate: user.operationDate,
      amount: user.amount,
      currency: user.currency,
    });
  };

  return (
    <FormContext.Provider
      value={{
        editing,
        setEditing,
        currentUser,
        updateUser,
        addUser,
        editRow,
        deleteUser,
        users,
        show,
        setShow,
        setCurrentUser,
      }}
    >
      <div>
        <ButtonAddData />
        <TableData />
      </div>
    </FormContext.Provider>
  );
}

export default App;
