import React from "react";
import "./Buttons.css";

const SmallDelteBtn = ({ type, onClick, disabled, name }) => (
  <button
    className="customBtn sm-delete"
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    Block
  </button>
);

export default SmallDelteBtn;
