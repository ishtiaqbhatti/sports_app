import React from "react";

const SaveButton = ({ text, onClick, type, disabled, form, label, id }) => (
  <button
    className="os-btn waves-effect waves-light save-btn text-uppercase"
    type={type}
    onClick={onClick}
    disabled={disabled}
    form={form}
    id={id}
  >
    {label}
  </button>
);

export default SaveButton;
