import React, { Component } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";

// import Logo from "../../../../img/images/logo.png";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="fixed-top" style={{ zIndex: "5" }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              {/* <img className="header-img" src={Logo} alt="Logo" /> */}
            </Link>
            <div className="ml-auto">
              <div className="float-left">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    {/* <li className="nav-item active">
                      <NavLink
                        className="nav-link"
                        activeClassName="active"
                        to="/"
                      >
                        {translatedLabels ? translatedLabels.home : "Home"}
                        <span className="sr-only">(current)</span>
                      </NavLink>
                    </li> */}

                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="active-planners"
                        to="/register"
                      >
                        Register
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <Link className="float-right login-btn" to="/login">
                {/* <img
                  style={{ maxWidth: "100%" }}
                  src={LoginIcon}
                  alt="Login Icon"
                /> */}

                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-danger dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Login
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="#">
                      As a Manager
                    </Link>
                    <a className="dropdown-item" href="#">
                      As a Coach
                    </a>
                    <a className="dropdown-item" href="#">
                      As Athelete/Parent
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
