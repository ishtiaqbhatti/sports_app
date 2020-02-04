import React from "react";

const SaveButton = ({ text, onClick, type, disabled }) => (
  <button
    className="os-btn waves-effect waves-light save-btn text-uppercase"
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    Save
  </button>
);

export default SaveButton;
