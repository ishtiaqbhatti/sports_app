import React from "react";

const CancelButton = ({ text, onClick, type, disabled, label }) => (
  <button
    className="os-btn waves-effect waves-light cancel-btn text-uppercase"
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

export default CancelButton;
