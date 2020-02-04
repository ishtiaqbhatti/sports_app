import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AboutUsForm = ({
  onSubmit,
  formdisabled,
  editorState,
  handleEditorState
}) => {
  return (
    <form id="terms" onSubmit={onSubmit}>
      <fieldset disabled={formdisabled}>
        <div className="col-md-10 offset-md-1 bg-white">
          <Editor
            readOnly={formdisabled}
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="editer-content"
            onEditorStateChange={handleEditorState}
          />
        </div>
        {/* end card */}
      </fieldset>
    </form>
  );
};

export default AboutUsForm;
