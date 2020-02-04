import React, { Component } from "react";
import { connect } from "react-redux";
import { addEventTypes, deleteEventTypes } from "../../../actions/adminActions";
import EventTypeView from "./EventType-View";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class EventType extends Component {
  state = {
    data: {
      disabled: true,
      editdisabled: false,
      input: false,
      addButton: true,
      eventType: ""
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
  addEventType = e => {
    e.preventDefault();

    const newEventType = {
      eventType: this.state.data.eventType
    };

    this.props.addEventTypes(newEventType);

    this.setState({
      data: {
        ...this.state.data,
        input: !this.state.data.input,
        addButton: !this.state.data.addButton
      }
    });
  };

  onDeleteEventType = id => {
    confirmAlert({
      title: "Confirm",
      message: "Are you sure you want to delete the Event Type",
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
    let eventType = {
      id: id
    };

    this.props.deleteEventTypes(eventType);
  };

  onClickSave = () => {
    this.onClickEdit();
    toast.success("Successfully Updated the Categories");
  };

  render() {
    const { data } = this.state;
    const { eventTypes } = this.props;
    return (
      <EventTypeView
        data={data}
        onClickEdit={this.onClickEdit}
        onClickAdd={this.onClickAdd}
        onClickSave={this.onClickSave}
        eventTypes={eventTypes}
        onDeleteEventType={this.onDeleteEventType}
        onChange={this.onChange}
        addEventType={this.addEventType}
      />
    );
  }
}

const mapStateToProps = state => ({
  eventTypes: state.admin.admin.eventTypes
});

export default connect(
  mapStateToProps,
  { addEventTypes, deleteEventTypes }
)(EventType);
