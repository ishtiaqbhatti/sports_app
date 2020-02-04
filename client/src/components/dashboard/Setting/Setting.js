import React, { Component } from "react";
import { connect } from "react-redux";
import { resetPassword, clearErrors } from "../../../actions/profileActions";
import classnames from "classnames";
import Spinner from "../../common/Spinner/Spinner";
import { toast } from "react-toastify";

class Setting extends Component {
  state = {
    errors: {},
    successM: {},
    oldPass: "",
    newPass: "",
    newPass2: "",
    loading: false
  };

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.errors) {
      this.setState({
        ...this.state,
        errors: nextProps.errors
      });
    }
  };

  canBeSubmitted() {
    const { oldPass, newPass, newPass2 } = this.state;
    return oldPass.length > 7 && newPass.length > 7 && newPass2.length > 7;
  }

  onClickCancel = () => {
    this.setState({ oldPass: "", newPass: "", newPass2: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSuccess = () => {
    toast.success("Successfully Updated the Password");
  };

  onSubmit = e => {
    e.preventDefault();

    let passwordFields = {};
    passwordFields.oldPass = this.state.oldPass;
    passwordFields.newPass = this.state.newPass;
    passwordFields.newPass2 = this.state.newPass2;

    this.setState({ loading: true });

    this.props.resetPassword(passwordFields);

    setTimeout(() => {
      this.afterFormSubmit();
    }, 3000);
  };

  afterFormSubmit = () => {
    if (Object.keys(this.state.errors).length > 0) {
      toast.error("Failed to Save. Please try Again");
      this.setState({ loading: false });
    } else {
      toast.success("Successfully Updated the Password");
      this.setState({ loading: false, oldPass: "", newPass: "", newPass2: "" });
    }
  };

  render() {
    const { errors } = this.state;
    const { t } = this.props;
    const isEnabled = this.canBeSubmitted();

    if (this.state.loading) return <Spinner />;
    return (
      <div classNameName="tab-pane" id="office" role="tabpanel">
        <div className="row">
          <div className="col-md-12 text-center">
            <h4 className="font-32 tabs-title">
              {t.setting ? t.setting : "Setting"}
            </h4>
          </div>
        </div>
        <form onSubmit={this.onSubmit} id="settings" noValidate>
          <div classNameName="row">
            <div className="justify-content-center w-100 d-flex">
              <div className="col-md-4">
                <div className="m-t-20">
                  <h6 className="text-muted">
                    <b>{t.oldPassword ? t.oldPassword : "Old Password"}</b>
                  </h6>
                  <input
                    type="password"
                    placeholder={
                      t.alphanumeric
                        ? t.alphanumeric
                        : "Alphanumeric Password (min 8 characters)"
                    }
                    className={classnames("form-control", {
                      "is-invalid": errors.password
                    })}
                    name="oldPass"
                    onChange={this.onChange}
                    value={this.state.oldPass}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="m-t-20">
                  <h6 className="text-muted">
                    <b>{t.NewPassword ? t.NewPassword : "New Password"}</b>
                  </h6>
                  <input
                    type="password"
                    placeholder={
                      t.alphanumeric
                        ? t.alphanumeric
                        : "Alphanumeric Password (min 8 characters)"
                    }
                    className="form-control"
                    name="newPass"
                    onChange={this.onChange}
                    value={this.state.newPass}
                  />
                </div>
                <div className="m-t-20">
                  <h6 className="text-muted">
                    <b>{`${t.reEnter ? t.reEnter : "ReEnter"} ${
                      t.NewPassword ? t.NewPassword : "New Password"
                    }`}</b>
                  </h6>
                  <input
                    type="password"
                    placeholder={
                      t.alphanumeric
                        ? t.alphanumeric
                        : "Alphanumeric Password (min 8 characters)"
                    }
                    className={classnames("form-control", {
                      "is-invalid": errors.isMatch
                    })}
                    name="newPass2"
                    onChange={this.onChange}
                    value={this.state.newPass2}
                  />
                  {errors.isMatch && (
                    <div className="invalid-feedback">{errors.isMatch}</div>
                  )}
                </div>
                {this.state.successM.message && (
                  <h6 style={{ color: "green" }}>Successfully Updated</h6>
                )}
              </div>
            </div>
          </div>
        </form>
        <div className="bd-top" />
        <div className="osr-btn-group p-b-15  text-center">
          <button
            className="os-btn waves-effect waves-light save-btn text-uppercase"
            form="settings"
            type="save"
            disabled={!isEnabled}
            onClick={this.onSubmit}
          >
            {t.save ? t.save : "Save"}
          </button>
          <button
            className="os-btn waves-effect waves-light cancel-btn text-uppercase"
            type="button"
            onClick={this.onClickCancel}
          >
            {t.cancel ? t.cancel : "Cancel"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors.errors,
  t: state.common.dashboardLabels
});

export default connect(
  mapStateToProps,
  { resetPassword, clearErrors }
)(Setting);
