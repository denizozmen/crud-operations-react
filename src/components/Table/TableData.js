import React, { useContext } from "react";
import { FormContext } from "../../App";
import "./TableData.css";

const TableData = () => {
  const { editRow, users, deleteUser, setShow } = useContext(FormContext);

  return (
    <table id="DataTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>OperationDate</th>
          <th>Amount</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.description}</td>
              <td>{user.operationDate}</td>
              <td>
                {user.currency}
                {user.amount}
              </td>

              <td>
                <button
                  id="ButonEdit"
                  onClick={() => {
                    editRow(user);
                    setShow(true);
                  }}
                >
                  Edit
                </button>
                <button id="ButonDelete" onClick={() => deleteUser(user.id)}>
                  
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
