import React from "react";
import EditButton from "../../ui/Buttons/EditButton";
import PrivacyPolicyForm from "./PrivacyPolicyForm";
import ButtonGroup from "../../common/ButtonGroup/ButtonGroup";

const PrivacyPolicyView = ({
  onClickEdit,
  editorState,
  handleEditorState,
  button,
  onSubmit,
  onClickSave
}) => {
  return (
    <div className="tab-pane" id="services" role="tabpanel">
      <div className="row">
        <div className="col text-right">
          <EditButton
            onClick={onClickEdit}
            disabled={button.editdisabled}
            type="Edit"
          >
            Edit
          </EditButton>
        </div>
        <div className="col-md-12 text-center">
          <h4 className="font-32 tabs-title">Privacy Policy</h4>
        </div>
        <PrivacyPolicyForm
          onSubmit={onSubmit}
          handleEditorState={handleEditorState}
          editorState={editorState}
          formdisabled={button.formdisabled}
          onClickSave={onClickSave}
        />
      </div>
      <div className="bd-top" />
      <ButtonGroup
        onSubmit={onSubmit}
        disabled={button.disabled}
        onClickSave={onClickSave}
      />
    </div>
  );
};

export default PrivacyPolicyView;
