import React from "react";
import "./Buttons.css";

const AddButton = ({ type, onClick, disabled, label }) => (
  <button
    className="customBtn add"
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    Add
  </button>
);

export default AddButton;
