import React from "react";
import EditButton from "../../ui/Buttons/EditButton";
import SaveButton from "../../ui/Buttons/SaveButton";
import CancelButton from "../../ui/Buttons/CancelButton";
import SmallDeleteBtn from "../../ui/Buttons/SmallDeleteBtn";
import AddButton from "../../ui/Buttons/AddButton";
import GreenButton from "../../ui/Buttons/GreenButton";
import Select from "../../common/SelectListGroup";

const EventTypeView = ({
  eventTypes,
  data,
  onClickAdd,
  onClickEdit,
  onChange,
  onDeleteEventType,
  onClickSave,
  addEventType
}) => {
  return (
    <div className="tab-pane" id="services" role="tabpanel">
      <div className="row">
        <div className="col text-right">
          <EditButton
            onClick={onClickEdit}
            disabled={data.editdisabled}
            type="Edit"
          >
            Edit
          </EditButton>
        </div>
        <div className="col-md-12  text-center">
          <h4 className="font-32 tabs-title">Event Type</h4>
        </div>
        <div className="col-md-6 offset-md-3 text-center">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {eventTypes.map(eventType => (
                <tr key={eventType._id}>
                  <td>{eventType.label}</td>
                  <td>
                    <SmallDeleteBtn
                      type="smalldelete"
                      label="Delete"
                      disabled={data.disabled}
                      onClick={() => onDeleteEventType(eventType._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {data.addButton ? (
            <AddButton
              label="Add EventType"
              type="addbtn"
              onClick={onClickAdd}
              disabled={data.disabled}
              style={{ paddingBottom: "10px" }}
            />
          ) : null}
          {data.input ? (
            <form onSubmit={addEventType} noValidate>
              <div className="row text-center">
                <div className="form-group">
                  <div className="col-md-3">
                    {/* <span className="fa fa-search form-control-feedback" /> */}
                    <input
                      name="eventType"
                      value={data.eventType}
                      style={{ width: "28rem" }}
                      type="text"
                      className="form-control"
                      placeholder="Add EventType.. "
                      onChange={onChange}
                    />
                  </div>

                  <div className="col-md-2">
                    <GreenButton
                      type="submit"
                      style={{ paddingLeft: "16rem" }}
                      label="Add Event Type"
                    />
                  </div>
                </div>
              </div>
            </form>
          ) : null}
        </div>
      </div>
      <div className="bd-top" />
      <div className="osr-btn-group p-b-15  text-center">
        <SaveButton
          onClick={onClickSave}
          label="Save"
          type="save"
          disabled={data.disabled}
        />
        {/* <CancelButton
          onClick={onClickEdit}
          label="Cancel"
          type="cancel"
          disabled={data.disabled}
        /> */}
      </div>
    </div>
  );
};

export default EventTypeView;
