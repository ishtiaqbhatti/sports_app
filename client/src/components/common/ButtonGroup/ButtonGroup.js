import React from "react";
import SaveButton from "../../ui/Buttons/SaveButton";
import CancelButton from "../../ui/Buttons/CancelButton";

const ButtonGroup = ({ onSubmit, disabled, onClickSave }) => {
  return (
    <div className="osr-btn-group p-b-15  text-center">
      <SaveButton
        label="Save"
        onClick={onSubmit}
        type="save"
        disabled={disabled}
      />
      <CancelButton
        onClick={onClickSave}
        label="Cancel"
        type="cancel"
        disabled={disabled}
      />
    </div>
  );
};

export default ButtonGroup;
