import React from "react";

import { withRouter, Link } from "react-router-dom";
import { adminDataLoaded } from "../../../../actions/common";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

const AboutUs = () => {
  const contentObject = this.props.aboutUs;
  const editorState = EditorState.createWithContent(
    convertFromRaw(JSON.parse(contentObject))
  );

  return (
    <section className="d-flex align-items-center flex-column justify-content-center h-100">
      <div className="about-us-wrap radius-5">
        <div className="container">
          <h5 className="title">About us</h5>
          <div className="about-caption d-xs-inherit d-flex align-items-center">
            <figure>
              <img src="images/about.png" alt />
            </figure>
            <div className="text">
              <Editor
                readOnly
                toolbarHidden
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="editer-content"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  aboutUs: state.admin.admin.aboutUs
});

export default withRouter(AboutUs);
