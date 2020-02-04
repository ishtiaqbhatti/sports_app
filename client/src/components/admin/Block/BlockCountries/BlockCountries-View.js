import React from "react";
import EditButton from "../../../ui/Buttons/EditButton";
import SaveButton from "../../../ui/Buttons/SaveButton";
import CancelButton from "../../../ui/Buttons/CancelButton";
import GreenButton from "../../../ui/Buttons/GreenButton";
import isEmpty from "../../../../utils/is-empty";
import SelectListGroup from "../../../common/SelectListGroup";

import getCountryName from "../../../../utils/getCountryName";

const BlockCountriesView = ({
  data,
  onClickEdit,
  onClickSave,
  getCountries,
  continentOptions,
  countryOptions,
  onBlock,
  onUnBlock,
  countries,
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
          <h4 className="font-32 tabs-title">Block Countries</h4>
        </div>
        <form onSubmit={onBlock} noValidate>
          <div className="container">
            <div
              className="row"
              // style={{ display: "flex", justifyContent: "stretch" }}
            >
              <div className="col">
                <div className="form-group" style={{ paddingLeft: "3rem" }}>
                  {/* <span className="fa fa-search form-control-feedback" /> */}
                  <SelectListGroup
                    name="continent"
                    value={data.continent}
                    onChange={getCountries}
                    options={continentOptions}
                    disabled={data.disabled}
                  />
                </div>
              </div>
              {data.input ? (
                <div className="form-group has-search col-md-5">
                  <SelectListGroup
                    name="country"
                    value={data.country}
                    onChange={onChange}
                    options={countryOptions}
                  />
                </div>
              ) : null}
              {data.blockButton ? (
                <div className="col-md-2" style={{ paddingLeft: "40px" }}>
                  <GreenButton
                    style={{ backgroundColor: "red" }}
                    onClick={onBlock}
                    disabled={data.disabled}
                    type="save"
                    label="Block"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </form>
      </div>
      <div className="row mt-20">
        <div className="col-md-12">
          {isEmpty(countries) ? (
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="error-container">
                  <h5 className="error-title">
                    Currently there is no country blocked
                  </h5>
                </div>
              </div>
            </div>
          ) : (
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Conuntry Name</th>

                  <th>Block/Unblock</th>
                </tr>
              </thead>
              <tbody>
                {countries.map(country => (
                  <tr key={country._id}>
                    <td>{getCountryName(country.sortname)}</td>

                    <td>
                      <SaveButton
                        onClick={() => onUnBlock(country.sortname)}
                        type="save"
                        label="UnBlock"
                        disabled={data.disabled}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
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
        <CancelButton
          onClick={onClickEdit}
          label="Cancel"
          type="cancel"
          disabled={data.disabled}
        />
      </div>
    </div>
  );
};

export default BlockCountriesView;
