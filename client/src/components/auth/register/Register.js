import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withRouter, Link } from "react-router-dom";
import { resetResults } from "../../../actions/common";
import Background from "../bg.jpg";

var BackgroundStyle = {
  backgroundImage: "url(" + Background + ")"
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      selectedOption: "planner",
      email: "",
      password: "",
      password2: "",
      store: "",
      isdisable: true,
      loading: false
    };
  }

  componentDidMount = () => {
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/dashboard/profile");
    // }

    this.props.resetResults();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
      console.log(nextProps.errors);
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  canBeSubmitted() {
    const { email, password, password2, store } = this.state;
    return (
      email.length > 8 &&
      password.length > 0 &&
      password2.length > 0 &&
      store.length > 0
    );
  }

  onSubmit = e => {
    e.preventDefault();
    if (!this.canBeSubmitted()) {
      return;
    }

    const newUser = {
      type: this.state.selectedOption,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      store: this.state.store
    };

    this.props.registerUser(newUser, this.props.history);
  };

  handleOptionChange = changeEvent => {
    // this.setState({
    //   selectedOption: changeEvent.target.value
    // });
    const selectedOption = changeEvent.target.value;
    this.setState(prevState => ({
      ...prevState,
      selectedOption
    }));
  };

  render() {
    const { t } = this.props;
    const { errors } = this.state;
    const isEnabled = this.canBeSubmitted();

    return (
      <section
        className="d-flex align-items-center flex-column justify-content-center h-100"
        style={{
          backgroundImage: "url(" + this.props.authBg + ")",
          backgroundPosition: "center",
          opacity: 0.9
        }}
      >
        <div className="regis-form radius-5">
          <div className="d-flex regis-form-head">
            <h4>{t.register}</h4>
            <Link className="btn-link btn ml-auto" to="/login">
              {t.login}
            </Link>
          </div>
          <form noValidate onSubmit={this.onSubmit}>
            <div className="d-flex input-radio">
              <div className="input-container">
                <label>
                  <span className="radio">
                    <input
                      name="type"
                      value="planner"
                      checked={this.state.selectedOption === "planner"}
                      type="radio"
                      onChange={this.handleOptionChange}
                    />
                    <span className="radio-value" aria-hidden="true" />
                  </span>
                  <span>{t.planner} </span>
                </label>
              </div>
              <div className="input-container">
                <label>
                  <span className="radio">
                    <input
                      name="type"
                      value="vendor"
                      checked={this.state.selectedOption === "vendor"}
                      type="radio"
                      onChange={this.handleOptionChange}
                    />
                    <span className="radio-value" aria-hidden="true" />
                  </span>
                  <span>{t.vendor}</span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                className={classnames("form-control", {
                  "is-invalid": errors.email
                })}
                name="email"
                placeholder={t.emailAddress}
                onChange={this.onChange}
                value={this.state.email}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className={classnames("form-control", {
                  "is-invalid": errors.password
                })}
                name="password"
                placeholder={t.alphanumeric}
                onChange={this.onChange}
                value={this.state.password}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className={classnames("form-control", {
                  "is-invalid": errors.password2
                })}
                name="password2"
                placeholder={t.alphanumeric}
                onChange={this.onChange}
                value={this.state.password2}
              />
              {errors.password2 && (
                <div className="invalid-feedback">{errors.password2}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                className={classnames("form-control", {
                  "is-invalid": errors.store || errors.storeDuplicate
                })}
                name="store"
                placeholder={t.storeName}
                onChange={this.onChange}
                value={this.state.store}
              />
              {errors.store && (
                <div className="invalid-feedback">{errors.store}</div>
              )}
              {errors.storeDuplicate && (
                <div className="invalid-feedback">{errors.storeDuplicate}</div>
              )}
            </div>
            <div className="btn-wrap d-flex">
              <button
                type="auth"
                disabled={!isEnabled}
                onClick={this.onSubmit}
                className="btn btn-primary"
              >
                {t.continue}
              </button>
              <button type="button" className="btn ml-auto btn-link">
                {t.cancel}
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

Register.propTypes = {
  errors: PropTypes.object,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  authBg: state.admin.admin.authBg,
  errors: state.errors.registerErrors
});

export default connect(mapStateToProps, { registerUser, resetResults })(
  withRouter(Register)
);
