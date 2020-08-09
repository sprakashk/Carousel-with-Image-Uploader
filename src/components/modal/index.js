import React from "react";
import "./style.css";
const Modal = props => (
  <div className="modal-container">
    <div className="modal-inner-container">
      <div
        className="close-icon"
        title="Close"
        onClick={() => props.modalHandler(false)}
      >
        &times;
      </div>
      <img src={props.modalImage} alt="selected" />
    </div>
  </div>
);

export default Modal;
