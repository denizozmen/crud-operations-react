import React, { useContext } from "react";
import "./Modal.css";
import { Fragment } from "react";
import EditDataForm from "../Form/EditDataForm";
import AddDataForm from "../Form/AddDataForm";
import { FormContext } from "../../App";

export const Modal = ({ show, close }) => {
  const { editing } = useContext(FormContext);
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p>Operations</p>
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <div className="flex-large">
            {editing ? (
              <Fragment>
                <h2>Edit Data</h2>
                <EditDataForm />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Add Data</h2>
                <AddDataForm />
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
