import React from "react";
import "./Buttons.css";

const SmallDelteBtn = ({ type, onClick, disabled, name, label }) => (
  <button
    className="customBtn sm-delete"
    name={name}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {label}
  </button>
);

export default SmallDelteBtn;
