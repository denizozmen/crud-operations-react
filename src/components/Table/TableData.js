import React, { useContext } from "react";
import { FormContext } from "../../App";

const TableData = () => {
  const { editRow, users, deleteUser, setShow } = useContext(FormContext);

  

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  onClick={() => {
                    editRow(user);
                    setShow(true);
                  }}
                  className="button muted-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="button muted-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableData;
