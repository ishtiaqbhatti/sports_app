import React, { Component } from "react";
import AboutUsView from "./AboutUs-View";
import { addAboutUs } from "../../../actions/adminActions";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { onClickEdit, onClickSave } from "../../../actions/buttonActions";

class AboutUs extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    hello: ""
  };

  componentDidMount() {
    const { aboutUs } = this.props;
    const editorState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(aboutUs))
    );
    this.setState({ editorState });
  }

  componentWillReceiveProps = nextProps => {
    const { aboutUs } = nextProps;
    const editorState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(aboutUs))
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
    this.props.addAboutUs({ content: rawState });

    toast.success("Successfully Updated About Us of the Website");
    this.onClickSave();
  };

  handleEditorState = editorState => this.setState({ editorState });

  render() {
    const { button } = this.props;
    return (
      <AboutUsView
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
  aboutUs: state.admin.admin.aboutUs,
  button: state.button
});

export default connect(
  mapStateToProps,
  { addAboutUs, onClickEdit, onClickSave }
)(AboutUs);
