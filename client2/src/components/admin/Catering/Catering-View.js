import React from "react";
import EditButton from "../../ui/Buttons/EditButton";
import SaveButton from "../../ui/Buttons/SaveButton";
import CancelButton from "../../ui/Buttons/CancelButton";
import SmallDeleteBtn from "../../ui/Buttons/SmallDeleteBtn";
import AddButton from "../../ui/Buttons/AddButton";
import GreenButton from "../../ui/Buttons/GreenButton";
import Select from "../../common/SelectListGroup";

const CateringView = ({
  caterings,
  data,
  onClickAdd,
  onClickEdit,
  onChange,
  onDeleteCatering,
  onClickSave,
  cateringOptions,
  addCatering
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
          <h4 className="font-32 tabs-title">Catering</h4>
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
              {caterings.slice(0, 5).map(catering => (
                <tr key={catering._id}>
                  <td>{catering.label}</td>
                </tr>
              ))}
              {caterings.slice(5).map(catering => (
                <tr key={catering._id}>
                  <td>{catering.label}</td>
                  <td>
                    <SmallDeleteBtn
                      type="smalldelete"
                      label="Delete"
                      disabled={data.disabled}
                      onClick={() => onDeleteCatering(catering._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {data.addButton && cateringOptions.length > 1 ? (
            <AddButton
              label="Add Catering"
              type="addbtn"
              onClick={onClickAdd}
              disabled={data.disabled}
              style={{ paddingBottom: "10px" }}
            />
          ) : null}
          {data.input ? (
            <form onSubmit={addCatering} noValidate>
              <div
                className="row text-center"
                style={{ display: "flex", justifyContent: "stretch" }}
              >
                <div className="col-md-5">
                  <div className="form-group" style={{ paddingLeft: "3rem" }}>
                    {/* <span className="fa fa-search form-control-feedback" /> */}
                    <Select
                      name="catering"
                      value={data.catering}
                      options={cateringOptions}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <GreenButton
                    type="submit"
                    style={{ paddingLeft: "16rem" }}
                    label="Add Catering"
                  />
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

export default CateringView;
