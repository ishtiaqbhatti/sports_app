import React from "react";
import "../ui.css";

const GreenButton = ({ label, type, onClick, disabled }) => {
  return (
    <button
      className="effect effect-1"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default GreenButton;
