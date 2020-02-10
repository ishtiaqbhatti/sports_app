import React, { Component, Fragment } from "react";
import GroupView from "views/Group/Groups";
import GroupProfile from "views/UserProfile/UserProfile";

class Group extends Component {
  state = {
    profileView: false
  };

  componentDidMount() {
    console.log("Mounted");
  }

  onClickEdit = (event, rowData) => {
    this.setState({ ...this.state, profileView: true });
    console.log(event, rowData);
  };

  onClickUpdate = () => {
    this.setState({ ...this.state, profileView: false });
  };
  render() {
    const { profileView } = this.state;

    return (
      <Fragment>
        {profileView ? (
          <GroupProfile onClickUpdate={this.onClickUpdate} />
        ) : (
          <GroupView onClickEdit={this.onClickEdit} />
        )}
      </Fragment>
    );
  }
}

export default Group;
