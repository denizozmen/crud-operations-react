import React, { useState,useContext } from "react";
import { button } from "react";
import "./ButtonAddData.css";
import { FormContext } from "../../App";

import { Modal } from "../Modal/Modal";

const ButtonAddData = () => {
  const { show, setShow } = useContext(FormContext);

  const closeModalHandler = () => setShow(false);

  return (
    <div>
      {show ? (
        <div onClick={closeModalHandler} className="back-drop"></div>
      ) : null}
      <button onClick={() => setShow(true)} className="btn-openModal">
        Add Data
      </button>
      <Modal show={show} close={closeModalHandler} />
    </div>
  );
};

export default ButtonAddData;
