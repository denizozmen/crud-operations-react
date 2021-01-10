import React, { useContext } from "react";
import "./Modal.css";
import { Fragment } from "react";
import EditDataForm from "../Form/EditDataForm";
import AddDataForm from "../Form/AddDataForm";
import { FormContext } from "../../App";

export const Modal = ({ show, close }) => {
  const { editing, setEditing, currentUser, updateUser, addUser,setShow } = useContext(
    FormContext
  );
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p>New Operation</p>
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <div className="flex-large">
            {editing ? (
              <Fragment>
                <h2>Edit user</h2>
                <EditDataForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                  setShow={setShow}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Add user</h2>
                <AddDataForm addUser={addUser} />
              </Fragment>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
