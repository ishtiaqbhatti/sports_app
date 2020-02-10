import React from "react";
import EditButton from "../../ui/Buttons/EditButton";
import SaveButton from "../../ui/Buttons/SaveButton";
import CancelButton from "../../ui/Buttons/CancelButton";

const UniquePackagesView = ({
  onClickCancel,
  onClickEdit,
  data,
  onSubmitForm,
  onChange
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
        <div className="col-md-12 text-center">
          <h4 className="font-32 tabs-title">Unique Packages</h4>
        </div>
        <div className="col-md-12 text-center">
          <form id="unique" onSubmit={onSubmitForm} noValidate>
            <div className="row">
              <div className="col-md-4">
                <div className="card pkg-gold package-card m-b-30 border-1-gray bg-image-Bespoke">
                  <div className="price-table-head BeSpoke">
                    <h6>Bespoke</h6>
                  </div>
                  <div className="card-body">
                    <div className="m-0">
                      <h6 className="text-muted">
                        <b>Description:</b>
                      </h6>
                      <textarea
                        name="bespoke"
                        value={data.bespoke}
                        onChange={onChange}
                        maxLength={500}
                        rows={15}
                        minLength={200}
                        className="form-control"
                        disabled={data.disabled}
                      />
                    </div>
                  </div>
                </div>
                {/* end card */}
              </div>
              <div className="col-md-4">
                <div className="card pkg-gold package-card m-b-30 border-1-gray bg-image-Custom">
                  <div className="price-table-head Custom">
                    <h6>Custom</h6>
                  </div>
                  <div className="card-body">
                    <div className="m-0">
                      <h6 className="text-muted">
                        <b>Description:</b>
                      </h6>
                      <textarea
                        name="custom"
                        value={data.custom}
                        onChange={onChange}
                        maxLength={500}
                        rows={15}
                        minLength={200}
                        className="form-control"
                        disabled={data.disabled}
                      />
                    </div>
                  </div>
                </div>
                {/* end card */}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bd-top" />
      <div className="osr-btn-group p-b-15  text-center">
        <SaveButton
          type="save"
          label="Save"
          form="unique"
          disabled={data.disabled}
          onClick={onSubmitForm}
        />
        <CancelButton
          onClick={onClickCancel}
          label="Cancel"
          type="cancel"
          disabled={data.disabled}
        />
      </div>
    </div>
  );
};

export default UniquePackagesView;
