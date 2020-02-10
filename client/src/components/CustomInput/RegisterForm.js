import React from "react";

const RegisterForm = ({
  registerText,
  registerContinue,
  onSubmit,
  isEnabled,
  data,
  onChange,
  onKeyPress
}) => {
  return (
    <div style={{ width: "400px" }} className="regis-form radius-5">
      <div className="d-flex regis-form-head">
        <h4>{registerText}</h4>
      </div>
      <form noValidate onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={onChange}
            onKeyPress={onKeyPress}
            placeholder="Enter your Username"
            value={data.username}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your Email Address"
            onChange={onChange}
            value={data.email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder={"Enter your Password"}
            onChange={onChange}
            value={data.password}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password2"
            placeholder="Enter your Password again"
            onChange={onChange}
            value={data.password2}
          />
        </div>

        <div className="btn-wrap d-flex">
          <button
            type="auth"
            disabled={!isEnabled}
            onClick={onSubmit}
            className="btn btn-primary"
          >
            {registerContinue}
          </button>
          {/* <button type="button" className="btn ml-auto btn-link">
            {t.cancel}
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
