import React, { useState, createContext } from "react";
import ButtonAddData from "./components/Button/ButtonAddData";
import TableData from "./components/Table/TableData";

export const FormContext = createContext();

function App() {
  const [show, setShow] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };

  // Setting state
  const [users, setUsers] = useState("");
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  console.log(users);
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

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
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
        setShow
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
