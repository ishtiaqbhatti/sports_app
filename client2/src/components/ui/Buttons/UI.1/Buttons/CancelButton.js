import React from "react";

const CancelButton = ({ text, onClick, type, disabled }) => (
  <button
    className="os-btn waves-effect waves-light cancel-btn text-uppercase"
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    Cancel
  </button>
);

export default CancelButton;
