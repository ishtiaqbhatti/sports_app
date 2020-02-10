import React, { Component } from "react";
import { connect } from "react-redux";
import { VendorSidebar, PlannerSidebar, AdminSidebar } from "./sidebar/index";
import TopBar from "./topbar/TopBar";
import { getCurrentProfile } from "../../../actions/profileActions";
import { getAdminData } from "../../../actions/adminActions";
import { withRouter } from "react-router-dom";
import Spinner from "../../common/Spinner/Spinner";
import isEmpty from "../../../utils/is-empty";

class Dashboard extends Component {
  state = {
    disabled: false,
    loading: true
  };
  componentDidMount() {
    if (!this.props.profileLoaded) {
      console.log("GET CURRENT PROFILE IN DASHBOARD");
      this.props.getCurrentProfile();
    }
    if (!this.props.loadingfromAdmin) {
      this.props.getAdminData();
    }
  }

  Sidebar = () => {
    const { user } = this.props.auth;
    if (user.type === "planner") {
      return <PlannerSidebar disabled={this.state.disabled} />;
    } else if (user.type === "vendor") {
      return <VendorSidebar disabled={this.state.disabled} />;
    }
  };

  componentWillReceiveProps = nextProps => {
    if (!isEmpty(nextProps.profile)) {
      if (nextProps.profile.user.profileCompleted) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    }
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    // if (!isAuthenticated) {
    //   return (
    //     <div>
    //       <h1>
    //         You are Not Authorized to View this. Kindly Login as Authorized User
    //         to have access to this View.{" "}
    //       </h1>
    //     </div>
    //   );
    // }
    const Sidebar = this.Sidebar();
    const { t } = this.props;
    if (this.props.profile) {
      return (
        <React.Fragment>
          <div className="fixed-left" style={{ overflow: "visible" }}>
            <div className="wrapper">
              {Sidebar}
              {/* {user.type === "admin" ? <AdminSidebar /> : null} */}
              {/* {!this.state.loading ? Sidebar : null} */}
              <div className="content-page">
                <div className="content">
                  <TopBar />
                  <div className="page-content-wrapper">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-12 sub-banner">
                          <h5 className="page-title">
                            {user.type === "planner" || user.type === "vendor"
                              ? user.store +
                                " " +
                                (t.dashboard ? t.dashboard : "")
                              : "Welcome Admin"}
                          </h5>
                        </div>
                      </div>
                      <div
                        style={{ paddingTop: "1rem" }}
                        className="tab-content"
                      >
                        {this.props.children}
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
    return null;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile.profile,
  loading: state.common.loading,
  loadingfromAdmin: state.common.loadingfromAdmin,
  profileLoaded: state.common.profileLoaded,
  t: state.common.dashboardLabels
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getAdminData }
)(withRouter(Dashboard));
