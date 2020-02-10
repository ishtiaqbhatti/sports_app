import React from "react";

const EditButton = ({ text, onClick, type, disabled }) => (
  <button
    className="os-btn waves-effect waves-light text-uppercase"
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    Edit
  </button>
);

export default EditButton;
