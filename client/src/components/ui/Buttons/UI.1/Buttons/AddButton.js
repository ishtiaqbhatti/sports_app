import React from "react";
import "./Buttons.css";

const AddButton = ({ type, onClick, disabled }) => (
  <button
    className="customBtn add"
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    Add Category
  </button>
);

export default AddButton;
