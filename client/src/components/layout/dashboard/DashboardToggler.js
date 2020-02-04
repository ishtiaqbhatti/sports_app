import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getLoginToggler } from "../../../actions/profileActions";
import Loader from "react-loader-spinner";
class DashboardToggler extends Component {
  componentDidMount() {
    this.props.getLoginToggler(this.props.history, this.props.auth.user);
  }

  render() {
    return (
      <div className="centered">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getLoginToggler }
)(withRouter(DashboardToggler));
