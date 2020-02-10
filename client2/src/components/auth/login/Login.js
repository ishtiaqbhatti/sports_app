import React, { Component } from "react";
import { loginUser } from "../../../actions/authActions";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link, withRouter } from "react-router-dom";
import { resetResults } from "../../../actions/common";
import Joi from "joi-browser";
import Form from "../../common/form";
import isEmpty from "../../../utils/is-empty";
import Loader from "react-loader-spinner";

import Background from "../bg.jpg";

var BackgroundStyle = {
  backgroundImage: "url(" + Background + ")"
};

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    backgroundImage: "",
    errors: {}
  };

  componentDidMount() {
    if (!isEmpty(this.props.authBg)) {
      this.setState({ backgroundImage: this.props.authBg });
    }
    this.props.resetResults();
  }

  schema = {
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] }
      })
      .label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .label("Password")
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  };

  doSubmit = () => {
    const { data } = this.state;
    this.props.loginUser(data, this.props.history);
  };

  render() {
    const { errors, data } = this.state;
    const { t, loading } = this.props;
    console.log(loading);
    return (
      <section
        className="d-flex align-items-center flex-column justify-content-center h-100"
        style={{
          backgroundImage: "url(" + this.props.authBg + ")",
          backgroundPosition: "center",
          opacity: 0.9
        }}
      >
        <div className="regis-form login-form radius-5">
          <div className="d-flex regis-form-head">
            <h4>{t.login}</h4>
            <Link className="btn-link btn ml-auto" to="/register">
              {t.registerNow}
            </Link>
          </div>
          <form noValidate onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className={classnames("form-control", {
                  "is-invalid": errors.email
                })}
                name="email"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={data.email}
              />
              {errors.email || errors.password ? (
                <div className="invalid-feedback">
                  Invalid Email or Password
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className={classnames("form-control", {
                  "is-invalid": errors.password
                })}
                id="Alphanumericpassword"
                placeholder="Password"
                onChange={this.handleChange}
                value={data.password}
              />
              {errors.email || errors.password ? (
                <div className="invalid-feedback">
                  Invalid Email or Password
                </div>
              ) : null}
            </div>
            <Link className="btn-link btn white forgot-link" to="#">
              {t.forgetPassword}
            </Link>
            <div className="btn-wrap text-center">
              <button
                type="auth"
                disabled={this.validate() || loading}
                onClick={this.onSubmit}
                className="btn btn-primary"
              >
                {loading && (
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={40}
                    width={40}
                    //3 secs
                  />
                )}
                {loading && "Logging in"}
                {!loading && t.login}
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  errors: state.errors.loginErrors,
  authBg: state.admin.admin.authBg,
  loading: state.common.loading
});

export default connect(mapStateToProps, { loginUser, resetResults })(
  withRouter(Login)
);
