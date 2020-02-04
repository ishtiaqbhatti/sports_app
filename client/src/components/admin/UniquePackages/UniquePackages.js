import React, { Component } from "react";
import { connect } from "react-redux";
import UniquePackagesView from "./UniquePackages-View";
import {
  addAdminPackages,
  getAdminPackages
} from "../../../actions/adminActions";
import { toast } from "react-toastify";

class UniquePackages extends Component {
  state = {
    data: {
      bespoke: "",
      custom: "",
      disabled: true,
      editdisabled: false
    }
  };

  componentDidMount() {
    this.populateData();
  }

  populateData = () => {
    const { packages } = this.props;

    if (packages) {
      this.setState({
        data: {
          ...this.state.data,
          bespoke: packages.bespoke,
          custom: packages.custom
        }
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    const { packages } = nextProps;
    if (packages) {
      this.setState({
        data: {
          ...this.state.data,
          bespoke: packages.bespoke,
          custom: packages.custom
        }
      });
    }
  }

  onClickEdit = e => {
    this.setState({
      data: {
        ...this.state.data,
        disabled: !this.state.data.disabled,
        editdisabled: !this.state.data.editdisabled
      }
    });
  };

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.onClickEdit();
    const packages = {
      bespoke: this.state.data.bespoke,
      custom: this.state.data.custom
    };

    this.props.addAdminPackages(packages);
    this.onClickEdit();
    toast.success("Succesfully Upaded the Packages");
  };

  onClickCancel = () => {
    this.onClickEdit();
  };

  render() {
    const { data } = this.state;

    return (
      <UniquePackagesView
        data={data}
        onChange={this.onChange}
        onSubmitForm={this.onSubmitForm}
        onClickEdit={this.onClickEdit}
        onClickCancel={this.onClickCancel}
      />
    );
  }
}

const mapStateToProps = state => ({
  packages: state.admin.admin.packages
});

export default connect(
  mapStateToProps,
  { addAdminPackages, getAdminPackages }
)(UniquePackages);
