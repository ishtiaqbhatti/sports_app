import React, { Component } from "react";
import { addCatering, deleteCatering } from "../../../actions/adminActions";
import isEmpty from "../../../utils/is-empty";

import { connect } from "react-redux";
import CateringView from "./Catering-View";
import { toast } from "react-toastify";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class Catering extends Component {
  state = {
    data: {
      disabled: true,
      editdisabled: false,
      input: false,
      addButton: true,
      label: "",
      catering: 0
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
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    this.setState({
      data: {
        ...this.state.data,
        label: label,
        [e.target.name]: e.target.value
      }
    });
  };
  addCatering = e => {
    e.preventDefault();

    const newCatering = {
      catering: this.state.data.catering,
      label: this.state.data.label
    };
    if (!isEmpty(newCatering.catering) && newCatering.catering !== 0) {
      console.log(newCatering);
      this.props.addCatering(newCatering);
      this.setState({
        data: {
          ...this.state.data,
          input: !this.state.data.input,
          addButton: !this.state.data.addButton
        }
      });
    }
  };

  onDeleteCatering = id => {
    confirmAlert({
      title: "Confirm",
      message: "Are you sure you want to delete the Catering",
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
    let catering = {
      id: id
    };

    this.props.deleteCatering(catering);
  };

  onClickSave = () => {
    this.onClickEdit();
    toast.success("Successfully Updated the Categories");
  };

  render() {
    const { data } = this.state;
    const { caterings } = this.props;

    const sortedCaterings = caterings.sort((a, b) => {
      return a.value - b.value;
    });

    const cateringOptions = [
      { label: "Select Catering Capacity", value: "" },
      { label: "10K - 20K", value: 20000 },
      { label: "20K - 30K", value: 30000 },
      { label: "30K - 50K", value: 50000 },
      { label: "50K - 100K", value: 100000 },
      { label: "100K - 500K", value: 500000 },
      { label: "1M+", value: 1000000 }
    ];

    var filteredArray = cateringOptions.filter(function(array_el) {
      return (
        caterings.filter(function(anotherOne_el) {
          return anotherOne_el.value === array_el.value;
        }).length === 0
      );
    });

    return (
      <CateringView
        data={data}
        caterings={sortedCaterings}
        onClickAdd={this.onClickAdd}
        onClickEdit={this.onClickEdit}
        onClickSave={this.onClickSave}
        addCatering={this.addCatering}
        onDeleteCatering={this.onDeleteCatering}
        onChange={this.onChange}
        cateringOptions={filteredArray}
      />
    );
  }
}

const mapStateToProps = state => ({
  caterings: state.admin.admin.catering
});

export default connect(
  mapStateToProps,
  { addCatering, deleteCatering }
)(Catering);
