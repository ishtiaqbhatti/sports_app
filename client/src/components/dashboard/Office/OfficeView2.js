import React from "react";
import EditButton from "../../ui/Buttons/EditButton";

import Input from "../../common/InputGroup";
import SelectListGroup from "../../common/SelectListGroup";
import SaveButton from "../../ui/Buttons/SaveButton";
import CancelButton from "../../ui/Buttons/CancelButton";

import BranchOfficeView1 from "./BranchOfficeView1";
import BranchOfficeView2 from "./BranchOfficeView2";
import BranchOfficeView3 from "./BranchOfficeView3";

import isEmpty from "../../../utils/is-empty";
import ReactFlagsSelect from "react-flags-select";

import "react-flags-select/css/react-flags-select.css";
const OfficeView = ({
  data,
  onClickEdit,
  onClickSave,
  onChange,
  onSubmit,
  onClickAddButton,
  ubcOptions,
  cbcOptions,
  onClickRemoveButton,

  continentOptions,
  countryOptions,
  stateOptions,
  cityOptions,
  getStatesbyCountry,
  getCountriesbyContint,
  getCities,
  ubAfricanCountryOptions,
  type
}) => {
  return (
    <div className="tab-pane" id="office" role="tabpanel">
      <div className="row">
        <div className="col text-left align-self-center">
          <h4 className="font-18 mb-0 tabs-title">
            Main Office<sup className="text-danger">*</sup>
          </h4>
        </div>
        <div className="col text-right">
          <EditButton
            onClick={onClickEdit}
            disabled={data.editdisabled}
            type="Edit"
          >
            Edit
          </EditButton>
        </div>
      </div>
      <form id="office" noValidate>
        <fieldset disabled={data.formdisabled}>
          <div className="row">
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>Street Address 1</b>
                </h6>
                <Input
                  name="streetAdress1"
                  value={data.streetAdress1}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>Street Address 2</b>
                </h6>
                <Input
                  name="streetAdress2"
                  value={data.streetAdress2}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>Apt,suite,etc.(optional)</b>
                </h6>
                <Input
                  name="apiSuite"
                  value={data.apiSuite}
                  onChange={onChange}
                />
              </div>
            </div>
            {type === "vendor" ? (
              <div className="form-group col-md-4">
                <div className="m-t-20">
                  <h6 className="text-muted">
                    <b>Continent</b>
                  </h6>
                  <SelectListGroup
                    placeholder="Continet"
                    name="continent"
                    value={data.continent}
                    onChange={getCountriesbyContint}
                    options={continentOptions ? continentOptions : []}
                  />
                </div>
              </div>
            ) : (
              <div className="form-group col-md-4">
                <div className="m-t-20">
                  <h6 className="text-muted">
                    <b>Country</b>
                  </h6>
                  <ReactFlagsSelect
                    className={
                      data.disabled ? "menu-flags-disabled" : "menu-flags"
                    }
                    disabled={data.disabled}
                    alignOptions="left"
                    name="country"
                    defaultCountry={data.country}
                    value={data.country}
                    selectedSize={17}
                    optionsSize={17}
                    countries={ubAfricanCountryOptions}
                    onSelect={getStatesbyCountry}
                  />
                </div>
              </div>
            )}

            {type === "vendor" && !isEmpty(countryOptions) ? (
              <div className="form-group col-md-4">
                <div className="m-t-20">
                  <h6 className="text-muted">
                    <b>Country</b>
                  </h6>
                  <SelectListGroup
                    placeholder="Country"
                    name="country"
                    value={data.country}
                    onChange={getStatesbyCountry}
                    options={countryOptions ? countryOptions : []}
                  />
                </div>
              </div>
            ) : null}
            {!isEmpty(stateOptions) ? (
              <div className="form-group col-md-4">
                <div className="m-t-20">
                  <h6 className="text-muted">
                    <b>State</b>
                  </h6>
                  <SelectListGroup
                    placeholder="st"
                    name="st"
                    value={data.st}
                    selected={data.st}
                    onChange={getCities}
                    options={stateOptions ? stateOptions : []}
                  />
                </div>
              </div>
            ) : null}

            {!isEmpty(cityOptions) ? (
              <div className="form-group col-md-4">
                <div className="m-t-20">
                  <h6 className="text-muted">
                    <b>City</b>
                  </h6>
                  <SelectListGroup
                    placeholder="city"
                    name="city"
                    value={data.city}
                    onChange={onChange}
                    options={cityOptions ? cityOptions : []}
                  />
                </div>
              </div>
            ) : null}
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>zip/postal code</b>
                </h6>
                <Input
                  name="zipCode"
                  value={data.zipCode}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>Mobile no</b>
                </h6>
                <Input
                  name="officeMobileNo"
                  value={data.officeMobileNo}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>Telephone (optional)</b>
                </h6>
                <Input
                  name="phoneNo2"
                  value={data.phoneNo2}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>Telephone (optional)</b>
                </h6>
                <Input
                  name="phoneNo3"
                  value={data.phoneNo3}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>Facebook Address (optional)</b>
                </h6>
                <Input
                  name="fbAdress"
                  value={data.fbAdress}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>Instagram Handle (optional)</b>
                </h6>
                <Input
                  name="instaAdress"
                  value={data.instaAdress}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>Twitter Handle (optional)</b>
                </h6>
                <Input
                  name="twitterAdress"
                  value={data.twitterAdress}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>Youtube Address (optional)</b>
                </h6>
                <Input
                  name="youtubeAdress"
                  value={data.youtubeAdress}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="m-t-20">
                <h6 className="text-muted">
                  <b>LinkedIn (optional)</b>
                </h6>
                <Input
                  name="linkdnAdress"
                  value={data.linkdnAdress}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          {type === "planner" ? (
            <div className="col-md-12">
              {data.addBtn ? (
                <div className="m-t-20">
                  <button
                    className="os-btn waves-effect waves-light"
                    type="button"
                    onClick={onClickAddButton}
                  >
                    Add Branch Office
                  </button>
                </div>
              ) : null}
              {data.addBtn ? null : (
                <div>
                  <BranchOfficeView1
                    getCountriesbyContint={getCountriesbyContint}
                    data={data}
                    onClickRemoveButton={onClickRemoveButton}
                    onChange={onChange}
                    ubcOptions={ubcOptions}
                    cbcOptions={cbcOptions}
                  />
                  <BranchOfficeView2
                    getCountriesbyContint={getCountriesbyContint}
                    data={data}
                    onChange={onChange}
                    ubcOptions={ubcOptions}
                    cbcOptions={cbcOptions}
                  />
                  <BranchOfficeView3
                    getCountriesbyContint={getCountriesbyContint}
                    data={data}
                    onChange={onChange}
                    ubcOptions={ubcOptions}
                    cbcOptions={cbcOptions}
                  />
                </div>
              )}
            </div>
          ) : null}

          <div className="bd-top" />

          {/* {!addBtn || branchOffice ? (
            <div className="row">
              <div className="col text-left align-self-center">
                <h4 className="font-18 mb-0 tabs-title">
                  Branch Office<sup className="text-danger">*</sup>
                </h4>
              </div>
              <div className="col text-right">
                <button
                  className="os-btn cancel-btn waves-effect waves-light"
                  onClick={onClickBtn}
                >
                  Remove Branch Office
                </button>
              </div>
            </div>
          ) : null} */}
          {/* <div className="row">
            {!addBtn && branchOffice ? BranchOffice : null}
            {!removeBtn ? (
              <div className="col-md-12">
                <div className="m-t-20">
                  <button
                    className="os-btn waves-effect waves-light"
                    onClick={onClickBtn}
                  >
                    Add Branch Office
                  </button>
                </div>
              </div>
            ) : null}
          </div> */}
          {/* end row */}
        </fieldset>
      </form>
      <div className="bd-top" />
      <div className="osr-btn-group p-b-15  text-center">
        <SaveButton
          form="office"
          label="Save"
          onClick={onSubmit}
          type="save"
          disabled={data.disabled}
        />
        <CancelButton
          onClick={onClickSave}
          label="Cancel"
          type="cancel"
          disabled={data.disabled}
        />
      </div>
    </div>
  );
};

export default OfficeView;
