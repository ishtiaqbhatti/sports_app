import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlannerKeywords } from "../../../actions/plannerActions";
import { addVendorKeywords } from "../../../actions/vendorActions";
import { toast } from "react-toastify";
import Spinner from "../../common/Spinner/Spinner";

import EditButton from "../../ui/Buttons/EditButton";
import SaveButton from "../../ui/Buttons/SaveButton";
import CancelButton from "../../ui/Buttons/CancelButton";
import KeywordsForm from "./KeywordsForm";
import {
  onClickSave,
  onClickEdit,
  onClickCancel
} from "../../../actions/buttonActions";

import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.

class Keywords extends Component {
  state = {
    tags: [],
    loading: true,
    errors: {}
  };

  componentDidMount() {
    if (this.props.keywords) {
      const { keywords } = this.props;
      this.setState({ tags: keywords });
    }
  }

  handleChange = tags => {
    this.setState({ tags });
  };

  onClickEdit = () => {
    this.props.onClickEdit();
  };

  onClickSave = () => {
    this.props.onClickSave();
  };

  onClickCancel = () => {
    this.setState({ tags: this.props.keywords });
    this.props.onClickSave();
  };

  onSubmit = e => {
    e.preventDefault();
    const keywords = {};
    keywords.tags = this.state.tags;
    const { type } = this.props.auth.user;

    if (type === "planner") {
      this.props.addPlannerKeywords(keywords);
    } else if (type === "vendor") {
      this.props.addVendorKeywords(keywords);
    }

    this.props.onClickSave();
    toast.success("Sucessfully Updated the Keywords");
  };

  render() {
    const { button, t } = this.props;
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <div className="tab-pane" id="office" role="tabpanel">
        <div className="row">
          <div className="col text-left align-self-center">
            <h4 className="font-18 mb-0 tabs-title">
              {t.keywords}
              <sup className="text-danger">*</sup>
            </h4>
          </div>
          <div className="col text-right">
            <EditButton
              onClick={this.onClickEdit}
              disabled={button.editdisabled}
              type="Edit"
            >
              {t.edit}
            </EditButton>
          </div>
        </div>
        <KeywordsForm
          button={button}
          tags={this.state.tags}
          handleChange={this.handleChange}
        />
        <div className="bd-top" />
        <div className="osr-btn-group p-b-15  text-center">
          <SaveButton
            onClick={this.onSubmit}
            label="Save"
            type="save"
            disabled={button.disabled}
          />
          <CancelButton
            onClick={this.onClickCancel}
            label="Cancel"
            type="cancel"
            disabled={button.disabled}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  keywords: state.profile.profile.keywords,
  button: state.button,
  t: state.common.dashboardLabels
});

export default connect(
  mapStateToProps,
  {
    onClickEdit,
    onClickSave,
    onClickCancel,
    addPlannerKeywords,
    addVendorKeywords
  }
)(Keywords);
