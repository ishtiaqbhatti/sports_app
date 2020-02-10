import React, { Component } from "react";
import { addCategory, deleteCategory } from "../../../actions/adminActions";

import { connect } from "react-redux";
import CategoryView from "./Category-View";
import { toast } from "react-toastify";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class Category extends Component {
  state = {
    data: {
      disabled: true,
      editdisabled: false,
      input: false,
      addButton: true,
      category: ""
    }
  };

  onClickEdit = e => {
    this.setState({
      data: {
        ...this.state.data,
        disabled: !this.state.data.disabled,
        editdisabled: !this.state.data.editdisabled
      }
    });
  };

  onClickAdd = e => {
    this.setState({
      data: {
        ...this.state.data,
        input: !this.state.data.input,
        addButton: !this.state.data.addButton
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
  addCategory = e => {
    e.preventDefault();

    const newCategory = {
      category: this.state.data.category
    };

    this.props.addCategory(newCategory);

    this.setState({
      data: {
        ...this.state.data,
        input: !this.state.data.input,
        addButton: !this.state.data.addButton
      }
    });
  };

  onDeleteCategory = id => {
    confirmAlert({
      title: "Confirm",
      message: "Are you sure you want to delete the Category",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.onDelete(id)
        },
        {
          label: "No"
        }
      ]
    });
  };

  onDelete = id => {
    let category = {
      id: id
    };

    this.props.deleteCategory(category);
  };

  onClickSave = () => {
    this.onClickEdit();
    toast.success("Successfully Updated the Categories");
  };

  render() {
    const { categories } = this.props;

    return (
      <CategoryView
        data={this.state.data}
        onChange={this.onChange}
        onClickAdd={this.onClickAdd}
        onClickEdit={this.onClickEdit}
        categories={categories}
        onDeleteCategory={this.onDeleteCategory}
        addCategory={this.addCategory}
        onClickSave={this.onClickSave}
      />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.admin.admin.categories
});

export default connect(
  mapStateToProps,
  { addCategory, deleteCategory }
)(Category);
