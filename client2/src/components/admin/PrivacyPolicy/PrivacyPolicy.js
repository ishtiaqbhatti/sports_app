import React, { Component } from "react";
import PrivacyPolicyView from "./PrivacyPolicyView";
import { addPP } from "../../../actions/adminActions";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { onClickEdit, onClickSave } from "../../../actions/buttonActions";

class PrivacyPolicy extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  componentDidMount() {
    const { pp } = this.props;
    const editorState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(pp))
    );
    this.setState({ editorState });
  }

  componentWillReceiveProps = nextProps => {
    const { pp } = nextProps;
    const editorState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(pp))
    );
    this.setState({ editorState });
  };

  onClickSave = () => {
    this.props.onClickSave();
  };

  onClickEdit = () => {
    this.props.onClickEdit();
  };

  onSubmit = e => {
    e.preventDefault();

    const rawState = JSON.stringify(
      convertToRaw(this.state.editorState.getCurrentContent())
    );

    this.props.addPP({ content: rawState });

    toast.success("Successfully Updated Privacy Policy");
    this.onClickSave();
  };

  handleEditorState = editorState => this.setState({ editorState });

  render() {
    const { button } = this.props;

    return (
      <PrivacyPolicyView
        onClickEdit={this.onClickEdit}
        onSubmit={this.onSubmit}
        editorState={this.state.editorState}
        handleEditorState={this.handleEditorState}
        button={button}
        onClickSave={this.onClickSave}
      />
    );
  }
}

const mapStateToProps = state => ({
  pp: state.admin.admin.pp,
  button: state.button
});

export default connect(
  mapStateToProps,
  { addPP, onClickEdit, onClickSave }
)(PrivacyPolicy);
