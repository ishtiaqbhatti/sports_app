import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUserCount,
  getPlannerCount,
  getVendorCount,
  getBlockPlannerCount,
  getBlockVendorCount
} from "../../../actions/adminActions";

class UserStats extends Component {
  componentDidMount = () => {
    this.props.getUserCount();
    this.props.getPlannerCount();
    this.props.getBlockPlannerCount();
    this.props.getBlockVendorCount();
  };

  render() {
    const {
      userCount,
      plannerCount,
      blockPlannerCount,
      blockVendorCount
    } = this.props;
    const uCount = userCount - 1;
    const vCount = uCount - plannerCount;

    return (
      <div className="tab-pane" id="services" role="tabpanel">
        <div className="row">
          <div
            style={{ paddingBottom: "30px" }}
            className="col-md-12 text-center"
          >
            <h4 className="font-32 tabs-title">Registered Users</h4>
          </div>
          <div className="col-md-12 text-center">
            <div style={{ display: "flex" }}>
              <div className="col-md-3" />
              <div className="col-md-3">
                <h5 style={{ color: "green" }}>Event Planners</h5>
              </div>
              <div className="col-md-3">
                <h5 style={{ color: "green" }}>{plannerCount}</h5>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="col-md-3" />
              <div className="col-md-3">
                <h5 style={{ color: "blue" }}>Event Vendors</h5>
              </div>
              <div className="col-md-3">
                <h5 style={{ color: "blue" }}>{vCount}</h5>
              </div>
            </div>
            <div className="bd-top" />
            <div style={{ display: "flex" }}>
              <div className="col-md-3" />
              <div className="col-md-3">
                <h4>Total</h4>
              </div>
              <div className="col-md-3">
                <h4>{uCount}</h4>
              </div>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <div className="col-md-3" />
              <div className="col-md-3">
                <h5 style={{ color: "red" }}>Blocked Planners</h5>
              </div>
              <div className="col-md-3">
                <h5 style={{ color: "red" }}>
                  {blockPlannerCount ? blockPlannerCount : 0}
                </h5>
              </div>
            </div>{" "}
            <div style={{ display: "flex" }}>
              <div className="col-md-3" />
              <div className="col-md-3">
                <h5 style={{ color: "red" }}>Blocked Vendors</h5>
              </div>
              <div className="col-md-3">
                <h5 style={{ color: "red" }}>
                  {blockVendorCount ? blockVendorCount : 0}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userCount: state.admin.usersCount,
  plannerCount: state.admin.plannerCount,
  vendorCount: state.admin.vendorCount,
  blockPlannerCount: state.admin.blockPlannerCount,
  blockVendorCount: state.admin.blockVendorCount
});

export default connect(
  mapStateToProps,
  {
    getUserCount,
    getPlannerCount,
    getVendorCount,
    getBlockPlannerCount,
    getBlockVendorCount
  }
)(UserStats);
