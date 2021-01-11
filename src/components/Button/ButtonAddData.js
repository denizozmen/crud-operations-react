import React, { useContext } from "react";
import { button } from "react";
import "./ButtonAddData.css";
import { FormContext } from "../../App";

import { Modal } from "../Modal/Modal";

const ButtonAddData = () => {
  const { show, setShow, setCurrentUser, setEditing } = useContext(FormContext);

  const initialFormState = { id: null, name: "", username: "" };

  const closeModalHandler = () => setShow(false);

  const ShowAddUser = () => {
    setShow(true);
    setCurrentUser(initialFormState);
    setEditing(false);
  };

  return (
    <div>
      {show ? (
        <div onClick={closeModalHandler} className="back-drop"></div>
      ) : null}
      <button onClick={ShowAddUser} className="btn-openModal">
        Add Data
      </button>
      <Modal show={show} close={closeModalHandler} />
    </div>
  );
};

export default ButtonAddData;
