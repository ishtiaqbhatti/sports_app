import React from "react";
import EditButton from "../../../ui/Buttons/EditButton";
import SaveButton from "../../../ui/Buttons/SaveButton";
import CancelButton from "../../../ui/Buttons/CancelButton";

const BlockContinentView = ({
  continents,
  data,
  onClickEdit,
  onBlock,
  onUnBlock,
  onClickSave
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
          <h4 className="font-32 tabs-title">Block/UnBlock Continents</h4>
        </div>
      </div>

      <div className="row mt-20">
        <div className="col-md-12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Continent Name</th>

                <th>Block/Unblock</th>
              </tr>
            </thead>
            <tbody>
              {continents.map(continent => (
                <tr key={continent._id}>
                  <td>{continent.continent}</td>

                  <td>
                    {continent.isBlocked ? (
                      <CancelButton
                        onClick={() => onUnBlock(continent.continent)}
                        type="cancel"
                        label="Blocked"
                        disabled={data.disabled}
                      />
                    ) : (
                      <SaveButton
                        onClick={() => onBlock(continent.continent)}
                        type="save"
                        label="UnBlocked"
                        disabled={data.disabled}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bd-top" />
      <div className="osr-btn-group p-b-15  text-center">
        <SaveButton
          onClick={onClickSave}
          type="save"
          label="Save"
          disabled={data.disabled}
        />
        <CancelButton
          onClick={onClickEdit}
          type="cancel"
          label="Cancel"
          disabled={data.disabled}
        />
      </div>
    </div>
  );
};

export default BlockContinentView;
