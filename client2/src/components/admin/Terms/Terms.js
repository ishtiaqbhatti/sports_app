import React, { Component } from "react";
import TermsView from "./TermsView";
import { addTerms } from "../../../actions/adminActions";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { onClickEdit, onClickSave } from "../../../actions/buttonActions";

class Terms extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  componentDidMount() {
    const { terms } = this.props;
    const editorState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(terms))
    );
    this.setState({ editorState });
  }

  componentWillReceiveProps = nextProps => {
    const { terms } = nextProps;
    const editorState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(terms))
    );
    this.setState({ editorState });
  };

  onClickEdit = () => {
    this.props.onClickEdit();
  };

  onClickSave = () => {
    this.props.onClickSave();
  };

  onSubmit = e => {
    e.preventDefault();

    const rawState = JSON.stringify(
      convertToRaw(this.state.editorState.getCurrentContent())
    );
    this.props.addTerms({ content: rawState });

    toast.success("Successfully Updated Terms & Conditions");
    this.onClickSave();
  };

  handleEditorState = editorState => this.setState({ editorState });

  render() {
    const { button } = this.props;

    return (
      <TermsView
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
  terms: state.admin.admin.terms,
  button: state.button
});

export default connect(
  mapStateToProps,
  { addTerms, onClickEdit, onClickSave }
)(Terms);
