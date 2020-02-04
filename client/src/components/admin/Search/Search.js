import React, { Component } from "react";
import SelectListGroup from "../../common/SelectListGroup";
import moment from "moment";
import { connect } from "react-redux";
import {
  searchByAdmin,
  deleteUser,
  blockUser,
  unBlockUser
} from "../../../actions/adminActions";

import GreenButton from "../../ui/Buttons/GreenButton";
import { Link } from "react-router-dom";
import getCountryName from "../../../utils/getCountryName";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class Search extends Component {
  state = {
    filterBy: "both",
    searchQuery: "",
    users: [],
    filteredUsers: [],
    loading: true
  };

  componentDidMount() {}

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.searchResults) {
      this.setState({ loading: false });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    let searchCriteria = {
      searchQuery: this.state.searchQuery,
      filterBy: this.state.filterBy
    };

    this.props.searchByAdmin(searchCriteria);
  };

  onDelete = (id, role) => {
    let user = {
      id: id,
      role: role
    };
    this.props.deleteUser(user);
  };

  onBlock = (id, role) => {
    let user = {
      id: id,
      role: role
    };

    this.props.blockUser(user);
  };

  onUnBlock = (id, role) => {
    let user = {
      id: id,
      role: role
    };
    this.props.unBlockUser(user);
  };

  confirmDelete = user => {
    confirmAlert({
      title: "Confirm",
      message: "Are you sure you want to delete the User",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.onDelete(user.user._id, user.user.userRole)
        },
        {
          label: "No"
        }
      ]
    });
  };

  render() {
    const searchOptions = [
      { label: "Both Vendor and Planner", value: "both" },
      { label: "Vendor", value: "vendor" },
      { label: "Planner", value: "planner" }
    ];

    const users = this.props.searchResults;
    // console.log(users[0].targetMarket);
    return (
      <div className="tab-pane" id="services" role="tabpanel">
        <form onSubmit={this.onSubmitForm} noValidate>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "stretch" }}
          >
            <div className="col-md-5">
              <div className="form-group" style={{ paddingLeft: "3rem" }}>
                {/* <span className="fa fa-search form-control-feedback" /> */}
                <input
                  name="searchQuery"
                  style={{ width: "28rem" }}
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  onChange={this.onChange}
                  value={this.state.searchQuery}
                />
              </div>
            </div>
            <div className="form-group has-search col-md-3">
              <SelectListGroup
                name="filterBy"
                value={this.state.filtereBy}
                onChange={this.onChange}
                options={searchOptions}
              />
            </div>
            <div className="col-md-2">
              <GreenButton type="submit" label="Search" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">StoreName</th>
                  <th scope="col">Registration Date</th>
                  <th scope="col">Country</th>
                  <th scope="col">I am an Event</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users
                  ? users.map(user => (
                      <tr key={user._id}>
                        <td>
                          <Link
                            to={{
                              pathname: "/dashboard/admin/user",
                              state: {
                                user_id: user._id,
                                targetMarket: user.targetMarket,
                                userType: user.user.userRole
                              }
                            }}
                          >
                            {user.storeName}
                          </Link>
                        </td>
                        <td>{moment(user.date).format("Do MMMM YYYY")}</td>
                        <td>{getCountryName(user.country)}</td>
                        {user.user.userRole === "vendor" ? (
                          <td style={{ color: "blue" }}>
                            {user.user.userRole}
                          </td>
                        ) : (
                          <td style={{ color: "green" }}>
                            {user.user.userRole}
                          </td>
                        )}
                        {!user.liveProfile ? (
                          <td style={{ color: "red" }}>Blocked</td>
                        ) : (
                          <td style={{ color: "green" }}>Live</td>
                        )}
                        <td style={{ display: "flex" }}>
                          <button
                            type="delete"
                            className="admin-btn"
                            style={{ backgroundColor: "red" }}
                            onClick={() => this.confirmDelete(user)}
                          >
                            Delete
                          </button>
                          {!user.liveProfile ? (
                            <button
                              className="admin-btn"
                              style={{
                                backgroundColor: "green",
                                marginLeft: "5px"
                              }}
                              onClick={() =>
                                this.onUnBlock(user._id, user.user.userRole)
                              }
                            >
                              UnBlock
                            </button>
                          ) : (
                            <button
                              className="admin-btn"
                              style={{
                                backgroundColor: "#f58142",
                                marginLeft: "5px"
                              }}
                              onClick={() =>
                                this.onBlock(user._id, user.user.userRole)
                              }
                            >
                              Block
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.admin.searchResults
});

export default connect(
  mapStateToProps,
  { searchByAdmin, deleteUser, blockUser, unBlockUser }
)(Search);
