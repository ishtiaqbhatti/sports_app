import React, { Component } from "react";
import logo from "../../../../img/logo.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../../../actions/authActions";

import { ReactComponent as LogOutIcon } from "../../../../img/icon-9.svg";

class TopBar extends Component {
  onLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="topbar">
        <div className="topbar-left	d-none d-lg-block">
          <div className="text-center">
            <a href="index.html" className="logo">
              <img src={logo} width={130} alt="logo" />
            </a>
          </div>
        </div>
        <nav className="navbar-custom">
          <ul className="list-inline float-right mb-0">
            <li className="list-inline-item">
              <a
                onClick={this.onLogout}
                href="/"
                className="nav-link dropdown-toggle arrow-none waves-effect nav-user"
              >
                <i>
                  <LogOutIcon />
                </i>
                Logout
              </a>
            </li>
          </ul>
          <ul className="list-inline menu-left mb-0">
            <li className="list-inline-item">
              <button
                type="button"
                className="button-menu-mobile open-left waves-effect"
              >
                <i className="ion-navicon" />
              </button>
            </li>
          </ul>
          <div className="clearfix" />
        </nav>
      </div>
    );
  }
}

export default connect(
  null,
  { logoutUser }
)(withRouter(TopBar));
