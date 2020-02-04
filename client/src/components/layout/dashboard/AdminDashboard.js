import React, { Component } from "react";
import { connect } from "react-redux";
import { AdminSidebar } from "./sidebar/index";
import AdminTopBar from "./topbar/AdminTopBar";

import { getAdminData } from "../../../actions/adminActions";
import { withRouter } from "react-router-dom";
import Spinner from "../../common/Spinner/Spinner";
import isEmpty from "../../../utils/is-empty";

class AdminDashboard extends Component {
  componentDidMount() {
    if (!this.props.loadingfromAdmin) {
      this.props.getAdminData();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="fixed-left" style={{ overflow: "visible" }}>
          <div className="wrapper">
            <AdminSidebar />

            <div className="content-page">
              <div className="content">
                <AdminTopBar />
                <div className="page-content-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-12 sub-banner">
                        <h5 className="page-title">Welcome Admin</h5>
                      </div>
                    </div>
                    <div style={{ paddingTop: "1rem" }} className="tab-content">
                      {this.props.loadingfromAdmin ? (
                        this.props.children
                      ) : (
                        <Spinner />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,

  loading: state.common.loading,
  loadingfromAdmin: state.common.loadingfromAdmin
});

export default connect(
  mapStateToProps,
  { getAdminData }
)(withRouter(AdminDashboard));
