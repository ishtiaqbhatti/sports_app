import React, { Component } from "react";
import aboutus from "../../../img/images/about.png";
import Spinner from "../../common/Spinner/Spinner";

import { withRouter, Link } from "react-router-dom";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { connect } from "react-redux";
import { getAdminData } from "../../../actions/adminActions";
import { resetResults } from "../../../actions/common";

class AboutUs extends Component {
  componentDidMount() {
    if (!this.props.loadingfromAdmin) {
      this.props.getAdminData();
    }
    this.props.resetResults();
  }

  render() {
    if (!this.props.loadingfromAdmin) {
      return <Spinner />;
    }
    return (
      <section
        className="d-flex align-items-center flex-column justify-content-center h-100"
        style={{
          backgroundImage: "url(" + this.props.websiteBg + ")",
          backgroundPosition: "center",
          opacity: 0.9
        }}
      >
        <div
          className="about-us-wrap radius-5"
          style={{ position: "relative", width: "80%" }}
        >
          <h5 className="title">{this.props.t.aboutUs}</h5>
          <div className="about-caption d-xs-inherit d-flex align-items-center">
            <figure className="sticky-about-us">
              <img class="modal-image-style" src={aboutus} alt="About Us" />
            </figure>
            <div>
              <Editor
                readOnly
                toolbarHidden
                editorState={EditorState.createWithContent(
                  convertFromRaw(JSON.parse(this.props.aboutUs))
                )}
                wrapperClassName="editor-about-us-wrapper"
                editorClassName="editor-about-us-content"
                editorStyle={{ overflow: "none", overflowY: "none" }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  aboutUs: state.admin.admin.aboutUs,
  websiteBg: state.admin.admin.websiteBg,
  loadingfromAdmin: state.common.loadingfromAdmin,
  loading: state.common.loading,
  t: state.common.translatedLabels
});

export default connect(
  mapStateToProps,
  { getAdminData, resetResults }
)(withRouter(AboutUs));
