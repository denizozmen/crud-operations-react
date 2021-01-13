import React, { useState, createContext } from "react";
import ButtonAddData from "./components/Button/ButtonAddData";
import TableData from "./components/Table/TableData";
import Header from "./components/Header/Header";
import "./App.css";

export const FormContext = createContext();

function App() {
  const usersData = [
    {
      id: 1,
      name: "Keyboard",
      description: "Redragon Gaming",
      operationDate: "01.12.2020",
      amount: "40",
      currency: "TRY",
    },
    {
      id: 2,
      name: "Mouse",
      description: "Jelly Comb 2.4G Slim Wireless ",
      operationDate: "04.12.2020",
      amount: "10",
      currency: "USD",
    },
    {
      id: 3,
      name: "USB",
      description: "SanDisk 128GB Cruzer USB 2.0 Flash Drive",
      operationDate: "06.12.2020",
      amount: "50",
      currency: "EUR",
    },
  ];

  const initialFormState = {
    id: null,
    name: "",
    description: "",
    operationDate: "",
    amount: "",
    currency: "",
  };

  // Setting state
  const [show, setShow] = useState(false);
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
        <Header />
        <ButtonAddData />
        <TableData />
      </div>
    </FormContext.Provider>
  );
}

export default App;
